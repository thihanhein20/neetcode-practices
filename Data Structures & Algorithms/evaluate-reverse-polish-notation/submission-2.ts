class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stack: number[] = [];

        const operators = new Set(['+', '-', '*', '/']);

        for(const token of tokens){
            if(!operators.has(token)){
                stack.push(parseInt(token,10));
            }else{
                const b = stack.pop()!;
                const a= stack.pop()!;

                let result: number ;
                switch(token){
                    case '+': result = a + b; break;
                    case '-': result = a - b ; break;
                    case '*': result = a * b ; break;
                    case '/': result = Math.trunc(a/b); break;
                    default: throw new Error(`Unknown operator: ${token}`);
                }
                stack.push(result);
            }
        }

        return stack.pop()!;


    }
}
