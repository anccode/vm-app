import { NextApiRequest, NextApiResponse } from "next";
import { ModelCargaPlan } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_carga_plan = [req.query.id];
        const getCargaPlan = await ModelCargaPlan.findOne({
          where: { id_carga_plan },
        });
        res.json(getCargaPlan);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({message: "OK"});
    case "DELETE":
      try {
        const id_carga_plan = [req.query.id];

        await ModelCargaPlan.destroy({
          where: {
            id_carga_plan,
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
