import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-10 py-6 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">LogoAI</h1>
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-blue-600 font-medium">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="py-24 px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
            Design Your <span className="text-blue-600">Perfect Logo</span> <br />
            Powered by AI in Seconds.
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            The world's most advanced AI-powered logo designer. From business details to a complete branding kit, all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register">
              <Button size="lg" className="px-10">Start Creating Now</Button>
            </Link>
            <Button variant="outline" size="lg" className="px-10">View Samples</Button>
          </div>

          <div className="mt-20 relative">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl overflow-hidden h-96 flex items-center justify-center">
              <p className="text-gray-400 text-lg italic">Mockup of Modern Dashboard UI will be here...</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
            {[
              { title: "AI Generation", desc: "Advanced algorithms to understand your business and create unique concepts." },
              { title: "Vector SVG Export", desc: "Download logos in high-quality SVG format, ready for any size and media." },
              { title: "Branding Kit", desc: "Automatically generate social media posts, profile pictures and brand guidelines." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; 2025 LogoAI. All rights reserved. Built with precision for innovators.
      </footer>
    </div>
  );
}
