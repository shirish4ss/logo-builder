"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Lock, Mail, User, Sparkles, CheckCircle2, Globe } from "lucide-react";

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
        router.push("/login");
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground overflow-hidden">
      {/* Right Side: Visual Experience (Flipped for variety) */}
      <div className="hidden lg:flex flex-1 relative bg-primary overflow-hidden items-center justify-center p-24 order-last">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-primary/80 to-transparent"></div>

        <div className="relative z-10 space-y-8 max-w-lg">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-primary-foreground text-primary rounded-[2rem] flex items-center justify-center shadow-2xl"
            >
                <Globe size={40} />
            </motion.div>

            <div className="space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-black text-primary-foreground tracking-tighter leading-tight"
                >
                    Start your brand <br />
                    <span className="opacity-50">in 60 seconds.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-primary-foreground/60 text-lg font-medium"
                >
                    Create, edit, and launch with professional vector quality logos and full branding kits.
                </motion.p>
            </div>

            <div className="space-y-4">
                {[
                    "Award-winning SVG Engine",
                    "Unlimited design iterations",
                    "Full commercial rights"
                ].map((text, i) => (
                    <motion.div
                        key={text}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center space-x-3 text-primary-foreground"
                    >
                        <CheckCircle2 size={18} className="opacity-50" />
                        <span className="font-bold text-sm tracking-tight">{text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      {/* Left Side: Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative">
        <div className="absolute top-8 left-8 lg:left-24">
            <Link href="/" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
            </Link>
        </div>

        <div className="max-w-md w-full mx-auto space-y-10">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic text-foreground mb-2">Join LogoAI</h1>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Your brand journey starts here</p>
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
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                        placeholder="John Doe"
                        className="h-14 pl-12 rounded-2xl border-border bg-muted/50 focus:bg-background focus:ring-primary transition-all font-medium"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
              </div>

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
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Secure Password</label>
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
              {loading ? <Loader2 className="animate-spin" /> : "Create Free Account"}
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm font-medium text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-black uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">
                Protected by Enterprise Encryption • 2024
            </p>
        </div>
      </div>
    </div>
  );
}
