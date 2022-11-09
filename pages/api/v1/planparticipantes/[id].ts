import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_participante } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_plan_participante = [req.query.id];
        const getPlan_participante = await ModelPlan_participante.findOne({
          where: { id_plan_participante },
        });
        res.json(getPlan_participante);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_plan_participante = [req.query.id];
        await ModelPlan_participante.destroy({
          where: {
            id_plan_participante
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
