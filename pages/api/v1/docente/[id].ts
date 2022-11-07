import { NextApiRequest, NextApiResponse } from "next";
import { ModelDocente } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_persona = [req.query.id];
        const getDocente = await ModelDocente.findOne({
          where: { id_persona },
        });
        res.json(getDocente);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({message: "OK"});
    case "DELETE":
      try {
        const id_persona = [req.query.id];

        await ModelDocente.destroy({
          where: {
            id_persona,
          },
        });
        res.send(200);
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
