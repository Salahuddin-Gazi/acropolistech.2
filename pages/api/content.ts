import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { fileName } = req.query;
    console.log(fileName);
    console.log("from api");

    res.status(200).json("found");
  } catch (error) {
    res.status(404).json("not found");
  }
};
