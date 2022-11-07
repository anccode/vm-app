import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_escuela = [req.query.id];
        const getEscuela = await ModelEscuela.findOne({
          where: { id_escuela },
        });
        res.json(getEscuela);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({message: "put"});
    case "DELETE":
      try {
        const id_escuela = [req.query.id];

        await ModelEscuela.destroy({
          where: {
            id_escuela,
          },
        });
        res.send(200);
      } catch (error) {
        return res.status(500).json({message: error});
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
