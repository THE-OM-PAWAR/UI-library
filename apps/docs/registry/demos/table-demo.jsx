import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@repo/components";

export default function TableDemo() {
    return (
        <Table className="mx-auto max-w-md">
            <TableCaption>Recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>INV004</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
