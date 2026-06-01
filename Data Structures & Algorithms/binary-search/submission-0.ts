class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        let low : number = 0;
        let high : number = nums.length - 1;
        let mid : number;
        while(low <= high)
        {
            mid  = low + Math.floor((high-low) / 2);
            if(target === nums[mid]) {
                return mid
            }

            if(nums[mid] < target) 
            {
                low = mid +1 
            }
            else{
                high = mid -1 
            }
        }
        return -1

    }
}
