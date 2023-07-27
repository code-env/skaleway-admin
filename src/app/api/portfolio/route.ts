import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId } = auth();

    if (!userId)
      return new NextResponse("Nigga you're unauthorized", {
        status: 401,
      });

    const { title, image, description, variant, githubLink, demoLink } = body;

    if (!title || !image || !description) {
      return new NextResponse("This fields are required nigga", {
        status: 400,
      });
    }

    if (variant === "Web Development") {
      if (!githubLink || !demoLink) {
        return new NextResponse("This fields are required nigga", {
          status: 400,
        });
      }
    }

    const portfolio = await prismadb.portfolio.create({
      data: {
        description: description,
        imageUrl: image,
        userId,
        title,
        variant,
        githubLink,
        demoLink,
      },
    });

    return NextResponse.json(portfolio);
  } catch (error: any) {
    console.log("Creating portfolio Error");
    console.log(error.message);
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
