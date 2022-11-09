import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_sesion } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_plan_sesion = [req.query.id];
        const getPlan_sesion = await ModelPlan_sesion.findOne({
          where: { id_plan_sesion },
        });
        res.json(getPlan_sesion);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_plan_sesion = [req.query.id];
        await ModelPlan_sesion.destroy({
          where: {
            id_plan_sesion
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
