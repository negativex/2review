import { connectToDatabase } from "../../../mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const metadata = {
  title: "2Review: API section",
  description:
    "Trang web review về phim của nhóm 2 thực hiện cho đồ án môn học Lập Trình WEB",
};

export async function GET(request, { params }) {
  const { database } = await connectToDatabase();
  const { id } = params;
  try {
    const results = await database
      .collection("media")
      // .find({})
      //   .findOne({ _id: id })
      .find({ _id: new ObjectId(id) })
      // .match({_id: : "6579bc8cebe8f5ace4af4052"})
      .project({
        title: 1,
        usr_score: 1,
        adm_score: 1,
        usr_count: 1,
        adm_count: 1,
        img: 1,
        img_sm: 1,
        summary: 1,
        trailer: 1,
      })
      // .limit(10)
      .toArray();
    return NextResponse.json({ results }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
export async function PUT(req, { params }) {
  const { database } = await connectToDatabase();
  const { id } = params;
  try {
    const data = await req.json();
    const result = await database.collection("media").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          adm_score: data.putnewData.adm_score,
          usr_score: data.putnewData.usr_score,
          adm_count: data.putnewData.adm_count,
          usr_count: data.putnewData.usr_count,
        },
      }
    );
    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
