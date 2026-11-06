import z from 'zod';

export const createUserSchema = {
    body: z.object({
        nome: z.string().min(3, "O nome de usuario dve ter pelo menos três letras."),
        telefone: z.string().min(11, "O telefone deve conter 11 números com o DDD.") 
    })
}
