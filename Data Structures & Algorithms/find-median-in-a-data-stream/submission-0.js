class MedianFinder {
    constructor() {
        this.arr = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num)
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.arr.sort((a,b)=> a-b);
        let len = this.arr.length;
         let index = Math.floor(len/2)
        if(len%2==0){
            return (this.arr[index]+ this.arr[index-1])/2;
        }else{
            return this.arr[index]
        }
    }
}
