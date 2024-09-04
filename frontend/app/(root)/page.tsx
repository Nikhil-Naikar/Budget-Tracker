import { Flex } from "@chakra-ui/react";
import Chart from "@/components/Chart";

const Home = () => {

  return (
    <div className="flex flex-col gap-10">
      <Flex 
        direction={"column"}
        alignItems="center"
      >
        <Chart />
      </Flex>
      <section>
        <h2>Total Spending / Total Budget - for current month</h2>
        <h2>Graph marking all expenses with dates of the month</h2>
      </section>
      <section>
        <h2>Spendings and budget left per category</h2>
        <h2>Recent spending list - minimalist list</h2>
      </section>
    </div>
    
  )
}

export default Home;

