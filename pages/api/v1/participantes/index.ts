import { NextApiRequest, NextApiResponse } from "next";
import { ModelParticipante } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const participantes = await ModelParticipante.findAll();
        //console.log(attendances);
        return res.json(participantes);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_persona, codigo, horas_total } = req.body;
        const newParticipante = await ModelParticipante.create({
          id_persona,
          codigo,
          horas_total,
        });
        //console.log(newAttendance);
        res.json(newParticipante);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
