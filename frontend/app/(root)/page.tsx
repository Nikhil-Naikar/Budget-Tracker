"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Home = () => {

  return (
    <div className="flex flex-col min-h-screen gap-9 text-black w-full items-center">
      <section className="w-full">
        <h1>Nav bar</h1>
      </section>

      <section>
        <h1>Quick Summary (grid view for desktop)</h1>
        <h2>Total Spending / Total Budget - for current month</h2>
        <h2>Spendings per category</h2>
        <h2>Budget left (overall and per categories)- mothly/weekly/daily</h2>
        <h2>Graph amrking all expenses with dates of the month</h2>
        <h2>Recent spending list - minimalist list</h2>
        total expenses, pie chart
        budget left for day, month
        recent expenses
      </section>
    </div>
  )
}

export default Home;

