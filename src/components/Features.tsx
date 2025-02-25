import type React from "react"
import { CheckCircle, Clock, RefreshCw, Flag, BarChartIcon as ChartBar, List } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-16">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CheckCircle className="w-8 h-8 text-green-600" />}
            title="Smart Goal Planning"
            description="Break down your goals into manageable tasks with intelligent time allocation and priority settings."
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-blue-600" />}
            title="Smart Break Scheduling"
            description="Automatically calculated break times to maintain productivity and prevent burnout."
          />
          <FeatureCard
            icon={<RefreshCw className="w-8 h-8 text-purple-600" />}
            title="Flexible Rescheduling"
            description="Easily adjust and reschedule tasks with real-time updates to your study plan."
          />
          <FeatureCard
            icon={<Flag className="w-8 h-8 text-red-600" />}
            title="Priority Management"
            description="Set and adjust task priorities to focus on what matters most."
          />
          <FeatureCard
            icon={<ChartBar className="w-8 h-8 text-yellow-600" />}
            title="Progress Tracking"
            description="Monitor your progress with visual indicators and completion statistics."
          />
          <FeatureCard
            icon={<List className="w-8 h-8 text-teal-600" />}
            title="Multiple Goals"
            description="Manage multiple goals simultaneously with organized task categorization."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}

