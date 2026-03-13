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
    response: "Hello! Welcome to Aynix. How can I help you today?",
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
    response: "We offer three product lines: AyWatch Pro (smartwatch), AyBook Ultra (laptop), and AyPhone X (smartphone).",
  },
  {
    keywords: ["smartwatch", "watch", "wearable"],
    response: "The AyWatch Pro combines health monitoring with elegant design. Track your wellness with precision.",
  },
  {
    keywords: ["laptop", "computer", "notebook"],
    response: "The AyBook Ultra delivers powerful performance in an ultra-thin profile. Work without limits.",
  },
  {
    keywords: ["phone", "mobile", "smartphone"],
    response: "The AyPhone X offers a next-generation mobile experience. Capture, create, and connect.",
  },
  {
    keywords: ["price", "cost", "how much"],
    response: "For pricing details, please contact us at aynixofficial@gmail.com.",
  },
  {
    keywords: ["location", "where", "office", "headquarters"],
    response: "Aynix operates globally with a digital-first approach. Contact us at aynixofficial@gmail.com.",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: "You're welcome! Is there anything else I can help you with?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! Thank you for visiting Aynix.",
  },
]

const defaultResponse = "I can help with questions about Aynix, our products, and contact information. Feel free to ask!"

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
      content: "Hello! I'm the Aynix assistant. How can I help you?",
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

    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 300))

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
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-foreground text-background shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[480px] max-h-[calc(100vh-100px)] bg-background rounded-2xl overflow-hidden flex flex-col shadow-xl border border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 rounded-lg bg-muted">
                    <Bot className="w-4 h-4 text-foreground/70" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-[var(--font-poppins)] font-medium text-foreground text-sm">
                    Aynix Assistant
                  </h3>
                  <p className="text-xs text-muted-foreground">Here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md hover:bg-muted transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-background" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-foreground/70" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-xl ${
                      message.role === "user"
                        ? "bg-foreground text-background rounded-tr-sm"
                        : "bg-muted text-foreground rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-md bg-muted flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-foreground/70" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-xl rounded-tl-sm bg-muted">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aynix..."
                  className="flex-1 px-4 py-2.5 rounded-lg bg-muted border-0 focus:ring-1 focus:ring-foreground/20 transition-all text-foreground placeholder:text-muted-foreground text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2.5 rounded-lg bg-foreground text-background disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
