import { NextApiRequest, NextApiResponse } from "next";
import { ModelPeriodo } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const periodos = await ModelPeriodo.findAll();
        //console.log(attendances);
        return res.json(periodos);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_periodo, nombre, estado } = req.body;
        const newPeriodos= await ModelPeriodo.create({
          id_periodo,
          nombre,
          estado,
        });
        //console.log(newAttendance);
        res.json(newPeriodos);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
