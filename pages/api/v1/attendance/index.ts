import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json("GET attendances");
    case "POST":
      return res.status(200).json("POST attendances");
    case "PUT":
      return res.status(200).json("PUT attendances");
    case "DELETE":
      return res.status(200).json("DELETE attendances");
  }
};
