import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetClose,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const QuickAddButton = () => {
  return (
    <div>
      <Sheet>
          <SheetTrigger className="bg-light_brown text-white rounded-full h-auto w-auto px-4 py-2 hover:border-2 hover:border-white">Quick Add</SheetTrigger>
          <SheetContent className=" h-[45vh] flex flex-col items-center bg-cream" side={"top"}>
            <SheetHeader className="flex flex-col items-center justify-center">
              <SheetTitle>Quick Add</SheetTitle>
              <SheetDescription>
                Please select if amount is expense or income
              </SheetDescription>
            </SheetHeader>
            <QuickAddForm/>
            <SheetFooter>
              <SheetClose className="flex gap-5">
                <Button 
                  bg="light_brown" 
                  color="white" 
                  _hover={{ 
                    border: "2px solid", 
                    borderColor: "white" 
                  }} 
                  border="2px solid transparent" // Ensure default border is transparent
                >
                  Submit
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
      </Sheet>
    </div>
  )
}

export default QuickAddButton;
