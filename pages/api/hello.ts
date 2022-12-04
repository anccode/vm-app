import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextJS Swagger",
      version: "0.1.0",
    },
    /**
     * @swagger
     * components:
     *   schemas:
     *     nofound:
     *       type: object
     *       properties:
     *         msg:
     *           type: string
     *           desciption: error
     *       example:
     *         msg: error
     *   parameters:
     *     id:
     *       in: path
     *       name: id
     *       required: true
     *       schema:
     *         type: string
     *       description: el id
     */
    /**
     * @swagger
     * tags:
     *   name: asistencias
     *   description: ruta de asistencias
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     asistencias:
     *       type: object
     *       properties:
     *         id_asistencia:
     *           type: string
     *           description: datos
     *         id_plan_participante:
     *           type: number
     *           description: datos
     *         fecha_asis:
     *           type: Date
     *           description: datos
     *         fecha_termino:
     *           type: Date
     *           description: datos
     *         estado:
     *           type: string
     *           description: datos
     *         nota:
     *           type: number
     *           description: datos
     *         horas:
     *           type: number
     *           description: datos
     *         evidencia:
     *           type: string
     *           description: datos
     *         codigo:
     *           type: number
     *           description: datos
     *       required:
     *         - codigo
     *       example:
     *         id_asistencia: 148
     *         id_plan_participante: 11
     *         fecha_asis: 2022-11-30T00:17:20.360Z
     *         fecha_termino: 2022-11-30T00:17:31.424Z
     *         estado: Asistio
     *         nota: null
     *         horas: null
     *         evidencia: null
     *         codigo: 201712131
     */
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
