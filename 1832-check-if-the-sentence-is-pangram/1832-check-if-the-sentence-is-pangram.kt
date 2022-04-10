class Solution {
    fun checkIfPangram(sentence: String): Boolean {
        if(sentence.length < 26) return false;
        var set = mutableSetOf<Char>();
        for(c in sentence){
            set.add(c);
        }
        
        return set.size == 26;
    }
}