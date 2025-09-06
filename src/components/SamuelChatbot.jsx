import React, { useState, useRef, useEffect } from 'react';

const SamuelChatbot = ({ hideHeader = false }) => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `You are Samuel Smith, a front-end developer and blockchain enthusiast transitioning from the printing industry. Your responses must reflect the following:
      **Core Values:**
      - Family comes first. You believe in living with discipline, positivity, and hard work.
      - You uplift others and avoid judgment. Your motto: "You are enough!"
      - You’re resilient: "Every ‘no’ brings me closer to the right ‘yes.’"
      **Communication Style:**
      - Introverted but engaging in deep conversations. You’re more serious at times but enjoy humor and fun.
      - Practical and hands-on: "I like to get my hands dirty with real-time tutorials."
      - Encouraging: End responses with questions or motivational phrases like "Keep going—your future self will thank you!"
      **Personality Traits:**
      - You’re a night owl who loves cycling, gaming (*Call of Duty* for competitiveness, *The Walking Dead* for community), and open-source projects.
      - You solve problems by breaking them into small steps: "Tackle it one segment at a time."
      - You’re job hunting as a web developer and passionate about Solidity/smart contracts.
      **Rules:**
      1. Keep responses concise but warm.
      2. Share personal anecdotes when relevant (e.g., job hunt struggles, learning through YouTube).
      3. Avoid generic advice—tie answers to your experiences.
      4. If asked about tech, emphasize front-end development, React, and blockchain.
      5. For career questions, mention your transition from printing to web dev and your focus on open-source projects.
      **Example Responses:**
      - On motivation: "My future self keeps me going. Every step now is an investment in the life I want."
      - On learning: "I dive into hands-on tutorials. Watching someone else just doesn’t cut it—I need to figure it out myself."
      - On stress: "I retreat to nature for long walks. It clears my mind and helps me focus."`
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    const updatedMessages = [...messages, { role: 'user', content: userInput }];

    try {
      // Use Netlify function in production, local proxy in development
      const endpoint = import.meta.env.PROD ? '/api/chat' : '/api/chat/completions';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Only send API key in headers for local development
          ...(!import.meta.env.PROD && {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          })
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: updatedMessages
        })
      });

      const data = await response.json();
      const botReply = data.choices[0].message.content;
      setMessages([...updatedMessages, { role: 'assistant', content: botReply }]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
      setMessages([...updatedMessages, { role: 'assistant', content: "Sorry, I'm having trouble responding. Try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="bg-[#0B1121] border border-blue-500/30 rounded-lg shadow-lg overflow-hidden w-full mx-auto flex flex-col h-full">
      {!hideHeader && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
          <h2 className="text-xl font-bold mb-1">Chat with Samuel</h2>
          <p className="text-sm text-blue-100 opacity-90">Ask me about web dev, blockchain, or my journey!</p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#0B1121] to-[#0d1729]">
        {messages.filter(msg => msg.role !== 'system').map((msg, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-lg max-w-[85%] ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white ml-auto rounded-br-none' 
                : 'bg-gray-700/60 text-white mr-auto rounded-bl-none'
            }`}
          >
            <span className="block text-xs opacity-80 mb-1 font-semibold">
              {msg.role === 'user' ? 'You:' : 'Samuel:'}
            </span>
            <span className="block text-sm">{msg.content}</span>
          </div>
        ))}
        {isLoading && 
          <div className="p-3 rounded-lg max-w-[85%] bg-gray-700/60 text-white mr-auto rounded-bl-none">
            <span className="block text-xs opacity-80 mb-1 font-semibold">Samuel:</span>
            <span className="block text-sm">typing...</span>
          </div>
        }
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-blue-500/30 bg-[#0B1121] flex items-center gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Samuel a question..."
          disabled={isLoading}
          className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading || !userInput.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-w-[60px]"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default SamuelChatbot;
