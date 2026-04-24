import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Trash2, ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewInvoicePage() {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: {
      customerName: "",
      email: "",
      issueDate: new Date().toISOString().split("T")[0],
      dueDate: "",
      items: [{ description: "", quantity: 1, unitPrice: 0 }],
      notes: "",
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  const watchItems = watch("items");
  
  const subtotal = watchItems.reduce((acc, item) => acc + ((item.quantity || 0) * (item.unitPrice || 0)), 0);
  const taxRate = 0.08; // 8% tax example
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const onSubmit = (data: any) => {
    console.log("Submitting invoice", data);
    // Submit to Supabase here
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <Link to="/invoices">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Invoice</h1>
          <p className="text-muted-foreground mt-1">Draft a new invoice for your customers.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in max-w-4xl">
        <div className="glass p-6 rounded-xl border border-border/50 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Customer Name</Label>
            <Input {...register("customerName")} placeholder="Acme Co." />
          </div>
          <div className="space-y-2">
            <Label>Customer Email</Label>
            <Input {...register("email")} type="email" placeholder="billing@acme.com" />
          </div>
          <div className="space-y-2">
            <Label>Issue Date</Label>
            <Input {...register("issueDate")} type="date" />
          </div>
          <div className="space-y-2">
            <Label>Due Date</Label>
            <Input {...register("dueDate")} type="date" />
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-border/50 space-y-4">
          <h2 className="text-xl font-semibold">Line Items</h2>
          
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1 space-y-2">
                  <Label className="md:hidden">Description</Label>
                  <Input {...register(`items.${index}.description` as const)} placeholder="Item description" />
                </div>
                <div className="w-24 space-y-2">
                  <Label className="md:hidden">Qty</Label>
                  <Input {...register(`items.${index}.quantity` as const, { valueAsNumber: true })} type="number" min="1" step="0.1" />
                </div>
                <div className="w-32 space-y-2">
                  <Label className="md:hidden">Price ($)</Label>
                  <Input {...register(`items.${index}.unitPrice` as const, { valueAsNumber: true })} type="number" min="0" step="0.01" />
                </div>
                <div className="w-32 space-y-2 pt-2 md:pt-0">
                  <Label className="md:hidden">Total</Label>
                  <div className="h-10 flex items-center font-medium">
                    ${((watchItems[index]?.quantity || 0) * (watchItems[index]?.unitPrice || 0)).toFixed(2)}
                  </div>
                </div>
                {fields.length > 1 && (
                  <Button type="button" variant="ghost" size="icon" className="text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 mt-6 md:mt-0" onClick={() => remove(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button type="button" variant="outline" onClick={() => append({ description: "", quantity: 1, unitPrice: 0 })} className="mt-4">
            <Plus className="h-4 w-4 mr-2" /> Add Item
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 w-full glass p-6 rounded-xl border border-border/50 space-y-2">
            <Label>Notes for Customer</Label>
            <Textarea {...register("notes")} placeholder="Thank you for your business!" className="min-h-[120px]" />
          </div>

          <div className="w-full md:w-80 glass p-6 rounded-xl border border-border/50 space-y-4">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t border-border/50">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            
            <Button type="submit" className="w-full mt-4 h-12 text-lg group">
              <Save className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" /> Save Invoice
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
