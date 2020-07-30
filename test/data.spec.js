// importamos la función `example`
import cargarJSON from "../src/helpers/cargarjsonone.js";


describe('example', () => {

    it('debería ser una función', () => {
        expect(typeof cargarJSON.encode).toBe('function');
    });

    // describe('example', () => {
    //     it('debería ', () => {
    //         expect(typeof cargarJSON.encode).toBe('function');
    //     });
    // });
});