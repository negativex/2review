// app/api/test/route.js
import { NextResponse } from "next/server";
const logger = require("../../logger"); // Import logger

export async function GET(request) {
  console.log("GET request to /api/test"); // Kiểm tra xem route có được gọi không
  logger.info(`Request to /api/test: ${request.method} ${request.url}`);

  try {
    // Simulate some work
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simulate a successful response
    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    logger.error("Error in /api/test:", {
      error: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  // Thêm một route POST để test
  console.log("POST request to /api/test");
  logger.info(`Request to /api/test: ${request.method} ${request.url}`);
  const body = await request.json();
  logger.debug("body", body);
  try {
    // Simulate some work
    await new Promise((resolve) => setTimeout(resolve, 500));
    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    logger.error("Error in /api/test:", {
      error: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
