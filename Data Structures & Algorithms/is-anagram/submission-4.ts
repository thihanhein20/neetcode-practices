class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map = new Map<string,number>();
        let map2 = new Map<string,number>();

        if(s.length !== t.length) return false
        
        for(let i=0; i< s.length; i++){
            if(map.has(s[i])){
                let value = map.get(s[i])
                value++;
                map.set(s[i],value)
            }
            else
            {
                map.set(s[i],1)
            }
        }

        for(let i=0; i< t.length; i++){
            if(map2.has(t[i])){
                let value = map2.get(t[i])
                value++;
                map2.set(t[i],value)
            }
            else
            {
                map2.set(t[i],1)
            }
        }
        console.log(map)
        console.log(map2)

        for (let [key, val] of map) {
            if (map2.get(key) !== val) return false;
        }
        return true;
        
        
    }
}
