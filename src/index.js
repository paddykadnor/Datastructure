/**
 * Infix to posfix
 *
 *
 * Algorithm
 *
 1. Scan the infix expression from left to right.
2. If the scanned character is an operand, output it.
3. Else,
3.1 If the precedence of the scanned operator is greater than the precedence of the operator in the stack(or the stack is empty or the stack contains a ‘(‘ ), push it.
3.2 Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator. After doing that Push the scanned operator to the stack. (If you encounter parenthesis while popping then stop there and push the scanned operator in the stack.)
4. If the scanned character is an ‘(‘, push it to the stack.
5. If the scanned character is an ‘)’, pop the stack and and output it until a ‘(‘ is encountered, and discard both the parenthesis.
6. Repeat steps 2-6 until infix expression is scanned.
7. Print the output
8. Pop and output from the stack until it is not empty.
 *
 */

//a+b*(c^d-e)^(f+g*h)-i

const expression = ["a+b*(c^d-e)^(f+g*h)-i"," 2+3*4","2*3-4^2","3+4*5/6","4+8*6-5/3-2*2+2"];


let postfix = [];
var stack = [];
const precedence = (operator) => {
    switch (operator) {
        case "^":
            return 3
            break;
        case "*":
        case "/":
            return 2
        case "+":
        case "-":
            return 1
            break;
        default:
            return 0
            break;
    }

}

getParenthesis = () => {
    while (stack.length > 0 && stack[stack.length - 1] != "(") {
        postfix.push(stack.pop())
    }
    stack.pop()
}

checkoperator = (char) => {
    while (stack.length > 0 && precedence(char) <= precedence(stack[stack.length - 1])) {
        postfix.push(stack.pop())
    }
    stack.push(char)
}

expression.map((ele)=>{
    for (let index = 0; index < ele.length; index++) {
        const char = ele.charAt(index);
        char.match(/[a-z0-9]/i) ? postfix.push(char) : char === "(" ? stack.push(char) : char === ")" ? getParenthesis() : checkoperator(char)
    }

    //console.log(stack)
while (stack.length > 0) { postfix.push(stack.pop()) }

console.log(postfix.join(""))
postfix=[]
})

