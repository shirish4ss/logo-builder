export interface FontPairing {
  name: string;
  heading: string;
  body: string;
  style: string;
}

export const FONT_PAIRINGS: FontPairing[] = [
  {
    name: "Classic Modern",
    heading: "Playfair Display",
    body: "Source Sans Pro",
    style: "Vintage"
  },
  {
    name: "Swiss Precision",
    heading: "Inter",
    body: "Roboto Mono",
    style: "Swiss Minimalist"
  },
  {
    name: "Tech Future",
    heading: "Orbitron",
    body: "Rajdhani",
    style: "Cyber-Future"
  },
  {
    name: "Elegant Serif",
    heading: "Libre Baskerville",
    body: "Montserrat",
    style: "Vintage Scribe"
  },
  {
    name: "Bauhaus Sharp",
    heading: "Josefin Sans",
    body: "Open Sans",
    style: "Bauhaus"
  },
  {
    name: "Vibrant Abstract",
    heading: "Poppins",
    body: "Lato",
    style: "Abstract Modern"
  }
];

export function getFontPairingsByStyle(style: string): FontPairing[] {
  return FONT_PAIRINGS.filter(p => p.style === style || style === "");
}
