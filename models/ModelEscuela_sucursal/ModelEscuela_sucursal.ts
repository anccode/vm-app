import { sequelize } from "../../db";
import { Model, DataTypes } from "sequelize";
import { ModelEscuela_sucursalT } from ".";
import { ModelCargaPlan } from "../ModelCargaPlan";

export class ModelEscuela_sucursal extends Model<any, ModelEscuela_sucursalT> {}

ModelEscuela_sucursal.init(
  {
    id_escuela_sucursal: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_escuela: { type: DataTypes.NUMBER},
    id_sucursal: { type: DataTypes.NUMBER },
    estado: { type: DataTypes.CHAR(20) },
  },
  { sequelize, modelName: "escuela_sucursal", timestamps: false }
);


