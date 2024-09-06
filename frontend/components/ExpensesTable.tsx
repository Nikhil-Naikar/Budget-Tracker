"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ScrollArea } from "./ui/scroll-area";
import { Flex, Heading } from "@chakra-ui/react";
import transactions from "@/constants/dummyExpenses";
import { Card } from "./ui/card";

const ExpensesTable = () => {
  return (
    <Card className="border border-dark_brown">
        <Flex direction={"column"} alignItems="center" padding={3}>
            <Heading fontSize={20} className="text-light_brown">Recent Expenses</Heading>
        </Flex>
        <ScrollArea className="h-[300px] w-[500px] rounded-md ">
            <Table>
                <TableHeader className="text-base">
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead className="w-[150px]">Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>${transaction.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    </Card>
  )
}

export default ExpensesTable;
