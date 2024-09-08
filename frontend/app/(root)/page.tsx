"use client";

import { Flex, Grid, Heading, space } from "@chakra-ui/react";
import Chart from "@/components/Chart";
import Graph from "@/components/Graph";
import ExpensesTable from "@/components/ExpensesTable";
import CategoryGraph from "@/components/CategoryGraph";

const Home = () => {

  return (
    <div className="flex flex-col gap-5 px-3">
      <Flex direction={"column"} alignItems="center">
        <Heading className="text-light_brown">Welcome Ent</Heading>
      </Flex>
      
      <section id="quick-summary">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[350px] gap-5">
          <Flex direction={"column"} alignItems="center" height={{ sm: 350}}>
            <Chart />
          </Flex>
          <Flex direction={"column"} alignItems="center" height={{ sm: 350}}>
            <ExpensesTable />
          </Flex>
          <Flex direction={"column"} alignItems="center" height={{ sm: 350}} gridColumn={{ md: "span 2" }} >
            <CategoryGraph />
          </Flex>
          <Flex direction={"column"} alignItems="center" height={{ sm: 350}} gridColumn={{ md: "span 2" }}>
            <Graph />
          </Flex>
        </div>
      </section>
    </div>
  )
}

export default Home;

