const {add} = require("./math.js")

test("Add two Numbers",(()=>{
    expect(add(2,3)).toBe(10)
}))