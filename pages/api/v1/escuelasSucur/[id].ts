import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela_sucursal } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_escuela_sucursal = [req.query.id];
        const getEscuelaSucur = await ModelEscuela_sucursal.findOne({
          where: { id_escuela_sucursal },
        });
        return res.json(getEscuelaSucur);
      } catch (error) {
        return console.log(error);
      }
    case "PUT":
      try {
        const id_escuela_sucursal = [req.query.id];
        const { id_escuela, id_sucursal, estado } = req.body;
        const newEscuelaSucur = await ModelEscuela_sucursal.update(
          { id_escuela, id_sucursal, estado },
          { where: { id_escuela_sucursal } }
        );
        const EscuelaSucur = await ModelEscuela_sucursal.findOne({
          where: { id_escuela },
        });
        res.json(EscuelaSucur);
        return res.status(200);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      try {
        const id_escuela_sucursal = [req.query.id];

        await ModelEscuela_sucursal.destroy({
          where: {
            id_escuela_sucursal,
          },
        });
        return res.send(200);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
