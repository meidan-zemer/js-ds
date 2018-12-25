import {IStack} from '../src/Interfaces';
import Stack from '../src/Stack';

test("Testing Stack", () => {
    let stack : IStack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
});