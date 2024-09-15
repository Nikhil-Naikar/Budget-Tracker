using System;
using backend.Constants;

namespace backend.Endpoints;

public static class ExpensesEndpoints
{
    public static RouteGroupBuilder MapExpensesEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/expenses");
        group.MapGet("/", () => DummyData.Expenses).WithName("GetExpenses");
        return group;
        
    }
}

/*
DummyData.Find()
DummyData.Add()
DummyData.Update()
DummyData.Delete()
look up the best practices for returning results when making API calls

API I want to create:
- Get all expenses
- Get expenses by month
    - Get expenses by date range
    - Get expense by category
    - Get expense by type
    - Get expense by asc/desc amount
- Update expense
- Delete expense
- Create expense
*/
