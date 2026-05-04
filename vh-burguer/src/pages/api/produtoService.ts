import { api } from "./api";


type Produto = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[],
    imagemUrl: string
}

export async function cadastrarProduto(dados: Produto) {
    try {
        const formData = new FormData();

        formData.append("Nome", dados.nome)
        formData.append("Descricao", dados.descricao)
        formData.append("Preco", dados.preco)

        if (dados.imagem) {
            formData.append("Imagem", dados.imagem)
        }

        dados.categoriasId.forEach((id) => {
            formData.append("CategoriaIDs", id.toString())
        })

        await api.post("Produto", formData);

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarProduto() {
    try {
        const response = await api.get("Produto");

        const produtos = response.data.map((prod: Produto) => ({
            ...prod,
            imagemUrl: `${api.defaults.baseURL}${prod.imagemUrl}`
        }));

        return produtos;
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Produto/" + id);

        const produto = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        }
        return produto
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}