class MinStack {
    constructor() {
      this.stack = [];
      this.minValStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val);
      var minValue = this.minValStack.length ==0 ?  val : Math.min(this.minValStack[this.minValStack.length-1],val)
      this.minValStack.push(minValue);
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop();
       this.minValStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
      return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
      return this.minValStack[this.minValStack.length-1]
    }
}
