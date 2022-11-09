import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_sesion } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const plan_sesion = await ModelPlan_sesion.findAll();
        //console.log(attendances);
        return res.json(plan_sesion);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_plan_sesion, id_carga_plan, detalle, fecha_sesion, fin_sesion, horas, evidencia } = req.body;
        const newPlan_participante= await ModelPlan_sesion.create({
          id_plan_sesion, 
          id_carga_plan, 
          detalle, 
          fecha_sesion, 
          fin_sesion, 
          horas, 
          evidencia,
        });
        //console.log(newAttendance);
        res.json(newPlan_participante);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
