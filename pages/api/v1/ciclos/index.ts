import { NextApiRequest, NextApiResponse } from "next";
import { ModelCiclo } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const ciclos = await ModelCiclo.findAll();
        //console.log(attendances);
        res.json(ciclos);
        return res.status(200).json("GET ciclos");
      } catch (error) {
        console.log(error);
      }
    case "POST":
      try {
        const {
          id_ciclo,
          nombre,
          alias
        } = req.body;
        const newCiclo = await ModelCiclo.create({id_ciclo,nombre, alias });
        //console.log(newAttendance);
        res.json(newCiclo);
        return res.status(200).json("POST newCargaPlan");
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
