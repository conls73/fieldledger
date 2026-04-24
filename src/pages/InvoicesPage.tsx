import { Button } from "@/components/ui/button";
import { Plus, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { InvoicePDF } from '@/components/InvoicePDF';

const mockInvoices = [
  { id: "INV-2026-005", customer: "Valley Farms Co-op", date: "Apr 20, 2026", amount: "$890.00", status: "sent" },
  { id: "INV-2026-004", customer: "Sarah Jenkins", date: "Apr 15, 2026", amount: "$1,450.00", status: "paid" },
  { id: "INV-2026-003", customer: "Downtown Farmers Market", date: "Mar 28, 2026", amount: "$3,200.00", status: "overdue" },
];

export default function InvoicesPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground mt-1">Manage and track your customer invoicing.</p>
        </div>
        <Link to="/invoices/new">
          <Button className="shrink-0 group">
            <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" /> New Invoice
          </Button>
        </Link>
      </div>

      <div className="glass rounded-xl border border-border/50 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/40 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Invoice Number</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Issue Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" /> {inv.id}
                  </td>
                  <td className="px-6 py-4">{inv.customer}</td>
                  <td className="px-6 py-4 text-muted-foreground">{inv.date}</td>
                  <td className="px-6 py-4 font-medium">{inv.amount}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={
                      inv.status === 'paid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                      inv.status === 'overdue' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                      'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    }>
                      {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <PDFDownloadLink document={<InvoicePDF invoiceId={inv.id} />} fileName={`invoice-${inv.id}.pdf`}>
                      {({ loading }) => (
                        <Button variant="ghost" size="icon" className="hover:text-primary" disabled={loading}>
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </PDFDownloadLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {mockInvoices.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No invoices created yet.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
