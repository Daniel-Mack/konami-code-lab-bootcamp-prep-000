// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// let index = 0;


// function init() {
 
  
// if (index === alphabet.length) {
//     alert("Hurray!")
//     document.body.addEventListener("keydown", function(e) {
//     const key = parseInt(e.detail || e.which)
// if (key === alphabet[index]) {
//     index++;
//       })
//     }
//   }
// }
// }




const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;


function init() {
 
  
 if (index === alphabet.length) {
     alert("Hurray!")
     
     
     document.body.addEventListener("keydown", function(e) {
      const key = parseInt(e.detail || e.which)
     
     
      if (key === alphabet[index]) {
       index++;
      }
    }
   )}
 }


