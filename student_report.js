var html = '';
var search;

function print (message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getReport (student) {
  html += `<h2>Student Found</h2><ul>`;

        for (var key in student) {
          html += `<li>${key}: ${student[key]}</li>`;
        }
  
        html += '</ul>';
}

while (true) {
  search = prompt("Search student records: Type a name [Jody] (or type quit to end)");
  
  if (search.toLowerCase() === 'quit' || search === null) {
    break;
  } else {
    for (let i = 0; i < students.length; i++) {
      if ( students[i].name === search ) {
        
        getReport(students[i]);
        
        print(html);
        break;
      }
    }
  }
}
  