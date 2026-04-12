class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];
/*"aab"
dfs(0,0)
part = [a]
dfs(1,1)
part = [a,a]
dfs[a]
dfs(1,2)
    ab
dfs(1,3)
dfs(2,2)
aa
part = [a,a,b]

[a,a]
dfs(2,3);



*/
        const dfs = (j,i) =>{
            if(i>= s.length){
                if(i==j)
                    res.push([...part])
                return;
            }
            if(this.isPalindrome(s,j,i)){
                part.push(s.substring(j,i+1));
                dfs(i+1,i+1);
                part.pop();
            }
            dfs(j,i+1);
        }

        dfs(0,0);
        return res;

    }
    isPalindrome(s,l,r){
        while(l<r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
