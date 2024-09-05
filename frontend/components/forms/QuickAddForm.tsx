"use client";


  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


  import { Input } from "@/components/ui/input"

  

const QuickAddForm = () => {
  return (
    <div className="flex items-center py-5">
        <Tabs defaultValue="expense" className="w-[200px] flex flex-col gap-3">
          <TabsList>
            <TabsTrigger className="h-12 flex items-center  justify-center text-xl" value="expense">Expense</TabsTrigger>
            <TabsTrigger className="h-12 flex items-center justify-center text-xl" value="income">Income</TabsTrigger>
          </TabsList>
          <Input className="w-[200px] h-12 text-center text-light_brown bg-cream text-xl" type="amount" placeholder="$"/>
        </Tabs>
    </div>
  )
}

export default QuickAddForm
