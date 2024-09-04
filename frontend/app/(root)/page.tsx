
const Home = () => {

  return (
    <div className="flex flex-col min-h-screen gap-9 text-black w-full items-center">
      <div className="flex flex-col gap-5 w-100 pt-14 pb-8">
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
    </div>
  )
}

export default Home;

