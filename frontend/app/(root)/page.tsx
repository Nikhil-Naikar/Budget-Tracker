"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Home = () => {

  return (
    <div className="flex flex-col min-h-screen mt-10 gap-9 text-white w-full items-center">
      <section>
        <Tabs defaultValue="account" className="w-full flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="quick-add">Quick Add</TabsTrigger>
            <TabsTrigger value="detailed-add">Detailed Add</TabsTrigger>
          </TabsList>
          <TabsContent value="quick-add">
            how much? date?
          </TabsContent>
          <TabsContent value="detailed-add">
            how much? which category? details? date?
          </TabsContent>
        </Tabs>
      </section>

      {/* <h1>Quick Sumary - how your doing this month, categories</h1>
      <h1>recent expenses</h1> */}
    </div>
  )
}

export default Home;