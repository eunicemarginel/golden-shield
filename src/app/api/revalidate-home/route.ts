import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST() {
  revalidatePath("/", "page");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
