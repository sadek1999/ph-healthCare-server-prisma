import jwt, {  JwtPayload, Secret } from "jsonwebtoken";

const generateToken = (payload: any, secret: Secret, expiresIn: string ) => {
  const token = jwt.sign(payload, secret,{ algorithm:"HS512" ,expiresIn});
  return token
  ;

};

const verifyToken=(token:any, secret:Secret)=>{
  const result=jwt.verify(token ,secret) as JwtPayload;
  return result;

}


export const jwtHelper={
    generateToken,
    verifyToken,
}