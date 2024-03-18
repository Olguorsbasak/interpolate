const interpolate=require('../src/interpolate');

describe('interpolate function',() => {
    it ('replaces variables with their respective values',() =>{
        const message ="Hi! I'm Choo Choo, but your name is way cooler, isn't it, {firstName}?";
        const session ={ firstName: "John" };
        const options = {leftDelimeter: "{",rightDelimeter:"}"};
        const result =interpolate(message,session,options);

        expect(result).toBe("Hi! I'm Choo Choo, but your name is way cooler, isn't it, John?");
    });
});