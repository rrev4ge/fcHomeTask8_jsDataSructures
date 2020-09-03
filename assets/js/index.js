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



function addList(string) {
    const list = new LinkedList();
    for (let elm of string) {
        elm = Number(elm);
        if (!Number.isInteger(elm)) {
            throw new TypeError("elm is do not Integer number");
        }
        if (list.length === 0 || elm !== list.getNodeByIndex(list.length - 1).value) {
            list.addNode(elm);
        }
    }
    return list;
}