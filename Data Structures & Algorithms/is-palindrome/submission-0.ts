class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
       let left = 0;
       let right = s.length -1;

       while (left < right){

         while(left < right && !/[a-z0-9]/i.test(s[left])){
            left++;
         }

         while(left < right && !/[a-z0-9]/i.test(s[right])){
            right--;
         }

         if(s[left].toLowerCase() !== s[right].toLocaleLowerCase()){
            return false;
         }
         left++;
         right--;
       }
    return true;

    }
}
