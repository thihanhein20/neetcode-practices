class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let newString: string = "";
        for(const s of strs)
        {
            newString = newString + s.length.toString()+ "#" + s;
        }
        return newString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        let result:string[] = [];
        let i = 0;

        while (i < str.length){
            let j = i;
            while (str[j]!=="#"){
                j = j+1
            }
            let length :number  = parseInt(str.slice(i, j));

            result.push(str.slice(j+1, j + 1 +length))
            i = j + 1+ length
        }
        return result;
    }
}
