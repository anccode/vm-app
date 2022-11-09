import { NextApiRequest, NextApiResponse } from "next";
import { ModelVinculacion } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const vinculaciones = await ModelVinculacion.findAll();
        //console.log(attendances);
        return res.json(vinculaciones);
        //res.status(200).json("GET docentes");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_vinculacion, nombre, detalle, tipo, archivo, estado } = req.body;
        const newVinculacion= await ModelVinculacion.create({
          id_vinculacion, 
          nombre, 
          detalle, 
          tipo, 
          archivo, 
          estado,
        });
        //console.log(newAttendance);
        res.json(newVinculacion);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
