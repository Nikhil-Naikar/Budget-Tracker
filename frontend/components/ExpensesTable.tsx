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
import QuickAddButton from "./QuickAddButton";

const ExpensesTable = () => {
  return (
    <Card className="border border-dark_brown w-full h-full">
        <Flex direction={"column"} alignItems="center" padding={3}>
            <Heading fontSize={20} className="text-light_brown">View Expenses</Heading>
        </Flex>
        <ScrollArea className="h-[240px] px-3 rounded-md">
            <Table>
                <TableHeader className="text-base">
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead className="w-[150px] sm:w-auto">Description</TableHead>
                        {/* <TableHead>Category</TableHead> */}
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            {/* <TableCell>{transaction.category}</TableCell> */}
                            <TableCell>${transaction.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
        <Flex direction={"column"} alignItems="center" padding={3}>
            <QuickAddButton />
        </Flex>
    </Card>
  )
}

export default ExpensesTable;
