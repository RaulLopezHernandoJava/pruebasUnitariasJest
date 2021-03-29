import { getDataFromApi } from '../promise'

describe('Proibando Promesas', () => {
    test('Realizando Peticion a una Api', done => {
        const api = "https://rickandmortyapi.com/api/character/"
        getDataFromApi(api).then(data => {
            console.log(data.results)
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })
})