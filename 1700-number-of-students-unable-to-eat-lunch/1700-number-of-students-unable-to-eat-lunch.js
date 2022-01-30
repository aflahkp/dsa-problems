/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    var counter = 0;
    var previous = students[0];
    var index = 0;
    
    while(students.length>0){ 
        if(students[0] == sandwiches[0]){
            sandwiches.shift(0);
            students.shift(0)
            counter = 0;
        }else{
            if(previous == students[0]){
             counter++;
             if(counter == students.length){
                 break;
             }
            }else{
                counter = 0;
            }
            students.push(students.shift(0))

        }
        previous = students[0];
    }
    return students.length;
};