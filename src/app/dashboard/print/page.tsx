"use client";

import React, { useState } from 'react';
import { mockPrintProducts, createPrintOrder } from '@/lib/print-api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Truck, Printer } from 'lucide-react';

export default function PrintDashboard() {
  const [loading, setLoading] = useState<string | null>(null);
  const [ordered, setOrdered] = useState<string | null>(null);

  const handleOrder = async (productId: string) => {
    setLoading(productId);
    try {
        const res = await createPrintOrder('demo-logo-id', productId, {
            address: { name: 'John Doe', city: 'Mumbai', country: 'IN' },
            logoUrl: 'https://example.com/logo.svg'
        });
        if (res.success) {
            setOrdered(res.orderId);
        }
    } finally {
        setLoading(null);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-black tracking-tight mb-2">Print & Merch Studio</h1>
        <p className="text-gray-500 dark:text-gray-400">Bring your brand to life with high-quality physical products.</p>
      </div>

      {ordered && (
        <div className="mb-10 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-4">
            <CheckCircle2 className="text-green-600 w-8 h-8" />
            <div>
                <h3 className="font-bold text-green-800 dark:text-green-300">Order Placed Successfully!</h3>
                <p className="text-green-700 dark:text-green-400 text-sm">Your order ID is {ordered}. Tracking details will be sent via email.</p>
            </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockPrintProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-xl bg-white dark:bg-gray-900 group">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center p-12">
               {/* In a real app, this would be a real product image with the logo overlaid */}
               <div className="w-full h-full border-4 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center relative">
                   <Printer className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform" />
                   <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                       Preview Ready
                   </div>
               </div>
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Premium quality {product.type} with your brand logo.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-blue-600">${product.price.toFixed(2)}</span>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Truck className="w-3 h-3" />
                    Free Worldwide Shipping
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full h-12 text-lg font-bold"
                onClick={() => handleOrder(product.id)}
                disabled={loading === product.id}
              >
                {loading === product.id ? 'Processing...' : 'Order Print'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Printer className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Industrial Grade Printing</h4>
              <p className="text-gray-500 text-sm">We use the latest DTG and sublimation techniques for vibrant, long-lasting results.</p>
          </div>
          <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fast Global Logistics</h4>
              <p className="text-gray-500 text-sm">Our 15+ fulfillment centers worldwide ensure your merch reaches you in record time.</p>
          </div>
          <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Quality Guaranteed</h4>
              <p className="text-gray-500 text-sm">Not happy with the print? We offer a 100% money-back guarantee or a free reprint.</p>
          </div>
      </div>
    </div>
  );
}
