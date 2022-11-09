import { NextApiRequest, NextApiResponse } from "next";
import { ModelPersona_rol } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_personas_rol = [req.query.id];
        const getPersonas_rol = await ModelPersona_rol.findOne({
          where: { id_personas_rol },
        });
        res.json(getPersonas_rol);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_persona_rol = [req.query.id];
        await ModelPersona_rol.destroy({
          where: {
            id_persona_rol
          },
        });
        res.send(200);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
