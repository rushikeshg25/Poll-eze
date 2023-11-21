
import {prisma} from "../../../server/db"
import { type NextResponse,type NextRequest} from "next/server"

type PollType={
    pollName:string,
    desc?:string,
    options:string[],   
}

export const POST = async (req:NextRequest,res:NextResponse)=>{

   const {pollName,desc,options}=await req.json() as PollType;
   const newPollData = {
    pollName,
    desc,
    Options: {
      create: options.map(option => ({ /* Map your option data here */ })),
    },
  };
   try {
    const optionArray=
    const newPoll=await prisma.poll.create({
        data:{
            pollName:pollName,
            desc:desc,
        }
    })
   } catch (error) {
    
   }

}