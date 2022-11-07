import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela_sucursal } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_escuela_sucursa = [req.query.id];
        const getEscuelaSucur = await ModelEscuela_sucursal.findOne({
          where: { id_escuela_sucursa },
        });
        res.json(getEscuelaSucur);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({message: "put"});
    case "DELETE":
      try {
        const id_escuela_sucursa = [req.query.id];

        await ModelEscuela_sucursal.destroy({
          where: {
            id_escuela_sucursa,
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
