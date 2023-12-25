import { connectToDatabase } from "../../mongo/mongodb";
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
      .limit(12)
      .toArray();
    return NextResponse.json({ results }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  const { database } = await connectToDatabase();
  try {
    const data = await req.json();
    const score = parseInt(data.postData.score, 10);
    const result = await database.collection("review").insertOne({
      title: data.postData.title,
      body: data.postData.body,
      score: score,
      media_id: data.postData.media_id,
      admin_role: false,
      published_on: data.postData.published_on,
    });

    return NextResponse.json({ message: "data Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
