class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const names: string[][] = [];

        let map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split("").sort().join("");
            if (!map.has(sortedStr)) {
                map.set(sortedStr, []);
            }
            map.get(sortedStr)!.push(strs[i]);
        }

        for (const [key, value] of map) {
            names.push(value)
        }

        return names;
    }
}
