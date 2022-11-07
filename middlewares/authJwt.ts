import jwt from 'jsonwebtoken'

import {ModelUsuario} from '../models/ModelUsuario'
import {ModelRol} from '../models/ModelRol'


import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

//verificamos el token 
export const verifyToken = async(req:NextApiResponse ,res:NextApiRequest ,next )=>{
  try{
 //creamos un herder para ver si el usuario esta logeado
  const token = req.headers["x-access-token"]
  //bota el token en colsola
  console.log(token)
  //si no hay token retorna no hay token
  if(!token) return res.status(403).json({message: "no token provided"})
  //verificamos con jwt
  const decoded = jwt.verify(token, config.SECRET)
  req.userId = decoded.id;
  console.log(decoded)
  // buscamos el usuario por el id 
  const user = await User.findById(req.userId,{password:0})
  //en caso que no exista id retornamos usuario no existe
  if(!user) return res.status(404).json({message: 'no user found'})
  // next = para que siga el codigo
  next()
 }catch(error){
   // si no hay usuario se le dire no autorizado
   return res.status(401).json({message:"Unautorized"})
 }
}

//para que el admin pueda crear actualizar y eliminar
//el alumno y el docente no pueden crear actualizar y eliminar
export const isAdmin = async (req, res, next) => {
  //busca el usuario por el id y lo guardamos en una variable user
  const user = await User.findById(req.userId)   
  //busca por el rol del usuario y lo guardamos en una variable roles
  const roles = await Role.find({_id:{$in: user.roles}})
  // buscamos al usuario y verificamos si es admin para poder darle el permiso de editar crear o eliminar
  for(let i = 0; i < roles.length; i++){
    if(roles[i].name === "admin"){
        next()
      return;

    }
  }
  // en caso que el usuario no sea admin le respondera el mensaje que requiere rol de administrador
  return res.status(403).json({message: "requer Admin role"})
}

//export const isAdmin = async (req, res, next) = {

//}