import z, { boolean } from 'zod';

export const createProductSchema = {
    body: z.object({
        nome: z.string().min(2, "O nome do produto deve conter pelo menos 2 letras."),
        preco: z.coerce.number({
            required_error: "O preço é obrigatorio",
            invalid_type_error: "O preço deve ser um número."
        }).positive("O preco deve ser maior que zero.").max(5000, "o preço insirido é muito alto."),
        categoria: z.enum(["BEBIDAS", "PIZZAS"]),
        ativo: z.boolean()
    })
}
