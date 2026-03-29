class WordDictionary {
    constructor() {
        this.words = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.words.push(word)
        //day, bay, may
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        for (let w of this.words) {
            if (w.length !== word.length) continue;
            let i = 0;
            while(i< w.length){
                if (w[i] === word[i] || word[i] === '.') {
                    i++;
                }else{
                    break;
                }
            }
            if(i=== w.length){
                return true
            }

        }
        return false;

        

    }
}
