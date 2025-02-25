import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Goals into Actionable Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Break down your goals into manageable tasks, get smart time management suggestions, and stay on track with
              our intelligent scheduling system.
            </p>
            <div className="flex gap-4">
              <Link
                href="#goalInput"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
              >
                Start Planning
              </Link>
              <Link
                href="#howItWorks"
                className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <TaskCard title="Study for Finals" priority="High Priority" duration="3 hours" />
                <TaskCard title="Workout Session" priority="Medium Priority" duration="1 hour" />
                <TaskCard title="Project Planning" priority="Low Priority" duration="2 hours" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TaskCard({ title, priority, duration }: { title: string; priority: string; duration: string }) {
  const priorityColor =
    priority === "High Priority"
      ? "text-green-400"
      : priority === "Medium Priority"
        ? "text-yellow-400"
        : "text-blue-400"

  return (
    <div className="bg-neutral-700 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-white">{title}</span>
        <span className={priorityColor}>{priority}</span>
      </div>
      <div className="text-gray-400 text-sm mt-2">Duration: {duration}</div>
    </div>
  )
}

