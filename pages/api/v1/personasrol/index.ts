import { NextApiRequest, NextApiResponse } from "next";
import { ModelPersona_rol } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const personas_rol = await ModelPersona_rol.findAll();
        //console.log(attendances);
        return res.json(personas_rol);
        //res.status(200).json("GET docentes");
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_persona_rol, id_persona, id_rol, estado } = req.body;
        const newPersonas_rol = await ModelPersona_rol.create({
          id_persona_rol,
          id_persona,
          id_rol,
          estado,
        });
        //console.log(newAttendance);
        res.json(newPersonas_rol);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
