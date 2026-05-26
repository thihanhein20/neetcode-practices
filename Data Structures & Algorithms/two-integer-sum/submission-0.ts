class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let arr = []
        let map = new Map<number,number>();
        for(let i =0; i< nums.length ; i++){
            
            let difference = target - nums[i];
            
            if(map.has(difference)){
                arr.push(map.get(difference),i)
            }
            else{
                map.set(nums[i],i)
            }

            
        }
        console.log(map)
        return arr;

    }
}
