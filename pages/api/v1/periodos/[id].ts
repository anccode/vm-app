import { NextApiRequest, NextApiResponse } from "next";
import { ModelPeriodo } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_periodos = [req.query.id];
        const getPeriodos = await ModelPeriodo.findOne({
          where: { id_periodos },
        });
        res.json(getPeriodos);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_periodo = [req.query.id];
        await ModelPeriodo.destroy({
          where: {
            id_periodo
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
