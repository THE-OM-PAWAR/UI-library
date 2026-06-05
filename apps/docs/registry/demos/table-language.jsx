"use client";

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@repo/components";
import { AlertCircle } from "lucide-react";
import React, { useState } from "react";

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

export default function TableLanguage() {
    const [language, setLanguage] = useState("sanskrit");

    const translations = {
        english: {
            langSelect: "English",
            invoice: "Invoice",
            status: "Status",
            method: "Method",
            amount: "Amount",
            total: "Total",
            caption: "A list of your recent invoices.",
            statuses: {
                Paid: "Paid",
                Pending: "Pending",
                Unpaid: "Unpaid",
            },
            methods: {
                "Credit Card": "Credit Card",
                PayPal: "PayPal",
                "Bank Transfer": "Bank Transfer",
            }
        },
        sanskrit: {
            langSelect: "Sanskrit (संस्कृतम्)",
            invoice: "बीजकम्",
            status: "स्थितिः",
            method: "विधिः",
            amount: "राशिः",
            total: "योगः",
            caption: "भवतः नूतनबीजकानां सूची।",
            statuses: {
                Paid: "दत्तम्",
                Pending: "प्रलम्बितम्",
                Unpaid: "अदत्तम्",
            },
            methods: {
                "Credit Card": "क्रेडिट् कार्ड",
                PayPal: "पेपाल्",
                "Bank Transfer": "बैंक् ट्रान्सफर्",
            }
        },
        hindi: {
            langSelect: "Hindi (हिन्दी)",
            invoice: "चालान",
            status: "स्थिति",
            method: "विधि",
            amount: "राशि",
            total: "कुल",
            caption: "आपके हाल के चालानों की सूची।",
            statuses: {
                Paid: "भुगतान किया",
                Pending: "लंबित",
                Unpaid: "ब बकाया",
            },
            methods: {
                "Credit Card": "क्रेडिट कार्ड",
                PayPal: "पेपाल",
                "Bank Transfer": "बैंक ट्रांसफर",
            }
        }
    };

    const t = translations[language];

    return (
        <div className="mx-auto flex flex-col justify-between w-full max-w-3xl p-6 rounded-lg border bg-background text-foreground shadow-sm">
            {/* Top Header with Language Dropdown and Info Icon */}
            <div className="flex items-start justify-between w-full mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[200px] justify-between text-muted-foreground shadow-none">
                            {t.langSelect}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                            <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="sanskrit">Sanskrit (संस्कृतम्)</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="hindi">Hindi (हिन्दी)</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <AlertCircle className="size-5" />
                    <span className="sr-only">Info</span>
                </Button>
            </div>

            <Table>
                <TableCaption>{t.caption}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">{t.invoice}</TableHead>
                        <TableHead>{t.status}</TableHead>
                        <TableHead>{t.method}</TableHead>
                        <TableHead className="text-right">{t.amount}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{t.statuses[invoice.paymentStatus]}</TableCell>
                            <TableCell>{t.methods[invoice.paymentMethod]}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>{t.total}</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
