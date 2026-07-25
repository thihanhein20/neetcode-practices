class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
     
     let result = 0;
     let left = 0;
     let right = heights.length-1;

     while (left < right){
        let area = (right - left) * Math.min(heights[left],heights[right]);
        result = Math.max(result,area);

        if(heights[left] < heights[right]){
            left++;
        } else{
            right--;
        }

     }
     return result;

    }
}
