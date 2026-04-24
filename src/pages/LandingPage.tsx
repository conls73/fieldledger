import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, TrendingUp, DollarSign, FileText } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <main className="z-10 flex flex-col items-center text-center p-6 max-w-4xl w-full hover-lift animate-in">
        <div className="mb-6 bg-primary/10 rounded-2xl p-4 shadow-[0_0_40px_rgba(22,163,74,0.4)] inline-flex items-center justify-center border border-primary/20">
          <Leaf className="w-16 h-16 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-foreground">
          Bookkeeping for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Farm</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl px-4 font-light">
          FieldLedger provides simple invoicing, expense tracking, and recipe formulations beautifully designed to help family farms thrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full md:w-auto px-4">
          <Link to="/dashboard" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-accent text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105">
              Enter FieldLedger <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/login" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg border-primary/20 hover:bg-primary/5 transition-all">
              Log In
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="glass p-6 rounded-2xl flex flex-col gap-3">
             <div className="p-3 bg-primary/10 w-fit rounded-lg"><DollarSign className="text-primary w-6 h-6"/></div>
             <h3 className="text-xl font-semibold">Track Income & Expenses</h3>
             <p className="text-muted-foreground">Easily log all farm transactions. Categorize with tax-friendly buckets.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col gap-3">
             <div className="p-3 bg-accent/10 w-fit rounded-lg"><FileText className="text-accent w-6 h-6"/></div>
             <h3 className="text-xl font-semibold">Instant PDF Invoices</h3>
             <p className="text-muted-foreground">Generate professional invoices and send them directly to your buyers.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col gap-3">
             <div className="p-3 bg-emerald-500/10 w-fit rounded-lg"><TrendingUp className="text-emerald-500 w-6 h-6"/></div>
             <h3 className="text-xl font-semibold">Recipe Formulations</h3>
             <p className="text-muted-foreground">Track feed mixes, calculate unit costs, and optimize farm resource usage.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
