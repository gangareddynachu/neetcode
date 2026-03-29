class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let MaxmimunPileHieghtSoFar = piles[0];
        for (let p of piles) if (p > MaxmimunPileHieghtSoFar) MaxmimunPileHieghtSoFar = p;

        let left = 1, right = MaxmimunPileHieghtSoFar;
        let res = MaxmimunPileHieghtSoFar;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let hours = 0;
            for (let p of piles) {
                hours += Math.ceil(p / mid);
            }

            if (hours <= h) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}