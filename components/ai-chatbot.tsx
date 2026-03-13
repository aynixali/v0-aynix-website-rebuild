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
    response: "Hello! Welcome to Aynix. I'm here to help you. What can I do for you today?",
  },
  {
    keywords: ["contact", "email", "reach", "support", "help"],
    response: "You can reach us at aynixofficial@gmail.com. We typically respond within 24 hours.",
  },
  {
    keywords: ["company", "about", "who", "what is aynix"],
    response: "Aynix creates premium consumer technology - smartwatches, laptops, and phones designed with purpose and elegance.",
  },
  {
    keywords: ["product", "sell", "offer", "buy", "purchase"],
    response: "We offer three product lines: AyWatch Pro (smartwatch), AyBook Ultra (laptop), and AyPhone X (smartphone). Each crafted for the modern lifestyle.",
  },
  {
    keywords: ["smartwatch", "watch", "wearable"],
    response: "The AyWatch Pro combines health monitoring with elegant design. Track your wellness journey with precision and style.",
  },
  {
    keywords: ["laptop", "computer", "notebook"],
    response: "The AyBook Ultra delivers powerful performance in an ultra-thin profile. Work without limits, anywhere.",
  },
  {
    keywords: ["phone", "mobile", "smartphone"],
    response: "The AyPhone X offers a next-generation mobile experience. Capture, create, and connect like never before.",
  },
  {
    keywords: ["price", "cost", "how much"],
    response: "For pricing details, please contact us at aynixofficial@gmail.com or explore our products section.",
  },
  {
    keywords: ["location", "where", "office", "headquarters"],
    response: "Aynix operates globally with a digital-first approach. Contact us at aynixofficial@gmail.com for inquiries.",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: "You're welcome! Is there anything else I can help you with?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! Thank you for visiting Aynix. Feel free to return anytime!",
  },
]

const defaultResponse = "I can help with questions about Aynix, our products, and how to get in touch. Ask about our smartwatches, laptops, phones, or contact information!"

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
      content: "Hello! I'm the Aynix assistant. How can I help you today?",
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

    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400))

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
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#00d4ff] text-foreground shadow-lg shadow-[#00d4ff]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff7f50] rounded-full border-2 border-background" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-card rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 rounded-xl bg-[#00d4ff]/10">
                    <Bot className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-[var(--font-poppins)] font-semibold text-foreground text-sm">
                    Aynix Assistant
                  </h3>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-[#ff7f50]/10"
                        : "bg-[#00d4ff]/10"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-[#ff7f50]" />
                    ) : (
                      <Bot className="w-4 h-4 text-[#00d4ff]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-[#00d4ff] text-foreground rounded-tr-md"
                        : "bg-muted text-foreground rounded-tl-md"
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
                  <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#00d4ff]" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-muted">
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
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aynix..."
                  className="flex-1 px-4 py-3 rounded-full bg-muted border-0 focus:ring-2 focus:ring-[#00d4ff] transition-all text-foreground placeholder:text-muted-foreground text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-3 rounded-full bg-[#00d4ff] text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-[#00d4ff]/20"
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
