import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

export default function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}