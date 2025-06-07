import { getDataFromToken } from "../../../../helpers/getDataFromTokens";

import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";
import { connect } from "../../../dbConfig/dbConfig";

connect();
console.log("connected to db successfully");

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    console.log("user Id", userId);

    const user = await User.findOne({ _id: userId }).select("-password");
    console.log("user", user);
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
