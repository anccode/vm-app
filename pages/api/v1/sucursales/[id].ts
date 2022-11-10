import { NextApiRequest, NextApiResponse } from "next";
import { ModelSucursal } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_sucursal = [req.query.id];
        const getSucursal = await ModelSucursal.findOne({
          where: { id_sucursal },
        });
        return res.json(getSucursal);
      } catch (error) {
        return res.status(500).json({message:error})
      }
    case "PUT":
      return res.status(200).json({ message: "put" });
    case "DELETE":
      try {
        const id_sucursal = [req.query.id];
        await ModelSucursal.destroy({
          where: {
            id_sucursal
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
