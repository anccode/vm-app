import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela_sucursal } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const escuelasSucur = await ModelEscuela_sucursal.findAll();
        return res.json(escuelasSucur);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_escuela, id_sucursal, estado } = req.body;
        const newEscuelaSucur = await ModelEscuela_sucursal.create({
          id_escuela,
          id_sucursal,
          estado,
        });
        res.json(newEscuelaSucur);
        return res.status(200).json("POST escuelaSucursal"); //
      } catch (error) {
        return res.status(500).json({ message:error});
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
