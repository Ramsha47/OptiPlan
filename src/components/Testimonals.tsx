import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-16">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Computer Science Student"
            content="This planner has revolutionized my study routine. The break suggestions really help me maintain focus and prevent burnout during long study sessions."
          />
          <TestimonialCard
            name="Mike Chen"
            role="Medical Student"
            content="The ability to reschedule tasks and adjust time allocations has made my study planning so much more flexible and realistic. Great tool!"
          />
          <TestimonialCard
            name="Emma Davis"
            role="Law Student"
            content="I love how I can add multiple goals and manage them all in one place. The priority system helps me focus on what's most important."
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <Card className="transform hover:-translate-y-1 transition duration-300">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">{name[0]}</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-neutral-800">{name}</h3>
            <p className="text-neutral-600">{role}</p>
          </div>
        </div>
        <p className="text-neutral-700">{content}</p>
        <div className="mt-4 flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

