export function authorize(...roles:string[]) {

    return async function(request,reply){

        const user=request.user as any;

        if(!roles.includes(user.role)){

            return reply.status(403).send({

                success:false,

                message:"Forbidden"

            });

        }

    }

}