import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function AuthPage() {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    alert(`Logging in as ${form.email}`);
  };

  const handleSignup = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signing up as ${form.email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] flex items-center justify-center p-6 overflow-hidden">
      <motion.div
        className="w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="shadow-2xl rounded-3xl backdrop-blur-2xl border border-white/30 bg-white/10">
          <CardContent className="p-8 relative">
            <div className="absolute -top-6 left-4">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
            </div>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 bg-white/40 backdrop-blur-sm rounded-xl mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <div className="space-y-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl shadow-md bg-white/30 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="rounded-xl shadow-md bg-white/30 text-white placeholder:text-white/70"
                  />
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 hover:from-indigo-600 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-xl"
                  >
                    Login
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div className="space-y-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl shadow-md bg-white/30 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="rounded-xl shadow-md bg-white/30 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="rounded-xl shadow-md bg-white/30 text-white placeholder:text-white/70"
                  />
                  <Button
                    onClick={handleSignup}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold rounded-xl shadow-xl"
                  >
                    Sign Up
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}