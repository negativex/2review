import { connectToDatabase } from "../../mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const metadata = {
  title: "2Review: API section",
  description:
    "Trang web review về phim của nhóm 2 thực hiện cho đồ án môn học Lập Trình WEB",
};

export async function GET() {
  const { database } = await connectToDatabase();
  const collection = database.collection("media");
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
      .limit(12)
      .toArray();
    return NextResponse.json({ results }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const mediaData = body.formData;

//     await Media.create(mediaData);

//     return NextResponse.json({ message: "Media added" }, { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }
