import {describe, it, expect} from 'vitest'

describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

describe('Cadastro Filme', () => {
    it('Deve cadastrar um filme com sucesso', () => {
        const filme = {
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg'
        }
        const resposta = await axios.post('http://localhost:3000/filmes', filme)

        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
})