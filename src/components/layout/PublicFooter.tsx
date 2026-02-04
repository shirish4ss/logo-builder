"use client";

import Link from "next/link";

export const PublicFooter = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-20 px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="text-xl font-black dark:text-white">LogoAI</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            Empowering the next generation of brands with award-winning AI-driven design tools.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 dark:text-white">Product</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
            <li><Link href="/showcase" className="hover:text-blue-600 transition-colors">Showcase</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 dark:text-white">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 dark:text-white">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 LogoAI Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-600 transition-colors">Twitter</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-blue-600 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
