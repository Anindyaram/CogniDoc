import { z } from 'zod';
import { privateProcedure, procedure, router } from './trpc';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';

export const appRouter = router({
    authCallback: procedure.query(async ()=>{
        const {getUser} = getKindeServerSession();
        const user = await getUser();
        if(!user?.id || !user.email){
            throw new TRPCError({code:'UNAUTHORIZED'})
        }

        //Find user is in the database
        const dbUser = await db.user.findFirst({
            where:{
                id:user.id
            }
        });
        if(!dbUser){
            //create user in db
            await db.user.create({
                data:{
                    id:user.id,
                    email:user.email
                }
            })
        }

        return {success:true}
    }),

    getUserFiles:privateProcedure.query(async({ctx})=>{
        const {userId, user} = ctx;
        return await db.file.findMany({
            where:{
                userId
            }
        })
    }),

    getFile:privateProcedure.input(z.object({key:z.string()})).mutation(async ({ctx,input})=>{
            const {userId ,user} = ctx
        
            const file = await db.file.findFirst({
                where:{
                    key:input.key,
                    userId
                },
            })

            if(!file){
                throw new TRPCError({code:'NOT_FOUND',message:'File not found'})
            }
            return file
    }),

    deleteFile:privateProcedure.input(z.object({id:z.string(), name:z.string()})).mutation(async ({ctx ,input})=>{
        const { userId } = ctx;
        const file = await db.file.findFirst({
            where:{
                id:input.id,
                userId,
            }
        })

        if(!file) throw new TRPCError({code:'NOT_FOUND',message:'File not found'});

        await db.file.delete({
            where:{
                id:input.id,
                userId,
            }
        })

        return file
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;