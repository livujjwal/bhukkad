import {sum} from "../sum"
test("testing sum fn ", () => {
    const ans = sum(2,5)

    //Assertion
    expect(ans).toBe(7)
})