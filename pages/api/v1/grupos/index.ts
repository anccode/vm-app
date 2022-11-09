import { NextApiRequest, NextApiResponse } from "next";
import { ModelGrupo } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const grupos = await ModelGrupo.findAll();
        //console.log(attendances);
        return res.json(grupos);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { nombre, estado, alias } = req.body;
        const newEscuelaSucur = await ModelGrupo.create({
          nombre,
          estado,
          alias,
        });
        //console.log(newAttendance);
        res.json(newEscuelaSucur);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
