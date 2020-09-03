"use strict";

function checkBraces(string) {
    if (string.length % 2 !== 0) {
        return false;
    }
    const stack = new Stack();
    const braceLeft = ["(", "{", "["];
    const braceRight = [")", "}", "]"];
    for (const brace of string) {
        if (braceLeft.includes(brace)) {
            stack.push(brace);
            continue;
        }
        if (braceRight.includes(brace)) {
            if (stack.isEmpty || braceLeft.indexOf(stack.peek()) !== braceRight.indexOf(brace)) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty;
}



function addList(...rest) {
    const list = new LinkedList();
    for (const value of rest) {
        if (!Number.isInteger(value)) {
            throw new TypeError("Value is do not Integer number");
        }
        let valueArray = [...list];
        let i = 0;
        for (const elm of valueArray) {
            if (value !== elm) {
                i++;
            }
        }
        console.log(i);
        if (i === valueArray.length) {
            list.addNode(value);
        }
    }
    return list;
}