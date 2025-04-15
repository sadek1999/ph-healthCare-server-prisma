import { Server } from "http";
import app from "./app";
import config from "./config";



const port =3001;

async function main() {
   const server:Server= app.listen(port,()=>{
    console.log('server is run on port',config.prot);
   })
}
main();