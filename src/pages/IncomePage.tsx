import { Button } from "@/components/ui/button";
import { Plus, ArrowUpRight, Search, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const mockIncome = [
  { id: 1, date: "Apr 20, 2026", source: "Farmers Market Sales", category: "Retail", amount: "$1,240.00", status: "cleared" },
  { id: 2, date: "Apr 15, 2026", source: "USDA Grant Program", category: "Grant", amount: "$5,000.00", status: "cleared" },
  { id: 3, date: "Apr 10, 2026", source: "Local Restaurant Co.", category: "Wholesale", amount: "$850.00", status: "pending" },
];

export default function IncomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Income</h1>
          <p className="text-muted-foreground mt-1">Track direct sales, grants, and miscellaneous revenue.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search income..." className="pl-8 bg-background/50 border-border/50" />
          </div>
          <Link to="/income/new">
            <Button className="shrink-0 group bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" /> Add Income
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="glass p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <CircleDollarSign className="h-4 w-4 text-emerald-500" />
            <h3 className="font-medium text-sm">Total Income (MTD)</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">$7,090.00</p>
        </div>
        <div className="glass p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            <h3 className="font-medium text-sm">Highest Category</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">Grant</p>
        </div>
      </div>

      <div className="glass rounded-xl border border-border/50 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/40 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Source</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockIncome.map((income) => (
                <tr key={income.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{income.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{income.source}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                      {income.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-medium text-right text-foreground">{income.amount}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      income.status === 'cleared' ? 'bg-zinc-800 text-zinc-300' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {income.status.charAt(0).toUpperCase() + income.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
