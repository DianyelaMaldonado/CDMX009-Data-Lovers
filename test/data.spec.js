// importamos la función `example`
import cargarJSON from "../src/helpers/cargarjsonone.js";

describe('example', () => {

    it('debería ser una función', () => {
        expect(typeof cargarJSON).toBe('function');
    });

    describe('example', () => {
        // escribe aquí tu test
    });
});