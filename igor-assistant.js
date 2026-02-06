// Igor Assistant JavaScript - Form Completion Focus
class IgorAssistant {
  constructor() {
    this.currentQuestionIndex = 0;
    this.questions = [];
    this.settings = {};
    this.submitter = null;
    
    this.init();
  }
  
  async init() {
    console.log('Igor initializing...');
    
    // Load settings
    await this.loadSettings();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Load form questions
    await this.loadFormQuestions();
    
    // Show first question
    this.showQuestion();
  }
  
  async loadSettings() {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'getSettings' }, (response) => {
        this.settings = response.settings || {
          formUrl: '',
          voiceEnabled: false,
          clickEnabled: true,
          voiceType: 'deep-male',
          microphoneEnabled: false
        };
        console.log('Settings loaded:', this.settings);
        resolve();
      });
    });
  }
  
  setupEventListeners() {
    document.getElementById('close-button').addEventListener('click', () => {
      window.parent.postMessage({ action: 'closeIgor' }, '*');
    });
  }
  
  async loadFormQuestions() {
    // Check if user has configured a form URL
    if (!this.settings.formUrl || !this.settings.formUrl.trim()) {
      console.log('No form URL configured');
      this.showNoFormMessage();
      return;
    }
    
    try {
      console.log('Loading questions from form:', this.settings.formUrl);
      const parser = new GoogleFormsParser(this.settings.formUrl);
      this.questions = await parser.fetchQuestions();
      
      if (this.questions.length === 0) {
        console.warn('No questions found in form');
        this.showError('No questions found in the form. Please check the form URL.');
        return;
      }
      
      console.log(`Loaded ${this.questions.length} questions from form`);
      // Initialize submitter with questions for entry ID mapping
      this.submitter = new GoogleFormsSubmitter(this.settings.formUrl, parser.formId, this.questions);
    } catch (error) {
      console.error('Error loading form questions:', error);
      this.showError(`Could not load questions from form:\n${error.message}\n\nPlease check the form URL in settings.`);
    }
  }
  
  showNoFormMessage() {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const questionCounter = document.getElementById('question-counter');
    
    questionCounter.textContent = 'Setup Required';
    questionText.innerHTML = '<strong>Please link a Google Form</strong><br><br>Go to Settings and add your Google Form URL to get started.';
    answersContainer.innerHTML = '';
    
    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'submit-button';
    settingsBtn.textContent = 'Open Settings';
    settingsBtn.addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
    
    answersContainer.appendChild(settingsBtn);
  }
  
  showQuestion() {
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showCompletion();
      return;
    }
    
    const question = this.questions[this.currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const questionCounter = document.getElementById('question-counter');
    
    // Update question counter
    questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    
    // Update question text
    questionText.textContent = question.text;
    answersContainer.innerHTML = '';
    
    if (question.type === 'multiple_choice' && question.options && question.options.length > 0) {
      // Show multiple choice buttons
      question.options.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = option;
        button.addEventListener('click', () => this.handleAnswer(option));
        answersContainer.appendChild(button);
      });
    } else {
      // Show text input
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'text-input';
      input.placeholder = 'Type your answer...';
      input.id = 'text-answer-input';
      
      const submitBtn = document.createElement('button');
      submitBtn.className = 'submit-button';
      submitBtn.textContent = 'Submit Answer';
      submitBtn.addEventListener('click', () => {
        const value = input.value.trim();
        if (value) {
          this.handleAnswer(value);
        }
      });
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const value = input.value.trim();
          if (value) {
            this.handleAnswer(value);
          }
        }
      });
      
      answersContainer.appendChild(input);
      answersContainer.appendChild(submitBtn);
      
      // Auto-focus the input
      setTimeout(() => input.focus(), 100);
    }
    
    // Update progress bar
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
  }
  
  handleAnswer(answer) {
    const question = this.questions[this.currentQuestionIndex];
    
    console.log(`Question ${question.id}: ${question.text}`);
    console.log(`Answer: ${answer}`);
    
    // Store the answer
    if (this.submitter) {
      this.submitter.addResponse(question.id, answer);
    }
    
    // Move to next question
    this.currentQuestionIndex++;
    this.showQuestion();
  }
  
  async showCompletion() {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const questionCounter = document.getElementById('question-counter');
    
    questionCounter.textContent = `Complete! ${this.questions.length} of ${this.questions.length}`;
    questionText.textContent = "Great job! You've completed all questions.";
    answersContainer.innerHTML = '';
    
    // Create submission status
    const statusDiv = document.createElement('div');
    statusDiv.style.cssText = 'text-align: center; padding: 10px;';
    statusDiv.innerHTML = '<p style="color: #555; font-size: 13px;">Submitting your responses...</p>';
    answersContainer.appendChild(statusDiv);
    
    // Submit the form
    try {
      if (this.submitter) {
        await this.submitter.submitForm();
        statusDiv.innerHTML = '<p style="color: #4ECDC4; font-weight: bold;">✓ Responses saved!</p>';
        
        console.log('All responses:', this.submitter.getAllResponses());
      }
    } catch (error) {
      console.error('Submission error:', error);
      statusDiv.innerHTML = '<p style="color: #FF6B6B;">Error saving responses</p>';
    }
    
    // Progress bar to 100%
    document.getElementById('progress-fill').style.width = '100%';
    
    // Auto-close after 2 seconds
    setTimeout(() => {
      window.parent.postMessage({ action: 'closeIgor' }, '*');
    }, 2000);
  }
  
  showError(message) {
    const questionText = document.getElementById('question-text');
    questionText.textContent = message;
    
    // Show OK button to dismiss
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    const okBtn = document.createElement('button');
    okBtn.className = 'submit-button';
    okBtn.textContent = 'OK';
    okBtn.style.marginTop = '10px';
    okBtn.addEventListener('click', () => {
      this.showQuestion();
    });
    
    answersContainer.appendChild(okBtn);
  }
}

// Initialize Igor when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing Igor...');
  new IgorAssistant();
});
