/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let pending = [];
    let result = "";
    let i = 0;
    let len = command.length;
    while (i<len){
        switch(command[i]){
            case "G":
                result+="G";
                break;
            case ")":
                if(pending.length == 1){
                    result+="o";
                }
                else{
                    result+="al";
                }
                pending.length = 0;
                break;
            default:
                pending.push(command[i])
                break;
        }
        i++;
    }
    return result;
};