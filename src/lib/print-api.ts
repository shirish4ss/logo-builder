export interface PrintProduct {
    id: string;
    name: string;
    type: 'tshirt' | 'hoodie' | 'mug' | 'poster';
    price: number;
    currency: string;
    thumbnail: string;
}

export const mockPrintProducts: PrintProduct[] = [
    { id: 'ts-01', name: 'Premium Cotton T-Shirt', type: 'tshirt', price: 25.00, currency: 'USD', thumbnail: '/mockups/tshirt.png' },
    { id: 'hd-01', name: 'Urban Hoodie', type: 'hoodie', price: 45.00, currency: 'USD', thumbnail: '/mockups/hoodie.png' },
    { id: 'mg-01', name: 'Ceramic Branding Mug', type: 'mug', price: 15.00, currency: 'USD', thumbnail: '/mockups/mug.png' },
];

export async function createPrintOrder(logoId: string, productId: string, details: any) {
    console.log(`Creating print order for logo ${logoId} on product ${productId}`, details);

    // In a real implementation, this would call Printful or Printrove API
    // Example:
    /*
    const response = await fetch('https://api.printful.com/orders', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}` },
        body: JSON.stringify({
            recipient: details.address,
            items: [{
                variant_id: productId,
                files: [{ url: details.logoUrl }]
            }]
        })
    });
    return response.json();
    */

    return {
        success: true,
        orderId: 'ORD-' + Math.random().toString(36).substr(2, 9),
        estimatedDelivery: '5-7 business days'
    };
}
