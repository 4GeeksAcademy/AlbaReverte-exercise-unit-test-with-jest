// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 141.816 JPY", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(3.5);

    // Si 1 dollar son 141.816 yenes, entonces 3.5 dólares debe ser (3.5 * 141.816)
    const expected = 3.5 * 141.816;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(496.356); // 1 dollar son 141.816 yenes, entonces 3.5 dólares deberían ser = (3.5 * 141.816)
})




test("One yen should be 0.0051 libras", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 yen son 0.0051 libras, entonces 3.5 yenes debe ser (3.5 * 0.0051)
    const expected = 3.5 * 0.0051;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.01785); // 1 yen son 0.01785 libras, entonces 3.5 yenes deberían ser = (3.5 * 0.0051)
})
