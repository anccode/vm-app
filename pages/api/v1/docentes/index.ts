import { NextApiRequest, NextApiResponse } from "next";
import { ModelDocente } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const docentes = await ModelDocente.findAll();
        //console.log(attendances);
        return res.json(docentes);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_persona,codigo } = req.body;
        const newDocente = await ModelDocente.create({
          id_persona,codigo,
        });
        //console.log(newAttendance);
        res.json(newDocente);
        return res.status(200).json("POST DOCENTE");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
