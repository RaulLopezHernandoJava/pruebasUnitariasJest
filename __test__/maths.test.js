import { sumar, multiplicar, restar, dividir } from '../maths.js'



describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
            expect(sumar(1, 1)).toBe(2)
        }),
        test('Prueba de restas', () => {
            expect(restar(2, 1)).toBe(1)
        }),
        test('Prueba de multiplicaciones', () => {
            expect(multiplicar(2, 2)).toBe(4)
        }),
        test('Prueba de divisiones', () => {
            expect(dividir(4, 2)).toBe(2)
        })

})