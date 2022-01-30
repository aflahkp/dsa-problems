/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    var counter = 0;
    var previous = students[0];
    var q = students;
    var index = 0;
    
    while(q.length>0){ 
        console.log(q,sandwiches)
        if(q[0] == sandwiches[0]){
            sandwiches.shift(0);
            q.shift(0)
            counter = 0;
        }else{
            if(previous == q[0]){
             counter++;
             if(counter == q.length){
                 break;
             }
            }else{
                counter = 0;
            }
            q.push(q.shift(0))

        }
        previous = q[0];
    }
    return q.length;
};