import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_medio } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_plan = [req.query.id];
        const getPlan = await ModelPlan_medio.findOne({
          where: { id_plan },
        });
        res.json(getPlan);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_plan = [req.query.id];
        await ModelPlan_medio.destroy({
          where: {
            id_plan
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
