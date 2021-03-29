import { getDataFromApi } from '../promise'

describe('Probando Promesas', () => {
    test('Realizando Peticion a una Api', done => {
        const api = "https://rickandmortyapi.com/api/character/"
        getDataFromApi(api).then(data => {
            console.log(data.results)
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })

    // La promesa tiene que devolver un 'Hola' devuelve un 'Hola' asi
    // que el test pasa perfectamente

    test('Resuelve un hola', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    })

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error')
    })
})