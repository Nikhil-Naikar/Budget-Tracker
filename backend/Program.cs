using backend.Constants;
using backend.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapExpensesEndpoints();

app.Run();






