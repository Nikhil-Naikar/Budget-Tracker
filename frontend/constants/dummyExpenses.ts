const transactions = [
    {
      date: "2024-09-01",
      description: "Grocery shopping",
      category: "Food",
      amount: "50.75"
    },
    {
      date: "2024-09-02",
      description: "Gas refill",
      category: "Transportation",
      amount: "40.10"
    },
    {
      date: "2024-09-03",
      description: "Internet bill",
      category: "Utilities",
      amount: "60.00"
    },
    {
      date: "2024-09-04",
      description: "Gym membership",
      category: "Health",
      amount: "25.00"
    },
    {
      date: "2024-09-05",
      description: "Restaurant dinner",
      category: "Food",
      amount: "80.50"
    },
    {
      date: "2024-09-06",
      description: "Movie tickets",
      category: "Entertainment",
      amount: "30.00"
    },
    {
      date: "2024-09-07",
      description: "Electricity bill",
      category: "Utilities",
      amount: "120.25"
    },
    {
      date: "2024-09-08",
      description: "Clothing purchase",
      category: "Shopping",
      amount: "150.00"
    },
    {
      date: "2024-09-09",
      description: "Coffee shop",
      category: "Food",
      amount: "15.75"
    },
    {
      date: "2024-09-10",
      description: "Subscription service",
      category: "Entertainment",
      amount: "10.99"
    },
    {
      date: "2024-09-11",
      description: "Phone bill",
      category: "Utilities",
      amount: "45.00"
    },
    {
      date: "2024-09-12",
      description: "Lunch with friends",
      category: "Food",
      amount: "60.25"
    },
    {
      date: "2024-09-13",
      description: "New headphones",
      category: "Electronics",
      amount: "85.00"
    },
    {
      date: "2024-09-14",
      description: "Car maintenance",
      category: "Transportation",
      amount: "200.00"
    },
    {
      date: "2024-09-15",
      description: "Groceries",
      category: "Food",
      amount: "90.00"
    },
    {
      date: "2024-09-16",
      description: "Concert tickets",
      category: "Entertainment",
      amount: "120.00"
    },
    {
      date: "2024-09-17",
      description: "Flight booking",
      category: "Travel",
      amount: "400.00"
    },
    {
      date: "2024-09-18",
      description: "Hotel reservation",
      category: "Travel",
      amount: "250.00"
    },
    {
      date: "2024-09-19",
      description: "Taxi fare",
      category: "Transportation",
      amount: "35.00"
    },
    {
      date: "2024-09-20",
      description: "Streaming subscription",
      category: "Entertainment",
      amount: "12.99"
    },
    {
      date: "2024-09-21",
      description: "Lunch at cafe",
      category: "Food",
      amount: "18.50"
    },
    {
      date: "2024-09-22",
      description: "Office supplies",
      category: "Shopping",
      amount: "45.00"
    },
    {
      date: "2024-09-23",
      description: "Charity donation",
      category: "Charity",
      amount: "100.00"
    },
    {
      date: "2024-09-24",
      description: "Gift for friend",
      category: "Shopping",
      amount: "70.00"
    },
    {
      date: "2024-09-25",
      description: "Dentist appointment",
      category: "Health",
      amount: "150.00"
    },
    {
      date: "2024-09-26",
      description: "Pet food",
      category: "Pets",
      amount: "35.75"
    },
    {
      date: "2024-09-27",
      description: "Gym equipment",
      category: "Health",
      amount: "250.00"
    },
    {
      date: "2024-09-28",
      description: "Birthday party supplies",
      category: "Shopping",
      amount: "85.00"
    },
    {
      date: "2024-09-29",
      description: "Parking fee",
      category: "Transportation",
      amount: "10.00"
    },
    {
      date: "2024-09-30",
      description: "Books purchase",
      category: "Education",
      amount: "50.00"
    },
    {
      date: "2024-10-01",
      description: "Streaming service",
      category: "Entertainment",
      amount: "14.99"
    },
    {
      date: "2024-10-02",
      description: "Office lunch",
      category: "Food",
      amount: "22.50"
    },
    {
      date: "2024-10-03",
      description: "Furniture purchase",
      category: "Shopping",
      amount: "600.00"
    },
    {
      date: "2024-10-04",
      description: "Grocery run",
      category: "Food",
      amount: "100.00"
    },
    {
      date: "2024-10-05",
      description: "Plane ticket",
      category: "Travel",
      amount: "350.00"
    },
    {
      date: "2024-10-06",
      description: "Home repairs",
      category: "Utilities",
      amount: "250.00"
    },
    {
      date: "2024-10-07",
      description: "Spa day",
      category: "Health",
      amount: "120.00"
    },
    {
      date: "2024-10-08",
      description: "Tech gadget purchase",
      category: "Electronics",
      amount: "300.00"
    },
    {
      date: "2024-10-09",
      description: "Coffee with friend",
      category: "Food",
      amount: "12.50"
    },
    {
      date: "2024-10-10",
      description: "Weekend trip",
      category: "Travel",
      amount: "180.00"
    },
    {
      date: "2024-10-11",
      description: "Massage therapy",
      category: "Health",
      amount: "95.00"
    },
    {
      date: "2024-10-12",
      description: "Grocery shopping",
      category: "Food",
      amount: "75.00"
    },
    {
      date: "2024-10-13",
      description: "Video game purchase",
      category: "Entertainment",
      amount: "60.00"
    },
    {
      date: "2024-10-14",
      description: "Streaming service",
      category: "Entertainment",
      amount: "15.99"
    },
    {
      date: "2024-10-15",
      description: "Haircut",
      category: "Health",
      amount: "40.00"
    },
    {
      date: "2024-10-16",
      description: "Taxi fare",
      category: "Transportation",
      amount: "20.00"
    },
    {
      date: "2024-10-17",
      description: "Work dinner",
      category: "Food",
      amount: "55.00"
    },
    {
      date: "2024-10-18",
      description: "Gas refill",
      category: "Transportation",
      amount: "45.50"
    }
  ];

  export default transactions;
  