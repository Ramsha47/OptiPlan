"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

type Goal = {
  id: number
  name: string
  time: number
  priority: string
}

export default function GoalInput() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [showPlan, setShowPlan] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const newGoal: Goal = {
      id: Date.now(),
      name: formData.get("taskName") as string,
      time: Number(formData.get("taskTime")),
      priority: formData.get("priority") as string,
    }
    setGoals([...goals, newGoal])
    form.reset()
  }

  const removeGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  const generatePlan = () => {
    setShowPlan(true)
  }

  return (
    <section id="goalInput" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Plan Your Goals</h2>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="taskName">Task/Goal Name</Label>
                  <Input id="taskName" name="taskName" required placeholder="Enter your task or goal" />
                </div>

                <div>
                  <Label htmlFor="taskTime">Time Required (in hours)</Label>
                  <Input
                    id="taskTime"
                    name="taskTime"
                    type="number"
                    min="0.5"
                    step="0.5"
                    required
                    placeholder="Enter time in hours"
                  />
                </div>

                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select name="priority" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="submit">Add Goal</Button>
                  <Button type="button" onClick={generatePlan} variant="secondary">
                    Generate Plan
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{goal.name}</h3>
                    <p className="text-sm text-gray-500">Time: {goal.time} hours</p>
                    <p className="text-sm text-gray-500">Priority: {goal.priority}</p>
                  </div>
                  <Button variant="destructive" onClick={() => removeGoal(goal.id)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {showPlan && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Your Study Plan</h3>
                {goals.map((goal, index) => (
                  <div key={goal.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">
                        {index + 1}. {goal.name}
                      </h4>
                      <span
                        className={`text-${goal.priority === "high" ? "red" : goal.priority === "medium" ? "yellow" : "blue"}-500`}
                      >
                        {goal.priority} Priority
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p>Study Duration: {goal.time} hours</p>
                      <p>Suggested Breaks: {Math.floor(goal.time / 1.5)} breaks of 15 minutes each</p>
                      <Button onClick={() => removeGoal(goal.id)} variant="outline">
                        Reschedule Task
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

