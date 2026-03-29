class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens){
            if(!isNaN(token)){
                stack.push(parseInt(token))
            }else{
                let num2 = stack.pop();
                let num1 = stack.pop();
                let result = 0;

                switch (token) {
                    case '+':
                        result = num1 + num2;
                        break; 
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = Math.trunc(num1 / num2);
                        break;

                }
                stack.push(result); 
            }
        }
        return stack[0]
    }
}