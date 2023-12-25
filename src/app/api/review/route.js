import { connectToDatabase } from "../../mongo/mongodb";
import { NextResponse } from "next/server";
export const metadata = {
  title: "2Review: API section",
  description:
    "Trang web review về phim của nhóm 2 thực hiện cho đồ án môn học Lập Trình WEB",
};
export async function GET() {
  const { database } = await connectToDatabase();
  try {
    const results = await database
      .collection("review")
      .find({})
      // .find({ _id: new ObjectId("6579bc8cebe8f5ace4af4052") })
      .project({
        _id: 1,
        admin_role: 1,
        // title: 1,
        // usr_id: 1,
        // admin_role: 1,
        // body: 1,
        // score: 1,
        // created_at: 1,
      })
      // .limit(4)
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
