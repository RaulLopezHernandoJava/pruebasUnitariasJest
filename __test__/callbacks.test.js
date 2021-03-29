import { callbackHell } from '../callback.js'

describe('Probando un Callback', () => {
    test('Callback', done => {
        function otherCallBack(data) {
            expect(data).toBe('Hola Javascript');
            done();
        }
        callbackHell(otherCallBack);
    })
})