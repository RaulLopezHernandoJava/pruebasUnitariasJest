describe('Comprobar cadenas de texto', () => {
    const text = "Es un bonito texto"
    test('Debe contener el siguiente texto', () => {
        // Saber si la cadena de texto contiene 'bonito'
        expect(text).toMatch(/bonito/);
    })
    test('No contiene el siguiente texto', () => {
        expect(text).toMatch(/Es/);
    })

    test('Comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(18)
    })
})