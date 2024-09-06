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
    <div className="flex flex-col gap-5 py-5">
      <Flex direction={"column"} alignItems="center" paddingBottom={5}>
        <Heading className="text-light_brown">August 2024</Heading>
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

      <section id="graph">
        <Flex direction={"column"} alignItems="center">
          <Graph />
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

