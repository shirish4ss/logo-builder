"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, CheckCircle2, User, Mail, Lock } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white relative overflow-hidden px-6 py-12">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block space-y-10"
        >
            <div>
                <Link href="/" className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors group mb-8">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
                <div className="flex items-center space-x-2 group mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
                        <span className="text-white font-black text-xl italic">L</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase">LOGOAI</span>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-[1.1] tracking-tight">Build your brand <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">with intelligence.</span></h1>
                <p className="text-white/40 text-lg max-w-md font-medium">
                    Join 50,000+ creators using LogoAI to build stunning brand identities in seconds.
                </p>
            </div>

            <div className="space-y-5">
                {[
                    "AI-Powered Logo Generation",
                    "Professional Branding Kits",
                    "High-Resolution Vector Exports",
                    "Social Media Assets Generator"
                ].map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex items-center space-x-4 group"
                    >
                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <CheckCircle2 className="text-blue-500" size={14} />
                        </div>
                        <span className="text-sm font-semibold text-white/70">{item}</span>
                    </motion.div>
                ))}
            </div>

            <div className="pt-8 border-t border-white/5">
                <div className="flex -space-x-3 mb-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-black">
                        +50k
                    </div>
                </div>
                <p className="text-xs text-white/30 font-bold uppercase tracking-widest">Trusted by designers worldwide</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[2.5rem] blur opacity-10"></div>
            <Card className="relative border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardHeader className="space-y-1 p-10 pb-4 text-center">
                    <div className="lg:hidden mb-8 flex justify-between items-center">
                        <Link href="/" className="inline-flex items-center text-xs font-medium text-white/40">
                            <ArrowLeft size={14} className="mr-1" /> Home
                        </Link>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                            <span className="text-white font-black text-xl italic">L</span>
                        </div>
                        <div className="w-10" />
                    </div>
                    <CardTitle className="text-3xl font-bold tracking-tight">Create Account</CardTitle>
                    <CardDescription className="text-sm font-medium text-white/40">
                        Get started with your free 7-day trial.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4 p-10 pt-0">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold text-center"
                        >
                            {error}
                        </motion.div>
                    )}
                    <div className="space-y-2">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                className="h-14 pl-12 rounded-xl border-white/5 bg-white/5 focus:bg-white/10 focus:ring-blue-500 transition-all text-white placeholder:text-white/20"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                className="h-14 pl-12 rounded-xl border-white/5 bg-white/5 focus:bg-white/10 focus:ring-blue-500 transition-all text-white placeholder:text-white/20"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <Input
                                id="password"
                                type="password"
                                placeholder="Create Password"
                                className="h-14 pl-12 rounded-xl border-white/5 bg-white/5 focus:bg-white/10 focus:ring-blue-500 transition-all text-white placeholder:text-white/20"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-6 p-10 pt-0">
                        <Button
                            type="submit"
                            className="w-full h-14 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl shadow-blue-600/20"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Get Started Now"}
                        </Button>
                        <div className="text-center text-xs text-white/40 font-medium">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
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
