
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Lucca's Fine Italian Restaurant in Helena, Montana.
Your goal is to provide elegant, helpful, and accurate information to guests.

Business Details:
- Location: ${BUSINESS_INFO.address}
- Phone: ${BUSINESS_INFO.phone}
- Hours: ${BUSINESS_INFO.hours}
- Concept: Fine dining, 54-seat intimate setting, relaxed yet refined.
- Reservations: Highly recommended. Guests can now book online via our new reservation system on the website!
- Large Parties: For parties larger than 8, please call us directly at ${BUSINESS_INFO.phone}.
- Capacity: 54 seats.
- Accolades: Awarded "Best Restaurant in Montana" (2015-2017) by Business Insider.
- Menu Highlights: ${MENU_ITEMS.map(item => `${item.name} (${item.price}): ${item.description}`).join(', ')}

Guidelines:
1. Be polite and professional.
2. If asked about reservations, encourage using the online system or calling ${BUSINESS_INFO.phone}.
3. If asked about menu items not listed, explain that the menu is seasonal and changes frequently.
4. Keep responses concise.
`;

export async function askLuccaAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us at 406-457-8311 for assistance.";
  }
}
