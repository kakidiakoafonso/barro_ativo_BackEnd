import {sign} from 'jsonwebtoken'

export async function usuarioTokenGenerator(usuario)
{
    const token = sign(
        {
            usuario:usuario
        },
        process.env.JWT_SECRET,
        {
            subject:JSON.stringify(usuario),
            expiresIn: '10d'
        })

        if(token)
            return {status:"OK", data:token}
        else
            return {status:"error", msg:"Server error, cant create token"}

}
export async function comercioTokenGenerator(comercio)
{
    const token = sign(
        {
            comercio:comercio
        },
        process.env.JWT_SECRET,
        {
            subject:JSON.stringify(comercio),
            expiresIn: '10d'
        })

        if(token)
            return {status:"OK", data:token}
        else
            return {status:"error", msg:"Server error, cant create token"}

}