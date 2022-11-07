import { NextApiRequest, NextApiResponse } from "next";
import { ModelAsistencia } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const attendances = await ModelAsistencia.findAll();
        //console.log(attendances);
        res.json(attendances);
        return res.status(200).json("GET attendances");
      } catch (error) {
        console.log(error);
      }
    case "POST":
      try {
        const {
          id_plan_participante,
          fecha_sesion,
          fecha_asis,
          fecha_termino,
          estado,
          nota,
          horas,
          evidencia,
        } = req.body;
        const newAttendance = await ModelAsistencia.create({
          id_plan_participante,
          fecha_sesion,
          fecha_asis,
          fecha_termino,
          estado,
          nota,
          horas,
          evidencia,
        });
        //console.log(newAttendance);
        res.json(newAttendance);
        return res.status(200).json("POST attendances");
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
