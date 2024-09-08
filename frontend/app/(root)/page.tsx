"use client";

import { Flex, Grid, Heading } from "@chakra-ui/react";
import Chart from "@/components/Chart";
import Graph from "@/components/Graph";
import ExpensesTable from "@/components/ExpensesTable";
import CategoryGraph from "@/components/CategoryGraph";

const Home = () => {

  return (
    <div className="flex flex-col gap-5 py-5">
      <Flex direction={"column"} alignItems="center">
        <Heading className="text-light_brown">Good morning Ent</Heading>
      </Flex>
      
      <section id="quick-summary">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}} height={350} gap={5}>
          <Flex direction={"column"} alignItems="center">
            <Chart />
          </Flex>
          <Flex direction={"column"} alignItems="center">
            <CategoryGraph />
          </Flex>
        </Grid>
      </section>

      <section id="expenses_overview">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}} height={350} gap={5}>
          <Flex direction={"column"} alignItems="center">
          <Graph />
          </Flex>
          <Flex direction={"column"} alignItems="center" padding={5}>
            <ExpensesTable />
          </Flex>
        </Grid>
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

