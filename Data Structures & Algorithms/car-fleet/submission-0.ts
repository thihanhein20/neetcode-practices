class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;

        // Pair up position and speed, then sort by position descending (closest to target first)
        const cars: [number, number][] = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        const stack: number[] = []; // stack of arrival times for current fleet leaders

        for (const [pos, spd] of cars) {
            const timeToTarget = (target - pos) / spd;

            // If this car arrives strictly later than the fleet ahead of it,
            // it can never catch up — it forms its own new fleet.
            if (stack.length === 0 || timeToTarget > stack[stack.length - 1]) {
                stack.push(timeToTarget);
            }
            // Otherwise (timeToTarget <= top of stack): this car catches up
            // to the fleet ahead and merges — do nothing, don't push.
        }

        return stack.length;
    }
}
