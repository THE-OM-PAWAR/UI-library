"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@repo/components";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$250.00",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    paymentMethod: "PayPal",
    totalAmount: "$150.00",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    paymentMethod: "Bank Transfer",
    totalAmount: "$350.00",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$450.00",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    paymentMethod: "PayPal",
    totalAmount: "$550.00",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    paymentMethod: "Bank Transfer",
    totalAmount: "$200.00",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
    totalAmount: "$300.00",
  },
];

export default function TableExtended() {
    return (
        <Table className="mx-auto max-w-3xl">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
