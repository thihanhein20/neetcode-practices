class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const result : number[] = new Array(n).fill(0);
        const stack: number[] = [];

        for(let i=0; i< n;  i++){
            while(stack.length > 0 && temperatures[i] >temperatures[stack[stack.length-1]]){
                const previndex = stack.pop()!;
                result[previndex] = i - previndex;
            }
            stack.push(i);
        }

        return result;
    }
}
