describe('Comparadores comunes', () => {
    const user = {
        name: "Raul",
        lastname: "Lopez"
    }

    const user2 = {
        name: "Fran",
        lastname: "Lopez"
    }

    test("No Son Iguales", () => {
        expect(user).not.toEqual(user2)
    });
})