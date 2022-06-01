/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    var map = new Map();
    
    for(let e of employees){
        map.set(e.id,{importance:e.importance,subordinates:e.subordinates});
    }
    
    var q = [id]
    var result = 0;
    
    while(q.length>0){
        let empId = q.pop();
        result+=map.get(empId).importance;
        q.push(...(map.get(empId).subordinates));
    }
    
    return result;
    
};
