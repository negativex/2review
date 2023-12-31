import { connectToDatabase } from "../../../mongo/mongodb";
// import { ObjectId } from "mongodb";
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
      .collection("review")
      .find({ media_id: id })
      .project({
        _id: 1,
        admin_role: 1,
        // title: 1,
        // usr_id: 1,
        // admin_role: 1,
        // body: 1,
        score: 1,
        // media_id: 1,
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
