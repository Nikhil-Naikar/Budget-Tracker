"use client";

import { Flex, Grid, Heading } from "@chakra-ui/react";
import Chart from "@/components/Chart";
import moneyBag from "@/public/icons/money-bag.png"
import Image from "next/image";
import Graph from "@/components/Graph";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ExpensesTable from "@/components/ExpensesTable";

const Home = () => {

  return (
    <div className="flex flex-col gap-5 bg-card py-5">
      <Flex direction={"column"} alignItems="center" paddingBottom={5}>
        <Heading className="text-light_brown">Quick Summary</Heading>
      </Flex>

      <section id="quick-summary">
        <Grid templateColumns='repeat(2, 1fr)'>
          <Flex direction={"column"} alignItems="center">
            <Chart />
          </Flex>
          <Flex direction={"column"} alignItems="center">
            <ExpensesTable />
          </Flex>
        </Grid>
      </section>

      <section>
        <Flex 
          direction={"column"}
          alignItems="center"
        >
          <div className="md:grid md:grid-rows-[auto,1fr] md:grid-cols-2 sm:w-sm md:w-full sm:flex sm:flex-col">

              <div className="h-[200px] md:col-span-1 flex items-center justify-center">
                <Carousel className="w-[200px]">
                  <CarouselContent>
                    <CarouselItem className="flex items-center justify-center bg-white">
                      <Image width={150} height={150} alt="pic_1" src={moneyBag}/>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center bg-white">
                      <Image width={150} height={150} alt="pic_1" src={moneyBag}/>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center bg-white">
                      <Image width={150} height={150} alt="pic_1" src={moneyBag}/>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center bg-white">
                      <Image width={150} height={150} alt="pic_1" src={moneyBag}/>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="pl-3"/>
                  <CarouselNext className="pr-3"/>
                </Carousel>
              </div>

              <div className="md:col-span-1 p-4">
              <ScrollArea className="h-[150px] w-[350px] rounded-md ">
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop.
              </ScrollArea>
              </div>

              <div className="md:col-span-2  p-4">
                <Graph />
              </div>
          </div>
          </Flex>
      </section>
    </div>
    
    // group expenses by categories - how month spent/budget left in month/week/day
    // set largets for monthly expenses, and limits on categories
    // send funny notifications to user as warning, or over budget messages
    // usd to cad
    // link to bank account
  )
}

export default Home;

