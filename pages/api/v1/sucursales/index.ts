import { NextApiRequest, NextApiResponse } from "next";
import { ModelSucursal } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const sucursales = await ModelSucursal.findAll();
        //console.log(attendances);
        return res.json(sucursales);
        //res.status(200).json("GET docentes");
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      try {
        const { id_sucursal, nombre, estado } = req.body;
        const newSucursal= await ModelSucursal.create({
          id_sucursal, 
          nombre, 
          estado,
        });
        //console.log(newAttendance);
        res.json(newSucursal);
        return res.status(200).json("POST GRUPOS"); //
      } catch (error) {
        return res.status(500).json({ message:error})
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
