import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_participante } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const plan_participante = await ModelPlan_participante.findAll();
        //console.log(attendances);
        return res.json(plan_participante);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_plan_participante, id_carga_plan, id_persona, certificado, estado, horas, } = req.body;
        const newPlan_participante= await ModelPlan_participante.create({
          id_plan_participante, 
          id_carga_plan, 
          id_persona, 
          certificado, 
          estado, 
          horas,
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
