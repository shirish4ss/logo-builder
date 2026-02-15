"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Lock, Mail, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function LoginPage() {
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
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground overflow-hidden">
      {/* Left Side: Visual Experience */}
      <div className="hidden lg:flex flex-1 relative bg-primary overflow-hidden items-center justify-center p-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent"></div>

        <div className="relative z-10 space-y-8 max-w-lg">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-primary-foreground text-primary rounded-[2rem] flex items-center justify-center shadow-2xl"
            >
                <Sparkles size={40} />
            </motion.div>

            <div className="space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-black text-primary-foreground tracking-tighter leading-tight"
                >
                    Design your legacy, <br />
                    <span className="opacity-50">powered by AI.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-primary-foreground/60 text-lg font-medium"
                >
                    Join 10,000+ creators building award-winning brands with LogoAI.
                </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: Zap, text: "Instant SVG" },
                    { icon: ShieldCheck, text: "Legal Rights" }
                ].map((item, i) => (
                    <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-4 rounded-2xl flex items-center space-x-3"
                    >
                        <item.icon className="text-primary-foreground" size={20} />
                        <span className="text-primary-foreground font-bold text-sm">{item.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Decorative Floating Elements */}
        <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
        />
        <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-10 w-24 h-24 bg-primary-foreground/5 backdrop-blur-md rounded-3xl border border-white/10"
        />
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative">
        <div className="absolute top-8 left-8 lg:left-24">
            <Link href="/" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to home
            </Link>
        </div>

        <div className="max-w-md w-full mx-auto space-y-10">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Access your brand ecosystem</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl text-destructive text-xs font-bold text-center"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                        type="email"
                        placeholder="name@company.com"
                        className="h-14 pl-12 rounded-2xl border-border bg-muted/50 focus:bg-background focus:ring-primary transition-all font-medium"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</label>
                    <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">Forgot?</Link>
                </div>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                        type="password"
                        placeholder="••••••••"
                        className="h-14 pl-12 rounded-2xl border-border bg-muted/50 focus:bg-background focus:ring-primary transition-all font-medium"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-16 rounded-2xl text-xs font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-xl shadow-primary/20"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Sign In Now"}
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm font-medium text-muted-foreground">
              New to LogoAI?{" "}
              <Link href="/register" className="text-primary font-black uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                Create free account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">
                Secure Cloud Gateway 2.0 • 2024
            </p>
        </div>
      </div>
    </div>
  );
}
