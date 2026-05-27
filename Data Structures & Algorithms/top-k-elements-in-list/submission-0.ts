class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const freqMap = new Map<number,number>();

         for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const bucket:number[][] = Array(nums.length + 1).fill(null).map(() => []);
        for (const [num, freq] of freqMap) {
            bucket[freq].push(num);
        }


        const result: number[] = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }

        return result;

    }
}
