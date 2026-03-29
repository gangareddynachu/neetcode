class Solution {
    constructor(){
        this.res= [];
    }
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.res=[];
        candidates.sort((a,b)=>a-b);
        this.backtrack(candidates,target,0,[],0);
        return this.res;
    }

    backtrack(nums,target,i,curr,total){
        if(total === target){
            this.res.push([...curr]);
            return;
        }
         if(total > target || i === nums.length) {
            return;
        }
        curr.push(nums[i]);
        this.backtrack(nums, target, i+1, curr, total+nums[i]);
        curr.pop();
        while(i+1<nums.length && nums[i] === nums[i+1]){
            i++;
        }
        this.backtrack(nums, target, i+1, curr,total);

    }
}
