"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does the break suggestion system work?",
    answer:
      "Our system automatically calculates optimal break times based on your study duration. For every 1.5 hours of study, we suggest a 15-minute break to maintain productivity and prevent mental fatigue.",
  },
  {
    question: "Can I modify my schedule after creating it?",
    answer:
      "Yes! Each task in your schedule comes with a reschedule button that allows you to adjust both the timing and duration of your tasks at any time.",
  },
  {
    question: "How many goals can I add to my plan?",
    answer:
      "You can add as many goals as you need. The system is designed to handle multiple tasks while maintaining an organized and efficient schedule.",
  },
  {
    question: "How does the priority system work?",
    answer:
      "Tasks can be set as High, Medium, or Low priority. The system uses this information to optimize your schedule and ensure important tasks receive appropriate time allocation.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-neutral-700">
      <CardContent className="p-0">
        <button
          className="w-full px-6 py-4 text-left flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-semibold text-white">{question}</span>
          {isOpen ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
        </button>
        {isOpen && (
          <div className="px-6 pb-4">
            <p className="text-gray-300">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

