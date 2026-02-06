// Igor Assistant JavaScript
class IgorAssistant {
  constructor() {
    this.currentQuestionIndex = 0;
    this.questions = [];
    this.answers = {};
    this.settings = {};
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    
    this.init();
  }
  
  async init() {
    // Load settings
    await this.loadSettings();
    
    // Setup speech recognition
    this.setupSpeechRecognition();
    
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
          voiceEnabled: true,
          clickEnabled: true,
          voiceType: 'deep-male',
          microphoneEnabled: true
        };
        resolve();
      });
    });
  }
  
  setupSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';
      
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.handleVoiceAnswer(transcript);
      };
      
      this.recognition.onend = () => {
        this.isListening = false;
        document.getElementById('mic-button').classList.remove('listening');
      };
      
      this.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        this.isListening = false;
        document.getElementById('mic-button').classList.remove('listening');
      };
    }
  }
  
  setupEventListeners() {
    document.getElementById('close-button').addEventListener('click', () => {
      window.parent.postMessage({ action: 'closeIgor' }, '*');
    });
    
    document.getElementById('mic-button').addEventListener('click', () => {
      this.toggleMicrophone();
    });
    
    document.getElementById('speaker-button').addEventListener('click', () => {
      this.speakQuestion();
    });
  }
  
  async loadFormQuestions() {
    // This is a demo version with sample questions
    // In production, this would fetch from Google Forms API
    this.questions = [
      {
        id: 1,
        text: "What's your name, champ?",
        type: "text",
        options: null
      },
      {
        id: 2,
        text: "How are you feeling today?",
        type: "multiple_choice",
        options: ["Pumped!", "Pretty good", "Okay", "Not great"]
      },
      {
        id: 3,
        text: "What's your favorite way to stay active?",
        type: "multiple_choice",
        options: ["Lifting weights", "Running", "Sports", "Yoga", "Walking"]
      },
      {
        id: 4,
        text: "On a scale of 1-10, how's your energy level?",
        type: "multiple_choice",
        options: ["1-2 (Low)", "3-4 (Below average)", "5-6 (Average)", "7-8 (Good)", "9-10 (High!)"]
      },
      {
        id: 5,
        text: "Any feedback you want to share?",
        type: "text",
        options: null
      }
    ];
  }
  
  showQuestion() {
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showCompletion();
      return;
    }
    
    const question = this.questions[this.currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    
    questionText.textContent = question.text;
    answersContainer.innerHTML = '';
    
    if (question.type === 'multiple_choice' && this.settings.clickEnabled) {
      question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = option;
        button.addEventListener('click', () => this.handleAnswer(option));
        answersContainer.appendChild(button);
      });
    } else if (question.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Type your answer or use the microphone...';
      input.style.width = '100%';
      input.style.padding = '10px';
      input.style.borderRadius = '8px';
      input.style.border = '2px solid #667eea';
      input.style.fontSize = '13px';
      
      const submitBtn = document.createElement('button');
      submitBtn.className = 'answer-button';
      submitBtn.textContent = 'Submit';
      submitBtn.style.marginTop = '10px';
      submitBtn.addEventListener('click', () => {
        if (input.value.trim()) {
          this.handleAnswer(input.value);
        }
      });
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
          this.handleAnswer(input.value);
        }
      });
      
      answersContainer.appendChild(input);
      answersContainer.appendChild(submitBtn);
    }
    
    // Update progress bar
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Auto-read question if voice is enabled
    if (this.settings.voiceEnabled) {
      setTimeout(() => this.speakQuestion(), 500);
    }
  }
  
  handleAnswer(answer) {
    const question = this.questions[this.currentQuestionIndex];
    this.answers[question.id] = answer;
    
    // Move to next question
    this.currentQuestionIndex++;
    this.showQuestion();
  }
  
  handleVoiceAnswer(transcript) {
    const question = this.questions[this.currentQuestionIndex];
    
    if (question.type === 'multiple_choice') {
      // Try to match the transcript with one of the options
      const matchedOption = question.options.find(option => 
        transcript.toLowerCase().includes(option.toLowerCase()) ||
        option.toLowerCase().includes(transcript.toLowerCase())
      );
      
      if (matchedOption) {
        this.handleAnswer(matchedOption);
      } else {
        this.speak("I didn't catch that. Try again, buddy!");
      }
    } else {
      // For text questions, accept the full transcript
      this.handleAnswer(transcript);
    }
  }
  
  toggleMicrophone() {
    if (!this.recognition) {
      this.speak("Sorry champ, your browser doesn't support voice recognition!");
      return;
    }
    
    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      document.getElementById('mic-button').classList.remove('listening');
    } else {
      this.recognition.start();
      this.isListening = true;
      document.getElementById('mic-button').classList.add('listening');
    }
  }
  
  speakQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    this.speak(question.text);
  }
  
  speak(text) {
    if (!this.synthesis) return;
    
    // Cancel any ongoing speech
    this.synthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice to be deep male
    utterance.pitch = 0.5; // Lower pitch
    utterance.rate = 0.9; // Slightly slower
    utterance.volume = 1.0;
    
    // Try to find a male voice
    const voices = this.synthesis.getVoices();
    const maleVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('male') || 
      voice.name.toLowerCase().includes('daniel') ||
      voice.name.toLowerCase().includes('david')
    );
    
    if (maleVoice) {
      utterance.voice = maleVoice;
    }
    
    this.synthesis.speak(utterance);
  }
  
  showCompletion() {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    
    questionText.textContent = "💪 Awesome job! You crushed it! Your answers have been saved.";
    answersContainer.innerHTML = '';
    
    // Save responses
    this.saveResponses();
    
    // Speak completion message
    if (this.settings.voiceEnabled) {
      this.speak("Awesome job champ! You crushed it! Your answers have been saved.");
    }
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      window.parent.postMessage({ action: 'closeIgor' }, '*');
    }, 3000);
  }
  
  saveResponses() {
    chrome.runtime.sendMessage({
      action: 'saveFormResponse',
      data: {
        formUrl: this.settings.formUrl,
        answers: this.answers,
        timestamp: new Date().toISOString()
      }
    });
  }
}

// Initialize Igor when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Wait for voices to load
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      new IgorAssistant();
    };
    
    // Fallback in case voices are already loaded
    setTimeout(() => {
      if (window.speechSynthesis.getVoices().length > 0 || !window.igorInitialized) {
        window.igorInitialized = true;
        new IgorAssistant();
      }
    }, 100);
  } else {
    new IgorAssistant();
  }
});
