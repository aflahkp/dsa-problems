/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(const [type, color, name] of items){
        const itemMap = {type, color, name};
        if(itemMap[ruleKey] == ruleValue){
            count++
        }
    }
    return count;
};