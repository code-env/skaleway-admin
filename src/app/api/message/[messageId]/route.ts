import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

interface messageProps {
  messageId: string;
}

export async function GET(req: Request, { params }: { params: messageProps }) {
  try {
    const { messageId } = params;

    const message = await prismadb.messages.findFirst({
      where: {
        id: messageId,
      },
    });

    if (!message) {
      return new NextResponse("Message not found", {
        status: 404,
      });
    }

    return NextResponse.json(message);
  } catch (error: any) {
    console.log("ERROR HAPPENED WHEN GET MESSAGE BY ID");
    console.log(error.message);
    return new NextResponse("internal server error", {
      status: 500,
    });
  }
}
