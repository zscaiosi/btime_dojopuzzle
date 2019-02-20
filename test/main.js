let assert = require('chai').assert;
const lineBreaker = require('../src/Models/LineBreaker');

describe("Line breaker", () => {
    it("Should write at maximum 10 columns", () => {
        const LineBreaker = new lineBreaker.LineBreaker(5, "Um pequeno jabuti xereta viu dez cegonhas felizes.");
        const res = LineBreaker.breakLines();

        console.log(res);

        assert.isArray(res);
    });
});