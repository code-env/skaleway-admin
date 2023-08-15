import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return new NextResponse("This fields are required", {
        status: 400,
      });
    }

    const newMessage = await prismadb.messages.create({
      data: {
        email,
        firstName,
        lastName,
        message,
      },
    });

    if (newMessage)
      return new NextResponse("Message successfully sent!", {
        status: 200,
      });
  } catch (error: any) {
    console.log("ERROR WHILE SENDING/CREATING NEW MESSAGE");
    console.log(error.nessage);
    return new NextResponse("Internal server error!", {
      status: 500,
    });
  }
}

//geting all the messages from the server
export async function GET() {
  try {
    const messages = await prismadb.messages.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(messages);
  } catch (error: any) {
    console.log("ERROR WHILE GETTING ALL MESSAGES FROM THE SERVER");
    console.log(error.message);
    return new NextResponse("internal server error", {
      status: 500,
    });
  }
}
