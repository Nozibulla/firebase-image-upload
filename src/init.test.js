const init = require("./init")
// @ponicode
describe("init.getThumbUrl", () => {
    test("0", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => 250, substr: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => 135, substr: () => "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => 254, substr: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => 254, substr: () => "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => 202, substr: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            init.getThumbUrl({ lastIndexOf: () => Infinity, substr: () => "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
