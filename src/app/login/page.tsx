"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Lock, Mail } from "lucide-react";

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
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white relative overflow-hidden px-6">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
        </div>

        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
              <span className="text-white font-black text-xl italic">L</span>
            </div>
            <span className="text-xl font-black tracking-tighter">LOGOAI</span>
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl rounded-[2rem] overflow-hidden">
            <CardHeader className="space-y-1 p-8 pb-4">
              <CardTitle className="text-2xl font-bold text-center tracking-tight">Welcome Back</CardTitle>
              <CardDescription className="text-center text-white/40 font-medium">
                Enter your credentials to access your studio.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 p-8 pt-0">
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
                      placeholder="Password"
                      className="h-14 pl-12 rounded-xl border-white/5 bg-white/5 focus:bg-white/10 focus:ring-blue-500 transition-all text-white placeholder:text-white/20"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link href="#" className="text-xs font-medium text-white/30 hover:text-white transition-colors">
                    Forgot password?
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 p-8 pt-0">
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl shadow-blue-600/20"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Sign In to Dashboard"}
                </Button>
                <div className="text-center text-xs text-white/30 font-medium">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">
                    Create one for free
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>

        <p className="text-center mt-8 text-white/10 text-[10px] uppercase tracking-[0.2em] font-bold">
          Secure Cloud Authentication
        </p>
      </motion.div>
    </div>
  );
}
