import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-3 hover:opacity-80 transition-opacity z-10 group">
        <div className="bg-primary/10 p-2 rounded-lg shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
        <span className="font-bold tracking-tight text-xl text-foreground">FieldLedger</span>
      </Link>

      <Card className="w-full max-w-md glass border-border/50 shadow-2xl relative z-10 animate-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
          <CardDescription>
            Join FieldLedger today and start managing your farm finances
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="farmName">Farm Name</Label>
            <Input id="farmName" placeholder="Green Valley Farm" className="bg-background/50 h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="farmer@example.com" className="bg-background/50 h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-background/50 h-11" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link to="/dashboard" className="w-full">
            <Button className="w-full h-12 text-md font-medium">Create Account</Button>
          </Link>
          <div className="text-center text-sm text-muted-foreground w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
