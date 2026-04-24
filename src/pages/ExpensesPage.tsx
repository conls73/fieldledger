import { Button } from "@/components/ui/button";
import { Plus, Wallet, ArrowDownRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const mockExpenses = [
  { id: 1, date: "Apr 21, 2026", vendor: "Cenex", category: "Fuel", amount: "$340.00", method: "Credit Card" },
  { id: 2, date: "Apr 18, 2026", vendor: "Tractor Supply Co", category: "Supplies", amount: "$1,120.50", method: "Checking" },
  { id: 3, date: "Apr 12, 2026", vendor: "State Trust Insurance", category: "Insurance", amount: "$850.00", method: "ACH" },
  { id: 4, date: "Apr 05, 2026", vendor: "Valley Seed", category: "Seed", amount: "$4,200.00", method: "Check" },
];

export default function ExpensesPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
          <p className="text-muted-foreground mt-1">Track and categorize your farm expenditures.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search expenses..." className="pl-8 bg-background/50 border-border/50" />
          </div>
          <Link to="/expenses/new">
            <Button className="shrink-0 group">
              <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" /> Add Expense
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="glass p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Wallet className="h-4 w-4" />
            <h3 className="font-medium text-sm">Total Expenses (MTD)</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">$6,510.50</p>
        </div>
        <div className="glass p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <ArrowDownRight className="h-4 w-4 text-rose-500" />
            <h3 className="font-medium text-sm">Highest Category</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">Seed</p>
        </div>
      </div>

      <div className="glass rounded-xl border border-border/50 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/40 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Method</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{expense.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{expense.vendor}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className="bg-secondary/50">
                      {expense.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{expense.method}</td>
                  <td className="px-6 py-4 font-medium text-right text-foreground">{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
