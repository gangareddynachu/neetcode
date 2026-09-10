class CountSquares {
    constructor() {
        this.points = [];
        this.pointCount = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.points.push(point);
        const key = point[0] + ',' + point[1];
        this.pointCount.set(key, (this.pointCount.get(key) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [x1, y1] = point;
        let result = 0;

        for (const [x2, y2] of this.points) {
            // Need a diagonal point: same distance on both axes, forming a square
            const side = Math.abs(x2 - x1);
            if (side === 0 || Math.abs(y2 - y1) !== side) continue;

            // Check if the other two corners exist
            const key1 = x1 + ',' + y2;
            const key2 = x2 + ',' + y1;
            result += (this.pointCount.get(key1) || 0) * (this.pointCount.get(key2) || 0);
        }

        return result;
    }
}