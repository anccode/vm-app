import { NextApiRequest, NextApiResponse } from "next";
import { ModelAsistencia } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id_asistencia = [req.query.id];
        const getAttendance = await ModelAsistencia.findOne({
          where: { id_asistencia },
        });
        res.json(getAttendance);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      try {
        const id_asistencia  = req.body.id;
        const {
          newid_plan_participante,
          newfecha_sesion,
          newfecha_asis,
          newfecha_termino,
          newestado,
          newnota,
          newhoras,
          //id_asistencia
        } = req.body;
        //const attendance = await ModelAsistencia.findByPk(id_asistencia);
        await ModelAsistencia.update({
          id_plan_participante:newid_plan_participante,
          fecha_sesion:newfecha_sesion,
          fecha_asis:newfecha_asis,
          fecha_termino:newfecha_termino,
          estado:newestado,
          nota:newnota,
          horas:newhoras
        },
        {where: {id : id_asistencia}}
        )
        res.json(newid_plan_participante,)
        return res.status(200).json("put attendances");
      } catch (error) {
        return res.json(500);
      }
    case "DELETE":
      try {
        const id_asistencia = [req.query.id];

        await ModelAsistencia.destroy({
          where: {
            id_asistencia,
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
