import { getDataFromApi } from '../promise'
import 'regenerator-runtime/runtime';

describe('Probar async/await', () => {

    // En este caso estamos resolviendo nuestra funcion con "async - await" en vez de con
    // con promise por eso viene "async ()" en vez de "done"
    test('Realizar una peticion a una Api', async() => {
        const api = "https://rickandmortyapi.com/api/character/";
        const getRick = "https://rickandmortyapi.com/api/character/1"
        await getDataFromApi(api).then(data => {
            console.log(data)
            expect(data.results.length).toBeGreaterThan(0)
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez')
        })
    });

    test('Realizando una peticion a una api con error', async() => {
        const apiError = "http://httpstat.us/500";
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
    })

    test('Resuelve un Hola', async() => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.resolve('Adios')).resolves.toBe('Adios');
    })
})