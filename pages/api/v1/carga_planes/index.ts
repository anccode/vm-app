import { NextApiRequest, NextApiResponse } from "next";
import { ModelCargaPlan } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const cargaPlanes = await ModelCargaPlan.findAll();
        //console.log(attendances);
        res.json(cargaPlanes);
        return res.status(200).json("GET carga planes");
      } catch (error) {
        console.log(error);
      }
    case "POST":
      try {
        const {
          id_persona,
          id_periodo,
          id_modalidad,
          id_plan,
          id_ciclo,
          id_grupo,
          estado,
          fecha_inicio,
          fecha_fin,
          horas,
          tolerancia,
        } = req.body;
        const newCargaPlan = await ModelCargaPlan.create({
          id_persona,
          id_periodo,
          id_modalidad,
          id_plan,
          id_ciclo,
          id_grupo,
          estado,
          fecha_inicio,
          fecha_fin,
          horas,
          tolerancia,
        });
        //console.log(newAttendance);
        res.json(newCargaPlan);
        return res.status(200).json("POST CARGA PLANES");
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
