let assert = require('chai').assert;
const lineBreaker = require('../src/Models/LineBreaker');

describe("Line breaker", () => {
    it("Should write at maximum 10 columns", () => {
        const LineBreaker = new lineBreaker.LineBreaker(10, "Olá usuário como vai você?");

        assert.isString(LineBreaker.breakLines());
    });
});