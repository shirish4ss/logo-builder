import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const format = req.nextUrl.searchParams.get("format") || "svg";

  const mockSvg = `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="#3b82f6" />
      <text x="100" y="115" font-family="Arial" font-size="20" fill="white" text-anchor="middle">LOGO</text>
    </svg>
  `.trim();

  if (format === "svg") {
    return new Response(mockSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Content-Disposition": 'attachment; filename="logo.svg"',
      },
    });
  }

  // In a real app, we would use a library like 'sharp' to convert SVG to PNG/PDF
  // Here we just return a message for other formats
  return new Response(`Mock download for ${format} format`, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": `attachment; filename="logo.${format}"`,
    },
  });
}
