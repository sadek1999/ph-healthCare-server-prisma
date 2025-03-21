import { Server } from "http";
import app from "./app";


const port =3001;

async function main() {
   const server:Server= app.listen(port,()=>{
    console.log('server is run on port',port);
   })
}
main();