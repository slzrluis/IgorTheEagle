// Google Forms Submitter - Submits responses to Google Forms
class GoogleFormsSubmitter {
  constructor(formUrl, formId, questions) {
    this.formUrl = formUrl;
    this.formId = formId;
    this.questions = questions || [];
    this.responses = {};
  }
  
  addResponse(questionId, answer) {
    this.responses[questionId] = answer;
  }
  
  async submitForm() {
    try {
      console.log('Submitting form responses:', this.responses);
      
      // Build the submission URL
      let submitUrl = this.formUrl;
      
      // Convert to formResponse URL
      if (submitUrl.includes('/viewform')) {
        submitUrl = submitUrl.replace('/viewform', '/formResponse');
      } else if (submitUrl.includes('/edit')) {
        submitUrl = submitUrl.replace('/edit', '/formResponse');
      } else {
        submitUrl = `https://docs.google.com/forms/d/e/${this.formId}/formResponse`;
      }
      
      // Build form data with actual entry IDs
      const formData = new FormData();
      
      // Map responses to entry IDs
      Object.keys(this.responses).forEach(questionId => {
        const answer = this.responses[questionId];
        const question = this.questions.find(q => q.id == questionId);
        
        if (question && question.entryId) {
          console.log(`Mapping question ${questionId} (entry.${question.entryId}) = ${answer}`);
          formData.append(`entry.${question.entryId}`, answer);
        }
      });
      
      console.log('Submission URL:', submitUrl);
      console.log('Form data:', Object.fromEntries(formData));
      
      // Submit to Google Forms
      const response = await fetch(submitUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Forms requires no-cors mode
      });
      
      console.log('Form submitted successfully!');
      
      // Also store locally as backup
      await this.storeLocally(true);
      
      return { success: true };
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Store locally if submission fails
      await this.storeLocally(false);
      
      throw error;
    }
  }
  
  async storeLocally(submitted) {
    return new Promise((resolve) => {
      const submissionData = {
        formUrl: this.formUrl,
        responses: this.responses,
        timestamp: new Date().toISOString(),
        submitted: submitted
      };
      
      chrome.runtime.sendMessage({
        action: 'saveFormResponse',
        data: submissionData
      }, (response) => {
        console.log('Responses stored locally');
        resolve(response);
      });
    });
  }
  
  getAllResponses() {
    return this.responses;
  }
  
  clearResponses() {
    this.responses = {};
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleFormsSubmitter;
}
