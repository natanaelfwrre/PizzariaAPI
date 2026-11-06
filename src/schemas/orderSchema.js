import z from 'zod';

export const createOrderSchema = {
    body: z.object({
        status: z.enum(["RECEBIDO","EM_PREPARO","PRONTO","SAIU_PARA_ENTREGA","ENTREGUE","CANCELADO"]).default("RECEBIDO"),
        tipo: z.enum(["entraga", "retirada"])
    })
}
