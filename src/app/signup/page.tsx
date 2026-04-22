"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-3 hover:opacity-80 transition-opacity z-10 group">
        <div className="bg-primary/10 p-2 rounded-lg shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
        <span className="font-bold tracking-tight text-xl text-foreground">FieldLedger</span>
      </Link>

      <Card className="w-full max-w-md glass border-border/50 shadow-2xl relative z-10 animate-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your farm dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="farm-name">Farm Name</Label>
            <Input id="farm-name" placeholder="Green Valley Farms" className="bg-background/50 h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="farmer@example.com" className="bg-background/50 h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-background/50 h-12" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full h-12 text-md font-medium" asChild>
            <Link href="/dashboard">Sign up</Link>
          </Button>
          <div className="text-center text-sm text-muted-foreground w-full">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
