/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var i = 0;
    var length = s.length;
    var n = [];
    while (i<length){
        n[indices[i]] = s[i]
        i++;
    }
    return n.join('');
};