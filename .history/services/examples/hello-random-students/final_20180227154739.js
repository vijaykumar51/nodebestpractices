var fs = require('fs');
var terminal = require( 'terminal-kit' ).terminal ;

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt', 'utf-8' ,function(error, data){
            console.log(data);
            const studentsArray = data.split(';');
            .drawImage( url , [options] , callback )
            studentsArray.forEach(student => {
                console.log(`Good morning ${student}`)
            });
        })
    }
}

new studentService().getWinner();

module.exports.studentService = studentService;
module.exports.number = 1;