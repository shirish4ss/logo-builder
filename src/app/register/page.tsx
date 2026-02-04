"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        router.push("/login?registered=true");
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 relative overflow-hidden px-6 py-12">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10 blur-3xl"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
        >
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <Link href="/" className="inline-flex items-center space-x-2 mb-12 group">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl shadow-blue-600/20">
                    <span className="text-white font-black text-2xl">L</span>
                </div>
                <span className="text-3xl font-black tracking-tighter">LogoAI</span>
            </Link>
            <h1 className="text-6xl font-black mb-8 leading-tight">Start Your <br /> Brand Journey.</h1>
            <div className="space-y-6">
                {[
                    "Create your first logo in under 60 seconds",
                    "Access 1000+ premium design elements",
                    "Download production-ready vector files",
                    "Join 50,000+ happy entrepreneurs"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                        <CheckCircle2 className="text-blue-600" size={24} />
                        <span className="text-xl font-bold text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                ))}
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl shadow-2xl rounded-[3rem] overflow-hidden">
            <CardHeader className="space-y-1 p-10 pb-4 text-center">
                <div className="lg:hidden mb-6 flex justify-between items-center">
                    <Link href="/" className="inline-flex items-center text-xs font-bold text-gray-500">
                        <ArrowLeft size={14} className="mr-1" /> Home
                    </Link>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black text-xl">L</span>
                    </div>
                    <div className="w-10" /> {/* Spacer */}
                </div>
                <CardTitle className="text-4xl font-black">Get Started</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    Create your free account today.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 p-10 pt-0">
                {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold text-center">
                    {error}
                    </div>
                )}
                <div className="space-y-2">
                    <Input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    className="h-14 rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="space-y-2">
                    <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="h-14 rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="space-y-2">
                    <Input
                    id="password"
                    type="password"
                    placeholder="Choose Password"
                    className="h-14 rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 p-10 pt-0">
                <Button
                    type="submit"
                    className="w-full h-16 rounded-2xl text-xl font-black bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                    disabled={loading}
                >
                    {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
                </Button>
                <div className="text-center text-gray-500 dark:text-gray-400 font-medium">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline font-bold">
                    Sign in
                    </Link>
                </div>
                </CardFooter>
            </form>
            </Card>
        </motion.div>
      </div>
    </div>
  );
}
