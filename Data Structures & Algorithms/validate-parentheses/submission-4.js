class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /*
        var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

*/
if(!s.length) return true;
var stack = [];
for(let i=0;i<s.length;i++){
    if(s.charAt(i)==='(' ||
    s.charAt(i)==='{'||
    s.charAt(i)==='['){
         stack.push(s.charAt(i))
    }else{
        if(stack.length<=0)
            return false;
        var pop = stack.pop();
        switch(s.charAt(i)){
            case ']':
                if(pop != '[')
                    return false;
                break;
            case '}':
                if(pop != '{')
                    return false;
                break;
            case ')':
                if(pop != '(')
                    return false;
                break;
        } 
    }
}
  return stack.length === 0;

    }
}
