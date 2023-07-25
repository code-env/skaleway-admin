import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId } = auth();

    if (!userId)
      return new NextResponse("don't try to do that", {
        status: 401,
      });

    const { title, image, desc } = body;

    const portfolio = await prismadb.portfolio.create({
      data: {
        description: desc,
        imageUrl: image,
        userId,
        title,
      },
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    console.log("Creating portfolio Error");
    return new NextResponse("Internal server ERoor", {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const post = await prismadb.portfolio.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("getting portfolio Error");
    return new NextResponse("Internal server ERoor", {
      status: 500,
    });
  }
}
