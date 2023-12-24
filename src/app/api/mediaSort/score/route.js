import { connectToDatabase } from "../../../mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const { database } = await connectToDatabase();
  try {
    const results = await database
      .collection("media")
      .find({})
      // .find({ _id: new ObjectId("6579bc8cebe8f5ace4af4052") })
      .project({
        title: 1,
        adm_score: 1,
        img_sm: 1,
        tags: 1,
        img: 1,
        trailer: 1,
      })
      .sort({ adm_score: -1 })
      .limit(8)
      .toArray();
    return NextResponse.json({ results }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
