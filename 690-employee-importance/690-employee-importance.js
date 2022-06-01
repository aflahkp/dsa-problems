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
    const map = new Map();
    
    for(const e of employees){
        map.set(e.id,{importance:e.importance,subordinates:e.subordinates});
    }
    
    const q = [id]
    let result = 0;
    
    while(q.length>0){
        const empId = q.pop();
        result+=map.get(empId).importance;
        q.push(...(map.get(empId).subordinates));
    }
    
    return result;
    
};
