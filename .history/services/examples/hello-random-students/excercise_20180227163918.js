const fs = require('fs');

class goodMorningStudents {
  bless() {
      fs.readFile('./students.txt', 'utf')
      const studentsArray = students.split(';');
      studentsArray.forEach(student => {
          console.log(`Good morning ${student}`)
      });
  }
}

new goodMorningStudents().bless()