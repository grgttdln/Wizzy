import Groq from "groq-sdk";
import { NextResponse } from "next/server";

// Initialize the Groq SDK with your API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    // Parse the request body
    const data = await req.json();
    const { messages, systemPrompt } = data;

    if (!systemPrompt || typeof systemPrompt !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing systemPrompt" },
        { status: 400 }
      );
    }

    const prompt = `Generate a list of 10 question and answer pairs in JSON format, focusing on basic concepts in ${systemPrompt}. Provide a JSON object with a key 'questions' containing a list of dictionaries. Each dictionary should have a 'question' and an 'answer' key. Avoid additional text.`;

    console.log("Prompt:", prompt);

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: prompt,
        },
        ...messages,
      ],
      model: "llama3-8b-8192",
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ error: "No content returned" }, { status: 500 });
    }

    // console.log("Raw Content:", content);

    try {
      const cleanContent = JSON.parse(content); // Attempt to parse JSON
      return NextResponse.json(cleanContent);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError.message);
      return NextResponse.json({ error: "Invalid JSON format returned" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
