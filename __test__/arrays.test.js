import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('No contiene un kiwi', () => {
        expect(arrayFruits()).not.toContain('Kiwi')
    })

    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    })
})