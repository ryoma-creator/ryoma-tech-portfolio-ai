import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/lib/systemPrompt";
import type { ChatApiRequest, ChatApiResponse, ChatApiError } from "@/types";

// OpenAIクライアント（APIキーはサーバーサイドのみ）
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
  request: NextRequest
): Promise<NextResponse<ChatApiResponse | ChatApiError>> {
  // リクエストボディを解析
  let body: ChatApiRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json({ error: "Messages are required" }, { status: 400 });
  }

  // APIキーの確認
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    // 直近10件のメッセージのみ送信（トークン節約）
    const recentMessages = body.messages.slice(-10);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 500,
      temperature: 0.7,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...recentMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    });

    const content = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
    return NextResponse.json({ content });
  } catch (err) {
    console.error("OpenAI API error:", err);
    return NextResponse.json({ error: "Failed to get response" }, { status: 502 });
  }
}
