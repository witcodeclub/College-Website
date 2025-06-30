import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

function WITBot() {
  const [open, setOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [lastBotMessageId, setLastBotMessageId] = useState(null);
  const [conversationContext, setConversationContext] = useState([]);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('witbot-messages');
    return saved ? JSON.parse(saved) : [
      { 
        id: 1,
        from: "bot", 
        text: "Hi! I'm WITBot 👋\n\nI'd love to help you! Please let me know:\n1. Are you a prospective student or current student?\n2. What program/course are you interested in?", 
        timestamp: new Date(),
        showFeedback: false
      }
    ];
  });
  
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Quick Action Buttons
  const quickActions = [
    { text: "Admission Info", emoji: "📌", category: "admission" },
    { text: "Fee Structure", emoji: "💰", category: "fees" },
    { text: "Courses Offered", emoji: "📚", category: "courses" },
    { text: "Complaint Form", emoji: "📝", category: "complaint" },
    { text: "Feedback Form", emoji: "💬", category: "feedback" },
    { text: "Academic Calendar", emoji: "🗓️", category: "calendar" },
    { text: "Contact", emoji: "📞", category: "contact" },
    { text: "College Location", emoji: "📍", category: "location" }
  ];

  // Emoji Picker (Basic)
  const emojis = ["😊", "👍", "👎", "❤️", "🎉", "🔥", "💯", "🤔", "😍", "👏", "🙏", "💪", "🎯", "⭐", "🚀"];

  // Enhanced FAQ Database with complete responses
  const faqDatabase = {
    "admission": {
      keywords: ["admission", "apply", "enroll", "registration", "admission process", "admission info", "how to apply", "entrance exam", "admission process"],
      response: "📌 **Admission Info:**\n\nYou can apply for admission through our official portal here: [Link]\n\n**Application Steps:**\n• Visit our admission portal\n• Fill out the application form\n• Upload required documents\n• Pay application fee\n• Submit and track status\n\n**Required Documents:**\n• 10th & 12th marksheets\n• Transfer certificate\n• Character certificate\n• ID proof (Aadhar/PAN)\n\nFor any queries, feel free to ask! 😊",
      followUp: ["fees", "courses", "eligibility"]
    },
    "fees": {
      keywords: ["fee", "fees", "payment", "cost", "tuition", "scholarship", "fee structure", "how much", "price", "fee structure"],
      response: "💰 **Fee Structure:**\n\nOur fee structure varies by course. You can visit the 'Fees' section on our website or let me know which course you're interested in.\n\n**Engineering Programs:**\n• B.Tech: ₹1,20,000/year\n• M.Tech: ₹1,50,000/year\n\n**Management Programs:**\n• BBA: ₹80,000/year\n• MBA: ₹1,00,000/year\n\n**Other Programs:**\n• BCA: ₹60,000/year\n• MCA: ₹80,000/year\n\n**Scholarships Available:**\n• Merit-based: Up to 50% fee waiver\n• Sports quota: 25% fee waiver\n• EWS category: 100% fee waiver",
      followUp: ["admission", "scholarship", "payment"]
    },
    "courses": {
      keywords: ["course", "courses", "program", "degree", "bachelor", "master", "diploma", "courses offered", "what courses", "branches", "courses offered"],
      response: "📚 **Courses Offered:**\n\nWe offer programs such as B.Tech, BCA, MCA, and more.\n\n**Engineering (B.Tech - 4 years):**\n• Computer Science Engineering\n• Information Technology\n• Electronics & Communication\n• Mechanical Engineering\n• Civil Engineering\n\n**Management:**\n• BBA (3 years)\n• MBA (2 years)\n\n**Computer Applications:**\n• BCA (3 years)\n• MCA (2 years)\n\n**Diploma Programs:**\n• Computer Science\n• Mechanical\n• Electrical\n\nWould you like details for a specific department?",
      followUp: ["admission", "fees", "placement"]
    },
    "complaint": {
      keywords: ["complaint", "grievance", "issue", "problem", "submit a complaint", "complaint submission", "complaint form"],
      response: "📝 **Complaint Form:**\n\nSure! Please fill out the complaint form so that we can take appropriate action.\n\n**How to submit a complaint:**\n• Online: Fill our complaint form at /complaint-form\n• Email: complaints@apjakwit.edu\n• Phone: +91-XXXXXXXXXX\n• In-person: Visit grievance cell (Room 101)\n\n**Response time:** We aim to respond within 24-48 hours.\n\n**Complaint categories:**\n• Academic issues\n• Infrastructure problems\n• Hostel complaints\n• Faculty concerns\n• General grievances",
      followUp: ["feedback", "contact", "grievance"]
    },
    "feedback": {
      keywords: ["feedback", "suggestion", "review", "opinion", "give feedback", "feedback form"],
      response: "💬 **Feedback Form:**\n\nWe'd love to hear from you! Please share your feedback using the feedback form.\n\n**Feedback Channels:**\n• Online form: /feedback-form\n• Email: feedback@apjakwit.edu\n• Anonymous feedback box in library\n• Student council meetings\n• Department feedback sessions\n\n**What we value:**\n• Academic experience\n• Campus facilities\n• Faculty feedback\n• Administrative services\n• Overall satisfaction\n\nYour feedback helps us improve our services! 🙏",
      followUp: ["complaint", "improvement", "suggestions"]
    },
    "calendar": {
      keywords: ["calendar", "academic calendar", "schedule", "dates", "holidays", "exams", "academic calendar"],
      response: "🗓️ **Academic Calendar:**\n\nYou can find important dates, holidays, and exam schedules in the Academic Calendar section: [Link]\n\n**Key Dates (2024-25):**\n• Academic Year Start: July 1, 2024\n• Mid-semester Break: October 15-20, 2024\n• Winter Break: December 25 - January 5, 2025\n• End Semester Exams: March 2025\n• Summer Break: May 15 - June 30, 2025\n\n**Important Events:**\n• Freshers' Day: August 15, 2024\n• Annual Fest: February 2025\n• Convocation: April 2025\n\n**Exam Schedule:**\n• Mid-semester: October 2024\n• End-semester: March 2025\n\nFor detailed schedules, visit our academic calendar page!",
      followUp: ["exams", "holidays", "events"]
    },
    "contact": {
      keywords: ["contact", "phone", "email", "address", "location", "where", "contact info", "reach", "office", "contact info"],
      response: "📞 **Contact:**\n\nYou can reach us at:\n📞 Phone: 123-456-7890\n📧 Email: info@apjakwit.edu\n📍 Address: Dr. APJAK Women's Institute of Technology, [Street Address], [City, State]\n\n**Department Contacts:**\n• Admission Office: admission@apjakwit.edu\n• Academic Office: academic@apjakwit.edu\n• Hostel Office: hostel@apjakwit.edu\n• Placement Cell: placement@apjakwit.edu\n\n**Office Hours:**\n🕐 Monday - Friday: 9:00 AM - 5:00 PM\n🕐 Saturday: 9:00 AM - 1:00 PM\n🕐 Sunday: Closed\n\n**Emergency Contact:**\n🚨 Security: +91-XXXXXXXXXX\n🏥 Medical: +91-XXXXXXXXXX",
      followUp: ["location", "visit", "department"]
    },
    "location": {
      keywords: ["location", "where", "address", "map", "directions", "college location"],
      response: "📍 **College Location:**\n\nHere's our location on Google Maps: [Link]\nYou're always welcome to visit our campus!\n\n**Address:**\n📍 Dr. APJAK Women's Institute of Technology\n📍 [Street Address]\n📍 [City, State] - [PIN]\n📍 India\n\n**How to reach us:**\n🚌 **By Bus:** Routes 101, 102, 103\n🚇 **By Metro:** Nearest station - [Station Name]\n🚗 **By Car:** Parking available on campus\n🚶 **Walking:** 10 minutes from [Landmark]\n\n**Campus Map:**\n• Main Building: Academic blocks\n• Hostel Area: Student accommodation\n• Sports Complex: Indoor/outdoor facilities\n• Library: Central library building\n• Cafeteria: Food court area\n\n**Visit Hours:**\n🕐 Monday - Saturday: 8:00 AM - 6:00 PM",
      followUp: ["visit", "directions", "transport"]
    }
  };

  // Enhanced keyword detection with context
  const specialKeywords = {
    "help": "I'm here to help! 🤝\n\n**What I can assist with:**\n• Admission & Application process\n• Course information & eligibility\n• Fee structure & payment options\n• Campus facilities & accommodation\n• Placement & career guidance\n• Contact information\n• Forms & procedures\n\nWhat specific information do you need?",
    "thank": "You're welcome! 😊\n\nIs there anything else I can help you with? I'm here to assist with any questions about Dr. APJAK Women's Institute of Technology!",
    "bye": "Thanks for chatting with WITBot!\nYour session has ended. Feel free to reopen the bot if you need anything else. 😊",
    "hello": "Hello! 👋\n\nWelcome back! How can I assist you today? You can ask me about admissions, courses, fees, facilities, or anything related to Dr. APJAK Women's Institute of Technology!",
    "hi": "Hi there! 👋\n\nGreat to see you! I'm WITBot, your assistant at Dr. APJAK Women's Institute of Technology. What would you like to know about our institution?"
  };

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem('witbot-messages', JSON.stringify(messages));
  }, [messages]);

  // Welcome animation
  useEffect(() => {
    if (open && !showWelcome) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 2000);
    }
  }, [open]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        console.log('Voice recognition started');
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Voice transcript:', transcript);
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          alert('Please allow microphone access for voice input');
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        console.log('Voice recognition ended');
      };
    }
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) {
      alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }
    
    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error('Error starting voice recognition:', error);
      alert('Error starting voice recognition. Please try again.');
    }
  };

  // Enhanced FAQ response with context
  const findFAQResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for special keywords first
    for (const [keyword, response] of Object.entries(specialKeywords)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Check FAQ database with context
    for (const [category, data] of Object.entries(faqDatabase)) {
      for (const keyword of data.keywords) {
        if (lowerMessage.includes(keyword)) {
          // Add context to conversation
          setConversationContext(prev => [...prev.slice(-2), category]);
          return data.response;
        }
      }
    }

    return null;
  };

  // More intelligent fallback responses
  const generateGPTLikeResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check conversation context for better responses
    const lastContext = conversationContext[conversationContext.length - 1];
    
    if (lastContext && faqDatabase[lastContext]) {
      return `I understand you're asking about ${lastContext}. Let me provide more specific information:\n\n${faqDatabase[lastContext].response}\n\nIs there anything specific about ${lastContext} you'd like to know?`;
    }

    const responses = [
      "That's an interesting question! 🤔 Let me help you find the right information.",
      "I understand your query. Let me provide you with the most relevant information. 📋",
      "Great question! Here's what I can tell you about that. 💡",
      "I'd be happy to help you with that. Let me share some information. ✨",
      "That's a common question. Here's what you should know. 📖"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return `${randomResponse}\n\nFor more detailed information, please visit the relevant section on our website or contact our office directly.\n\nYou can also ask me about:\n• Admissions & Courses\n• Fees & Scholarships\n• Campus Facilities\n• Placements & Careers`;
  };

  const handleQuickAction = (text, category) => {
    const userMsg = { 
      id: Date.now(), 
      from: "user", 
      text: text, 
      timestamp: new Date(),
      showFeedback: false
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse = findFAQResponse(text);
      
      if (!botResponse) {
        botResponse = generateGPTLikeResponse(text);
      }
      
      const botMsg = { 
        id: Date.now() + 1, 
        from: "bot", 
        text: botResponse, 
        timestamp: new Date(),
        showFeedback: true
      };
      setMessages(prev => [...prev, botMsg]);
      setLastBotMessageId(botMsg.id);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { 
      id: Date.now(), 
      from: "user", 
      text: input, 
      timestamp: new Date(),
      showFeedback: false
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Check if this is the first user response
    if (messages.length === 1) {
      setTimeout(() => {
        setIsTyping(false);
        const featuresMsg = {
          id: Date.now() + 1,
          from: "bot",
          text: "Thank you for sharing that! I can help you with any of these topics:\n\n📌 Admission Info\n💰 Fee Structure\n📚 Courses Offered\n📝 Complaint Form\n💬 Feedback Form\n🗓️ Academic Calendar\n📞 Contact\n📍 College Location\n\nWhat would you like to know more about?",
          timestamp: new Date(),
          showFeedback: false
        };
        setMessages(prev => [...prev, featuresMsg]);
      }, 1000);
      return;
    }

    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse = findFAQResponse(input);
      
      if (!botResponse) {
        botResponse = generateGPTLikeResponse(input);
      }
      
      const botMsg = { 
        id: Date.now() + 1, 
        from: "bot", 
        text: botResponse, 
        timestamp: new Date(),
        showFeedback: true
      };
      setMessages(prev => [...prev, botMsg]);
      setLastBotMessageId(botMsg.id);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const addEmoji = (emoji) => {
    setInput(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleFeedback = (messageId, isHelpful) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, showFeedback: false, feedback: isHelpful }
        : msg
    ));
    
    // Show feedback acknowledgment
    setTimeout(() => {
      const feedbackMsg = { 
        id: Date.now(), 
        from: "bot", 
        text: isHelpful ? "Great! I'm glad I could help! 😊\n\nIs there anything else you'd like to know?" : "I'm sorry that wasn't helpful. Let me know if you need anything else! 🤝\n\nYou can ask me about admissions, courses, fees, facilities, or any other college-related information.", 
        timestamp: new Date(),
        showFeedback: false
      };
      setMessages(prev => [...prev, feedbackMsg]);
    }, 500);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp) => {
    const today = new Date();
    const messageDate = new Date(timestamp);
    const diffTime = Math.abs(today - messageDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    return messageDate.toLocaleDateString();
  };

  const handleClose = () => {
    setOpen(false);
    setInput("");
    setIsTyping(false);
    setShowEmojiPicker(false);
    // Clear messages and reset for new session
    setMessages([
      { 
        id: 1,
        from: "bot", 
        text: "Hi! I'm WITBot 👋\n\nI'd love to help you! Please let me know:\n1. Are you a prospective student or current student?\n2. What program/course are you interested in?", 
        timestamp: new Date(),
        showFeedback: false
      }
    ]);
    setConversationContext([]);
  };

  const handleOptionClick = (option) => {
    const userMsg = { 
      id: Date.now(), 
      from: "user", 
      text: option.text, 
      timestamp: new Date(),
      showFeedback: false
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse = findFAQResponse(option.text);
      if (!botResponse) {
        botResponse = generateGPTLikeResponse(option.text);
      }
      const botMsg = { 
        id: Date.now() + 1, 
        from: "bot", 
        text: botResponse, 
        timestamp: new Date(),
        showFeedback: true
      };
      setMessages(prev => [...prev, botMsg]);
      setLastBotMessageId(botMsg.id);
    }, 1000);
  };

  const renderMessageContent = (msg) => {
    if (msg.from === 'bot' && messages.indexOf(msg) === 1) {
      const options = [
        { emoji: "📌", text: "Admission Info", category: "admission" },
        { emoji: "💰", text: "Fee Structure", category: "fees" },
        { emoji: "📚", text: "Courses Offered", category: "courses" },
        { emoji: "📝", text: "Complaint Form", category: "complaint" },
        { emoji: "💬", text: "Feedback Form", category: "feedback" },
        { emoji: "🗓️", text: "Academic Calendar", category: "calendar" },
        { emoji: "📞", text: "Contact", category: "contact" },
        { emoji: "📍", text: "College Location", category: "location" }
      ];

      return (
        <div style={{ width: '100%' }}>
          <div>Thank you for sharing that! I can help you with any of these topics:</div>
          <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {options.map((option, idx) => (
              <button 
                key={idx}
                onClick={() => handleOptionClick(option)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 15px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  color: '#333'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8e8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ marginRight: '10px', fontSize: '16px' }}>{option.emoji}</span>
                {option.text}
              </button>
            ))}
          </div>
          <div>What would you like to know more about?</div>
        </div>
      );
    }
    return msg.text;
  };

  if (minimized) {
    return (
      <div className="chatbot-minimized" onClick={() => setMinimized(false)}>
        <span>💬</span>
        <span>WITBot</span>
      </div>
    );
  }

  return (
    <div>
      <button className="chatbot-float-btn" onClick={() => setOpen(!open)}>
        {open ? "×" : "💬"}
      </button>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-avatar">🤖</span>
              <span>WITBot</span>
              {showWelcome && <span className="welcome-wave">👋</span>}
            </div>
            <div className="chatbot-controls">
              <button onClick={() => setMinimized(true)} title="Minimize">🔽</button>
              <button onClick={handleClose} title="Close">×</button>
            </div>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={msg.id} className={`chatbot-msg ${msg.from}`}>
                <div className="msg-content">{renderMessageContent(msg)}</div>
                <div className="msg-time">
                  {formatTime(msg.timestamp)} • {formatDate(msg.timestamp)}
                </div>
                {msg.showFeedback && (
                  <div className="feedback-buttons">
                    <span>Was this helpful?</span>
                    <button onClick={() => handleFeedback(msg.id, true)}>👍</button>
                    <button onClick={() => handleFeedback(msg.id, false)}>👎</button>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-msg bot typing">
                <div className="typing-indicator">
                  <span>WITBot is typing</span>
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <div className="input-container">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
              />
              <div className="input-buttons">
                <button 
                  className="emoji-btn"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  title="Add emoji"
                >
                  😊
                </button>
                <button 
                  className="voice-btn"
                  onClick={startListening}
                  disabled={isListening}
                  title="Voice input"
                >
                  {isListening ? "🔴" : "🎤"}
                </button>
                <button 
                  className="send-btn"
                  onClick={handleSend} 
                  disabled={isTyping || !input.trim()}
                >
                  ➤
                </button>
              </div>
            </div>
            
            {showEmojiPicker && (
              <div className="emoji-picker">
                {emojis.map((emoji, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => addEmoji(emoji)}
                    className="emoji-option"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WITBot; 