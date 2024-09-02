import Groq from "groq-sdk";
import { NextResponse } from "next/server";

// Next.js automatically loads environment variables from .env files
const groq = new Groq({
  apiKey: "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",
});

export async function POST(req) {
  const data = await req.json();
  const { messages, systemPrompt } = data;

  let response;
  console.log(...messages, systemPrompt);
  try {
    response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Generate a list of 10 question and answer pairs in JSON format, focusing on basic concepts in plants. Provide a JSON object with a key 'questions' containing a list of dictionaries. Each dictionary should have a 'question' and an 'answer' key. Avoid additional text.",
        },
        ...messages,
      ],
      model: "llama3-8b-8192",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const content = response.choices[0]?.message?.content;
  if (!content) {
    return NextResponse.json({ error: "No content returned" }, { status: 500 });
  }

  try {
    const cleanContent = JSON.parse(content);
    return NextResponse.json(cleanContent);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse content" },
      { status: 500 }
    );
  }
}
