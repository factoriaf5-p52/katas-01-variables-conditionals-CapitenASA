const chai = window.chai
const expect = chai.expect

describe('Las variables en Javascript', () => {
  it('pueden contener strings', () => {
    const a = "Javascript"
    expect(a).to.equal("Javascript");
  })
  it('pueden contener números', () => {
    const b = 14.64;
    expect(b).to.equal(14.64);
  })
  it('pueden contener booleanos', () => {
    const c = false;
    expect(c).to.equal(false);
  })
})

describe('Comparaciones en Javascript', () => {
    it("usando ===", () => {
        const number = 20;
        const expresion = number ==="20";
        expect(expresion).to.equal(false)
    })

    it("usando !==", () => {
        const language = "Javascript";
        const expresion = language !== "Javascript";
        expect(expresion).to.equal(false)
    })
})

describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        const a = 10;
        const b = 90;
        expect(a+b).to.equal(100);
    })
    it("Usando multiplicación", () => {
        const a = 10;
        const b = 1.3;
        expect(a*b).to.equal(13);
    })
    it("Usando división", () => {
        const a = 10;
        const b = 4;
        expect(a/b).to.equal(2.5);
    })
})

describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        const b = true;

        const expression = a && b;
        expect(expression).to.equal(true);
    })
    it("Usando el operador OR (||)", () => {
        const a = false;
        const b = false;
        const expression = a || b;
        expect(expression).to.equal(false);
    })
})


// Para hacer pasar estos tests, edita el código correspondiente
// en el archivo "code.js"
describe("Ejemplos de funciones", () => {
    it("Función que nos dice si un número es par (even) o impar (odd)", () => {
        expect(evenOrOdd(2)).to.equal("even")
        expect(evenOrOdd(13)).to.equal("odd")
    })

    it ("Función que nos devuelve un saludo para cada nombre", () => {
        expect(greeting("Javi")).to.equal("Hola, Javi!")
        expect(greeting("gente")).to.equal("Hola, gente!")
        expect(greeting("Mary")).to.equal("Hola, Mary!")
    })
})

