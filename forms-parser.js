// Google Forms Parser - Extracts questions from a Google Form
class GoogleFormsParser {
  constructor(formUrl) {
    this.formUrl = formUrl;
    this.formId = this.extractFormId(formUrl);
  }
  
  extractFormId(url) {
    // Extract form ID from various Google Forms URL formats
    const patterns = [
      /\/forms\/d\/e\/([^\/]+)\//,  // Published form
      /\/forms\/d\/([^\/]+)\//,      // Edit form
      /formId=([^&]+)/               // Query parameter
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  }
  
  async fetchQuestions() {
    try {
      console.log('Fetching form with ID:', this.formId);
      
      // Try to fetch the form as a viewform (public view)
      let formViewUrl = `https://docs.google.com/forms/d/e/${this.formId}/viewform`;
      
      // If the URL doesn't have /e/ prefix, try the direct ID
      if (!this.formUrl.includes('/e/')) {
        formViewUrl = `https://docs.google.com/forms/d/${this.formId}/viewform`;
      }
      
      console.log('Fetching from:', formViewUrl);
      
      const response = await fetch(formViewUrl);
      const html = await response.text();
      
      console.log('Form HTML fetched, parsing...');
      
      return this.parseFormHTML(html);
    } catch (error) {
      console.error('Error fetching form:', error);
      throw new Error('Could not fetch form. Make sure the form is public and the URL is correct.');
    }
  }
  
  parseFormHTML(html) {
    // Create a temporary DOM element to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const questions = [];
    
    try {
      // Google Forms stores data in a script tag with FB_PUBLIC_LOAD_DATA_
      const scripts = doc.querySelectorAll('script');
      let formData = null;
      
      for (const script of scripts) {
        const content = script.textContent;
        if (content.includes('FB_PUBLIC_LOAD_DATA_')) {
          // Extract the JSON data
          const match = content.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.+?\]);/);
          if (match) {
            formData = JSON.parse(match[1]);
            break;
          }
        }
      }
      
      if (!formData || !formData[1] || !formData[1][1]) {
        console.error('Could not find form data in HTML');
        return this.parseFallbackMethod(doc);
      }
      
      // Navigate the form data structure
      const formStructure = formData[1][1];
      
      formStructure.forEach((item, index) => {
        if (!item || !Array.isArray(item)) return;
        
        // Question data is typically at item[1]
        const questionData = item[1];
        if (!questionData) return;
        
        const questionText = questionData[0]; // Question text
        const questionType = item[3]; // Question type
        const entryId = item[4] && item[4][0] && item[4][0][0]; // Entry ID for submission
        
        if (!questionText) return;
        
        const question = {
          id: index + 1,
          entryId: entryId || null, // Store entry ID for submission
          text: questionText,
          type: 'text',
          options: null
        };
        
        // Determine question type and extract options
        if (questionType === 2) {
          // Multiple choice
          question.type = 'multiple_choice';
          const optionsData = item[4];
          if (optionsData && optionsData[0]) {
            question.options = optionsData[0].map(opt => opt[0]);
          }
        } else if (questionType === 3) {
          // Dropdown
          question.type = 'multiple_choice';
          const optionsData = item[4];
          if (optionsData && optionsData[0]) {
            question.options = optionsData[0].map(opt => opt[0]);
          }
        } else if (questionType === 4) {
          // Checkboxes
          question.type = 'multiple_choice';
          const optionsData = item[4];
          if (optionsData && optionsData[0]) {
            question.options = optionsData[0].map(opt => opt[0]);
          }
        } else if (questionType === 5) {
          // Linear scale
          question.type = 'multiple_choice';
          const scaleData = item[4];
          if (scaleData && scaleData[0]) {
            const min = scaleData[0][0] || 1;
            const max = scaleData[0][1] || 5;
            question.options = [];
            for (let i = min; i <= max; i++) {
              question.options.push(i.toString());
            }
          }
        } else {
          // Text, paragraph, etc.
          question.type = 'text';
        }
        
        questions.push(question);
      });
      
    } catch (error) {
      console.error('Error parsing form data:', error);
      return this.parseFallbackMethod(doc);
    }
    
    return questions;
  }
  
  parseFallbackMethod(doc) {
    // Fallback method: try to parse visible form elements
    console.log('Using fallback parsing method');
    
    const questions = [];
    
    // Try to find question elements by common class names/attributes
    const questionElements = doc.querySelectorAll('[role="listitem"], .freebirdFormviewerViewItemsItemItem');
    
    questionElements.forEach((elem, index) => {
      try {
        // Look for question text
        const questionLabel = elem.querySelector('[role="heading"], .freebirdFormviewerViewItemsItemItemTitle');
        if (!questionLabel) return;
        
        const questionText = questionLabel.textContent.trim();
        if (!questionText) return;
        
        const question = {
          id: index + 1,
          text: questionText,
          type: 'text',
          options: null
        };
        
        // Check for radio buttons (multiple choice)
        const radioOptions = elem.querySelectorAll('input[type="radio"]');
        if (radioOptions.length > 0) {
          question.type = 'multiple_choice';
          question.options = [];
          
          radioOptions.forEach(radio => {
            const label = radio.parentElement.querySelector('span, label');
            if (label && label.textContent.trim()) {
              question.options.push(label.textContent.trim());
            }
          });
        }
        
        // Check for checkboxes
        const checkboxOptions = elem.querySelectorAll('input[type="checkbox"]');
        if (checkboxOptions.length > 0) {
          question.type = 'multiple_choice';
          question.options = [];
          
          checkboxOptions.forEach(checkbox => {
            const label = checkbox.parentElement.querySelector('span, label');
            if (label && label.textContent.trim()) {
              question.options.push(label.textContent.trim());
            }
          });
        }
        
        questions.push(question);
      } catch (err) {
        console.error('Error parsing question element:', err);
      }
    });
    
    if (questions.length === 0) {
      throw new Error('Could not parse any questions from the form. The form might be private or have an unsupported format.');
    }
    
    return questions;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleFormsParser;
}
