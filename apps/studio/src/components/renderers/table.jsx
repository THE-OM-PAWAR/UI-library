export function renderTable(
    {
        Table,
        TableHeader,
        TableBody,
        TableFooter,
        TableHead,
        TableRow,
        TableCell,
        TableCaption,
    },
    customClassName
) {
    const rows = [
        {
            invoice: "INV001",
            status: "Paid",
            method: "Credit Card",
            amount: "$250.00",
        },
        {
            invoice: "INV002",
            status: "Pending",
            method: "PayPal",
            amount: "$150.00",
        },
        {
            invoice: "INV003",
            status: "Unpaid",
            method: "Bank Transfer",
            amount: "$350.00",
        },
    ];

    return (
        <div className="w-full max-w-3xl">
            <Table className={customClassName}>
                <TableCaption>A list of recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.invoice}>
                            <TableCell className="font-medium">
                                {row.invoice}
                            </TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.method}</TableCell>
                            <TableCell className="text-right">
                                {row.amount}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$750.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
