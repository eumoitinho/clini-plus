import { NextResponse } from "next/server";

import { generateTwilioToken } from "@/lib/twilio/generate-token";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const identity = searchParams.get("identity") ?? "guest";
  const room = searchParams.get("room") ?? undefined;

  try {
    const result = generateTwilioToken(identity, room);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate Twilio token";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
