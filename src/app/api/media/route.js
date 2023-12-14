// import Media from "@/app/models/media";
import { connectToDatabase } from "../../mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const media = await Media.find();
//     return NextResponse.json({ media }, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }

export async function GET() {
  const { database } = await connectToDatabase();
  const collection = database.collection("media");
  try {
    const results = await database
      .collection("media")
      // .find({})
      .find({ _id: new ObjectId("6579bc8cebe8f5ace4af4052") })
      // .match({_id: : "6579bc8cebe8f5ace4af4052"})
      .project({
        title: 1,
        usr_score: 1,
        adm_score: 1,
        usr_count: 1,
        adm_count: 1,
      })
      // .limit(10)
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
