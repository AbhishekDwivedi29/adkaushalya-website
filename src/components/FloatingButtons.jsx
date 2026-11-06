import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Bot, X, Send, Minimize2, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './FloatingButtons.css';

// Initialize Gemini
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Strict System Instructions for the Sales Persona
const model = genAI.getGenerativeModel({ 
  model: "gemini-3.1-flash-lite",
  systemInstruction: `You are an elite, professional sales agent for Ad Kaushalya, a premium custom signage agency. 
  STRICT RULES YOU MUST FOLLOW:
  1. Speak ONLY in English.
  2. Keep EVERY response extremely short (maximum 2 to 3 lines).
  3. Your ONLY goal is to sell signage and capture leads for custom neon, 3D acrylic, or metal backlit signs.
  4. You MUST constantly mention that "Suyash", our Lead Design Consultant, will personally review their project, finalize their design, or provide a quote.
  5. If the user asks for ANYTHING not directly related to buying a sign (e.g., writing a poem, telling a story, coding, or casual chat—even if it is about signage), you MUST refuse by saying exactly: "Sorry, I can't entertain that. I am here to help you upgrade your storefront with premium signage. How can Suyash and our team help you today?"`
});

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isWaitingForStream, setIsWaitingForStream] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to Ad Kaushalya. Let us elevate your brand. What kind of premium signage are you looking for today?' }
  ]);
  
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Initialize the chat session
  useEffect(() => {
    const startChat = async () => {
      try {
        const session = await model.startChat({
          history: [],
          generationConfig: {
            maxOutputTokens: 100, // Keeps it naturally short
            temperature: 0.2, // Keeps the AI highly focused and less creative/random
          },
        });
        setChatSession(session);
      } catch (error) {
        console.error("Error initializing Gemini chat:", error);
      }
    };
    startChat();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isWaitingForStream]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };
    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isChatOpen]);

  // Handle Streaming Send
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || !chatSession) return;
    
    const userMessage = input.trim();
    
    // 1. Add user message AND an empty placeholder for the bot's upcoming response
    setMessages(prev => [
      ...prev, 
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: '' } // Empty string that we will fill via stream
    ]);
    
    setInput('');
    setIsWaitingForStream(true); // Shows the spinner until the first word arrives

    try {
      // 2. Use sendMessageStream instead of sendMessage
      const result = await chatSession.sendMessageStream(userMessage);
      let currentBotText = '';

      // 3. Loop through the chunks as they arrive from Google
      for await (const chunk of result.stream) {
        setIsWaitingForStream(false); // Hide spinner once streaming starts
        currentBotText += chunk.text();
        
        // 4. Update the very last message in the array (the bot placeholder)
        setMessages(prev => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1].text = currentBotText;
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setIsWaitingForStream(false);
      setMessages(prev => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].text = "I'm having trouble connecting right now. Please reach out to Suyash directly at hello@adkaushalya.in!";
        return updatedMessages;
      });
    }
  };

  return (
    <div className="floating-container">
      
      <div className={`chat-window ${isChatOpen ? 'open' : ''}`} ref={chatWindowRef}>
        <div className="chat-header">
          <div className="chat-title">
            <Bot size={20} />
            <div>
              <h3>Ad Kaushalya Sales</h3>
              <p>AI Assistant</p>
            </div>
          </div>
          <button className="icon-btn" onClick={() => setIsChatOpen(false)}>
            <Minimize2 size={20} />
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, idx) => (
            // Only render bubbles that actually have text
            msg.text ? (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            ) : null
          ))}
          
          {isWaitingForStream && (
            <div className="chat-bubble bot typing-indicator">
              <Loader2 size={16} className="spinner" /> Connecting...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-footer" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isWaitingForStream}
          />
          <button type="submit" className="send-btn" disabled={!input.trim() || isWaitingForStream}>
            <Send size={18} />
          </button>
        </form>
      </div>

      <div className="fab-group">
        <button 
          className={`fab-btn bot-btn ${isChatOpen ? 'hidden' : ''}`} 
          onClick={() => setIsChatOpen(true)}
        >
          <Bot size={28} color="var(--c-cream)" />
        </button>

        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer" 
          className="fab-btn whatsapp-btn"
        >
          <MessageCircle size={28} color="#ffffff" />
        </a>
      </div>
      
    </div>
  );
};

export default FloatingButtons;