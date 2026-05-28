class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = new Map<string, string>([
            ["}", "{"],
            [")", "("],
            ["]", "["],
        ]);

        let stack: string[] = [];
        for (const bracket of s) {
            if (bracket === "{" || bracket === "(" || bracket === "[") {
                stack.push(bracket);
            } else if (bracket === "}" || bracket === ")" || bracket === "]") {
                let lastValue = stack.at(-1); // {
                if (map.has(bracket) && map.get(bracket) === lastValue) {
                    stack.pop();
                } else {
                    return false; 
                }
            }
        }
        return stack.length <= 0 ? true : false;
    }
}
