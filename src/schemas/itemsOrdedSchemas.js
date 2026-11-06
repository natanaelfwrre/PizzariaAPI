import z from 'zod';

export const createItemsOrdedSchema = {
    body: z.object({
        quantidade: z.number().positive("A quantidade deve ser diferente de zero."),
        preco: z.coerce.number({
                required_error: "O preço é obrigatorio",
                invalid_type_error: "O preço deve ser um número."
            }).positive("O preco deve ser maior que zero.").max(5000, "o preço insirido é muito alto."),
        observacao: z.string().optional()
    })
}
