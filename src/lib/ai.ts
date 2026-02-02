import axios from "axios";

const GOOGLE_GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const STYLE_MODIFIERS: any = {
  "Swiss Minimalist": "clean lines, geometric shapes, grid-based, sans-serif, Helvetica inspired, high contrast",
  "Abstract Modern": "fluid shapes, vibrant gradients, non-representational, sleek, digital art style",
  "Paul Rand inspired": "bold simple shapes, playful geometry, symbolic, iconic, timeless corporate identity",
  "Cyber-Future": "neon accents, glitch effects, tech-noir aesthetic, sharp angles, futuristic typography",
};

const GLOBAL_NEGATIVE_PROMPT = "blurry, low quality, distorted, text, watermark, signature, complex shading, 3d render, photorealistic, messy, crowded";

export async function generateLogoIdeas(businessData: any) {
  const styleModifier = STYLE_MODIFIERS[businessData.stylePreference] || "";

  const prompt = `
    Analyze the following business data and provide 3 unique logo concepts.
    Business Name: ${businessData.businessName}
    Slogan: ${businessData.slogan}
    Industry: ${businessData.industry}
    Description: ${businessData.description}
    Style Preference: ${businessData.stylePreference}
    Style Modifiers: ${styleModifier}

    For each concept, provide:
    1. A name for the concept.
    2. A detailed visual description for an AI image generator. Ensure it avoids: ${GLOBAL_NEGATIVE_PROMPT}.
    3. The reasoning behind the design choice.
  `;

  if (!OPENROUTER_API_KEY) {
    console.warn("OPENROUTER_API_KEY missing. Returning mock data.");
    return [
      {
        name: "Concept 1: Modern Abstract (MOCK)",
        prompt: `A minimalist logo for ${businessData.businessName}, ${businessData.stylePreference} style, using ${businessData.colorPreference} colors. Vector style, white background.`,
        reasoning: "Modern and clean look suitable for the industry."
      },
      {
        name: "Concept 2: Symbolic Growth (MOCK)",
        prompt: `An iconic logo featuring a symbol of growth for ${businessData.businessName}, flat design, ${businessData.colorPreference}.`,
        reasoning: "Focuses on the brand's core values of progress."
      }
    ];
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-flash-1.5-exp",
        messages: [
          {
            role: "system",
            content: "You are a world-class brand identity designer. You provide logo concepts in JSON format."
          },
          {
            role: "user",
            content: prompt + "\nRespond with a JSON array of objects, each having 'name', 'prompt', and 'reasoning' keys."
          }
        ],
        response_format: { type: "json_object" }
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate logo ideas. Please check your API configuration.");
  }
}

export async function enhancePrompt(basePrompt: string) {
  // Logic to make a user prompt better for AI generation
  return `${basePrompt}, high resolution, professional logo design, vector art, 4k, clean lines`;
}

export async function refineLogoWithAI(currentLayers: any[], prompt: string) {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    console.warn("OPENROUTER_API_KEY missing. Simulating refinement.");
    // Simulate some logic
    if (prompt.toLowerCase().includes("blue")) {
      return currentLayers.map(l => l.type === 'path' ? { ...l, fill: '#0000FF' } : l);
    }
    if (prompt.toLowerCase().includes("remove")) {
      return currentLayers.filter(l => !prompt.toLowerCase().includes(l.name.toLowerCase()));
    }
    return currentLayers;
  }

  const systemPrompt = `
    You are a professional logo designer. You receive the current state of a logo as a JSON array of layers.
    The user will provide a refinement request.
    You must return the updated JSON array of layers.
    Only modify existing properties or add/remove layers as requested.
    Layers have: id, name, type (path, text, circle, rect), x, y, fill, stroke, strokeWidth, rotation, opacity, visible, locked.
    Text layers also have 'text' and 'curvature'.
    Rect layers have 'width', 'height'.
    Circle layers have 'radius'.
  `;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-flash-1.5-exp",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Current Layers: ${JSON.stringify(currentLayers)}\nRequest: ${prompt}\nRespond only with the updated JSON array.` }
        ],
        response_format: { type: "json_object" }
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error("AI Refinement Error:", error);
    return currentLayers;
  }
}
