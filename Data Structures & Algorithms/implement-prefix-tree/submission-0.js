class PrefixTree {
    constructor() {
        this.prefixArr = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
         this.prefixArr.push(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.prefixArr.indexOf(word)>-1
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        for(let word of this.prefixArr){
            if(word.startsWith(prefix, 0)){
                return true;
            }
        }
        return false
    }
}
