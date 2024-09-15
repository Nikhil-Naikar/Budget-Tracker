using System;
using backend.Dtos;

namespace backend.Constants;

public static class DummyData
{
    public static List<ExpenseDto> Expenses = new List<ExpenseDto>
    {
        new ExpenseDto("Costco", "Expense", "Bulk grocery shopping", "Groceries", 250.75m, new DateOnly(2024, 1, 1)),
        new ExpenseDto("Rent", "Expense", "Monthly apartment rent", "Housing", 1800, new DateOnly(2024, 1, 2)),
        new ExpenseDto("ConEd", "Expense", "Electricity bill", "Utilities", 85.50m, new DateOnly(2024, 1, 3)),
        new ExpenseDto("Uber", "Expense", "Ride to work", "Transportation", 22.35m, new DateOnly(2024, 1, 4)),
        new ExpenseDto("Tomi Jazz", "Expense", "Night out with friends", "Entertainment", 75.20m, new DateOnly(2024, 1, 5)),
        new ExpenseDto("Salary", "Income", "Monthly paycheck", "Income", 4500, new DateOnly(2024, 1, 15)),
        new ExpenseDto("Uniqlo", "Expense", "New work clothes", "Shopping", 120.80m, new DateOnly(2024, 1, 7)),
        new ExpenseDto("Trader Joe's", "Expense", "Weekly grocery run", "Groceries", 87.65m, new DateOnly(2024, 1, 8)),
        new ExpenseDto("AMC Theater", "Expense", "Movie night", "Entertainment", 18.50m, new DateOnly(2024, 1, 9)),
        new ExpenseDto("Verizon", "Expense", "Monthly phone bill", "Utilities", 65.99m, new DateOnly(2024, 1, 10)),
    };

}
