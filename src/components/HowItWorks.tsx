export default function HowItWorks() {
    return (
      <section id="howItWorks" className="py-20 bg-neutral-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Step
              number={1}
              title="Enter Your Goals"
              description="Input your tasks or goals along with the estimated time needed and priority level."
            />
            <Step
              number={2}
              title="Add Multiple Tasks"
              description="Continue adding all your tasks one by one to create a comprehensive plan."
            />
            <Step
              number={3}
              title="Generate Schedule"
              description="Click generate to receive your personalized study plan with break suggestions."
            />
            <Step
              number={4}
              title="Manage & Adjust"
              description="Easily reschedule tasks and modify time allocations as needed."
            />
          </div>
  
          <div className="mt-20 text-center">
            <div className="bg-neutral-700 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">Smart Break Calculations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BreakCard title="Short Tasks" description="15-minute break every 1.5 hours" />
                <BreakCard title="Medium Tasks" description="20-minute break every 2 hours" />
                <BreakCard title="Long Tasks" description="30-minute break every 3 hours" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function Step({ number, title, description }: { number: number; title: string; description: string }) {
    return (
      <div className="relative">
        <div className="bg-neutral-700 rounded-xl p-6 h-full">
          <div className="absolute -top-4 left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            {number}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  function BreakCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="p-4 bg-neutral-600 rounded-lg">
        <h4 className="text-green-400 font-semibold mb-2">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    )
  }
  
  