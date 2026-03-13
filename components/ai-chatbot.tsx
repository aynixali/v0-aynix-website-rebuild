"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const responses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to Aynix. I'm your virtual assistant. How can I help you today?",
  },
  {
    keywords: ["contact", "email", "reach", "support", "help"],
    response: "You can contact Aynix at aynixofficial@gmail.com. Our team typically responds within 24 hours.",
  },
  {
    keywords: ["company", "about", "who", "what is aynix"],
    response: "Aynix focuses on futuristic consumer technology products. We're dedicated to innovation, cutting-edge design, and creating devices that enhance everyday life.",
  },
  {
    keywords: ["product", "sell", "offer", "buy", "purchase"],
    response: "Aynix develops smartwatches, laptops, and next-generation mobile technology. Each product is designed with innovation and user experience at its core.",
  },
  {
    keywords: ["smartwatch", "watch", "wearable"],
    response: "Our AyWatch Pro features advanced health monitoring, seamless connectivity, and a stunning display. It's designed to be your perfect companion for fitness and daily life.",
  },
  {
    keywords: ["laptop", "computer", "notebook"],
    response: "The AyBook Ultra combines ultra-thin design with powerful performance. Perfect for professionals and creators who demand the best.",
  },
  {
    keywords: ["phone", "mobile", "smartphone"],
    response: "The AyPhone X represents the future of mobile technology with its revolutionary display, advanced AI capabilities, and stunning camera system.",
  },
  {
    keywords: ["price", "cost", "how much"],
    response: "For pricing information, please contact us at aynixofficial@gmail.com or visit our products section to learn more about each device.",
  },
  {
    keywords: ["location", "where", "office", "headquarters"],
    response: "Aynix operates globally with a focus on digital-first operations. For business inquiries, please reach out via email at aynixofficial@gmail.com.",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: "You're welcome! Is there anything else I can help you with today?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! Thank you for visiting Aynix. Feel free to reach out if you have any more questions!",
  },
]

const defaultResponse = "I'm here to help with questions about Aynix, our products, and how to get in touch. Feel free to ask about our smartwatches, laptops, phones, or contact information!"

function getResponse(input: string): string {
  const lowercaseInput = input.toLowerCase()
  
  for (const { keywords, response } of responses) {
    if (keywords.some(keyword => lowercaseInput.includes(keyword))) {
      return response
    }
  }
  
  return defaultResponse
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm the Aynix AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500))

    const response = getResponse(input)
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    }

    setIsTyping(false)
    setMessages(prev => [...prev, assistantMessage])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground glow-cyan transition-all duration-300 hover:scale-110 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] glass-strong rounded-2xl overflow-hidden flex flex-col border border-primary/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 rounded-xl bg-primary/20 glow-cyan-sm">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-[var(--font-orbitron)] font-semibold text-foreground">
                    Aynix AI
                  </h3>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-primary/20"
                        : "bg-secondary"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-primary" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-md"
                        : "bg-secondary text-secondary-foreground rounded-tl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-secondary">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-muted-foreground"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aynix..."
                  className="flex-1 px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:glow-cyan-sm"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
