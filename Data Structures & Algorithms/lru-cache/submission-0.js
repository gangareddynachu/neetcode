class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = [];
        this.capacity = capacity;
    }
    //Array of Array =>[[key,value],[key value]]

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for(let i=0;i<this.cache.length;i++){
            if(this.cache[i][0] === key){
                //splice returns the deleted elements array, we get to access first deleted element
                let tmp = (this.cache.splice(i,1))[0];
                // and then push it to end, so that it will stay as least recently accessed
                this.cache.push(tmp);
                return tmp[1]
            }
        }
        return -1;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        for (let i = 0; i < this.cache.length; i++) {
            if (this.cache[i][0] === key) {
                this.cache.splice(i, 1);
                this.cache.push([key, value]);
                return;
            }
        }
        if (this.cache.length === this.capacity) {
            this.cache.shift();
        }
         this.cache.push([key, value]);
    }
}
