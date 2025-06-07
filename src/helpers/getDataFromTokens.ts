import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import conf from "@/app/api/conf";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, conf.secret_token!);
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
