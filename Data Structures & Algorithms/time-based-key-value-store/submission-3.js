class TimeMap {
    constructor() {
        this.keyStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore[key]){
            this.keyStore[key] = [];
        }
        this.keyStore[key].push([timestamp, value]);
        
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore[key]) return "";
        const values = this.keyStore[key] || [];
        let result = "";
        // for(let i=values.length-1;i>=0;i--){
        //     if(values[i][0]<= timestamp){
        //         result= values[i][1];
        //         break
        //     }
        // }
        let left = 0;
        let right = values.length-1;
        while(left<=right){
            const mid = Math.floor((left+right)/2);
            if(values[mid][0] <= timestamp){
                result = values[mid][1];
                left = mid+1;
            }else{
                right = mid-1
            }
        }
        return result;
       

    }
}
