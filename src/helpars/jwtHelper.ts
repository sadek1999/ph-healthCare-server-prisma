import jwt, {  Secret } from "jsonwebtoken";

const generateToken = (payload: any, secret: Secret, expiresIn: string ) => {
  const token = jwt.sign(payload, secret,{ algorithm:"HS512" ,expiresIn});
  return token
  ;

};


export const jwtHelper={
    generateToken,
}