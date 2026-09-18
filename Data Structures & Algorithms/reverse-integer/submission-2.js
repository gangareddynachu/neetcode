class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        //Brute force
    /*    if(x==0) return 0;
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

    */
    //Brute force
/*     const org = x;
     x = Math.abs(x);
     let res = parseInt(x.toString().split('').reverse().join(''));
     if(org<0){
        res *=-1;
     }
     if(res < -(2**31) || res > 2 ** 31-1){
        return 0;
     }
     return res;
    }
    */
    //Other Approach
    const MIN = -2147483648; // -2^31
    const MAX = 2147483647; // 2^31 - 1
    let res = 0;
    while(x!==0){
        const digit = x %10;
        x = Math.trunc(x/10);
        if(res>MAX/10 || (res === MAX/10 && digit > MAX%10))
            return 0;
        if(res< MIN/10 || res === MIN/10 && digit < MIN%10)
            return 0;
        res = res *10 + digit
    }
    return res;
    }

}
