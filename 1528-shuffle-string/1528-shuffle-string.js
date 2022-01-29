/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var i = 0;
    const length = s.length;
    const halflength = Math.ceil(length/2);
    const n = [];
    while (i<=halflength){
        n[indices[i]] = s[i]
        n[indices[length-i]] = s[length-i]
        i++;
    }
    return n.join('');
};