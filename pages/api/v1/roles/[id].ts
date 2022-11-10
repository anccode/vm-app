import { NextApiRequest, NextApiResponse } from "next";
import { ModelRol } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_rol = [req.query.id];
        const getRol = await ModelRol.findOne({
          where: { id_rol },
        });
        return res.json(getRol);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      return res.status(200).json("put")
    case "DELETE":
      try {
        const id_rol = [req.query.id];
        await ModelRol.destroy({
          where: {
            id_rol,
          },
        });
        return res.send(200);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
