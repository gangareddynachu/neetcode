class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        if(x==0) return 0;
        let num = Math.abs(x);
        console.log(num)
        let res = '';
        while(num>0){
            console.log(num)
            res += num%10;
            num = parseInt(num/10);
        }
        res = parseInt(res);
        if(res> Math.pow(2,31)-1 || res< - Math.pow(2,31)){
            return 0
        }
        return x>0 ? res : -res;
    }
}
