import { NextApiRequest, NextApiResponse } from "next";
import { ModelCiclo } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_ciclo = [req.query.id];
        const getCiclo = await ModelCiclo.findOne({
          where: { id_ciclo },
        });
        res.json(getCiclo);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({message: "OK"});
    case "DELETE":
      try {
        const id_ciclo = [req.query.id];

        await ModelCiclo.destroy({
          where: {
            id_ciclo,
          },
        });
        res.send(200);
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
