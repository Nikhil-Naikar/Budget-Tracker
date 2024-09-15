using System;

namespace backend.Dtos;

//record instead of class because it is immutable
public record class ExpenseDto(
    string Name,
    string Type,
    string? Description,
    string? Category,
    decimal Amount,
    DateOnly Date
);

