import { NextApiRequest, NextApiResponse } from "next";
import { ModelParticipante } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_participantes = [req.query.id];
        const getParticipantes = await ModelParticipante.findOne({
          where: { id_participantes },
        });
        res.json(getParticipantes);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_participantes = [req.query.id];
        await ModelParticipante.destroy({
          where: {
            id_participantes
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
