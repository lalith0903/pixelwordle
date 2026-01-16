// This is already present in html code. Please modify the path if you wish

    function lettersOnly(input) {
    // Replace any character that is NOT a letter (A-Z, a-z) with an empty string
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }
    const alphabets = {
        'A': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
        'B': [
            "o","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","x"
        ],
        'C': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","o",
            "x","o","o","o","x"
        ],
        'D': [
            "o","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","x"
        ],
        'E': [
            "o","o","o","o","o",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","o","o","o","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","o","o","o","o"
        ],
        'F': [
            "o","o","o","o","o",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","o","o","o","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x"
        ],
        'G': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","x",
            "o","x","o","o","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","o","o","x"
        ],
        'H': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
        'I': [
            "o","o","o","o","o",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "o","o","o","o","o"
        ],
        'J': [
            "o","o","o","o","o",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "o","x","o","x","x",
            "x","o","x","x","x"
        ],
         'K': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","o","x",
            "o","o","o","x","x",
            "o","x","x","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
         'L': [
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","o","o","o","o"
        ],
         'M': [
            "o","x","x","x","o",
            "o","o","x","o","o",
            "o","x","o","x","o",
            "o","X","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
        'N': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","x","x","o",
            "o","x","o","x","o",
            "o","x","x","o","o",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
        'O': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","o","o","x"
        ],
         'P': [
            "o","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","x",
            "o","x","x","x","x",
            "o","x","x","x","x",
            "o","x","x","x","x"
        ],
        'Q': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","o","x","o",
            "o","x","x","o","o",
            "x","o","o","o","o"
        ],
        'R': [
            "o","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","o","o","o","x",
            "o","x","o","x","x",
            "o","x","x","o","x",
            "o","x","x","x","o"
        ],
         'S': [
            "x","o","o","o","x",
            "o","x","x","x","o",
            "o","x","x","x","x",
            "x","o","o","o","x",
            "x","x","x","x","o",
            "o","x","x","x","o",
            "x","o","o","o","x"
        ],
        'T': [
            "o","o","o","o","o",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x"
        ],
        'U': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","o","o","x"
        ],
        'V': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","x","o","x",
            "x","x","o","x","x"
        ],
         'W': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","x","x","x","o",
            "o","X","x","x","o",
            "o","x","o","x","o",
            "o","o","x","o","o",
            "o","x","x","x","o"
        ],
        'X': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","x","o","x",
            "x","x","o","x","x",
            "x","o","x","o","x",
            "o","x","x","x","o",
            "o","x","x","x","o"
        ],
         'Y': [
            "o","x","x","x","o",
            "o","x","x","x","o",
            "x","o","x","o","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x",
            "x","x","o","x","x"
        ],
         'Z': [
            "o","o","o","o","o",
            "x","x","x","x","o",
            "x","x","x","o","x",
            "x","x","o","x","x",
            "x","o","x","x","x",
            "o","x","x","x","x",
            "o","o","o","o","o"
        ]
    }
    
    function  start () {
        const container = document.getElementById("container");
        for (var b = 0; b < 5; b++) {

            const gridRow = document.getElementById(`grid-row-${b + 1}`);
            // var angnum = numbers[value];
            for (let a = 0; a < 6; a++) {
                const digit = document.createElement("div");
                digit.className = "box";
                
                // var angnum = numbers[value];
                // Create 24 boxes (4x6 grid)
                for (let i = 0; i < 35 ; i++) {
                    const box = document.createElement("div");
                    box.className = "dot";

                    digit.appendChild(box);

                }
                gridRow.appendChild(digit);
            }
            container.appendChild(gridRow);
        }
    
    
    
    }

    function updateHands(val) {
        
        for (let a = 0; a < 6; a++) {
            const angnum = alphabets[val[a]];
            const dot = box[a].querySelectorAll('.dot'); // or loop through multiple if needed
            
            for (let i = 0; i < 35; i++) {
                if (angnum[i] === "o") {
                    // Apply transformation to the dot element
                    dot[i].style.backgroundColor = 'var(--hand-color)';
                }

            }
            dot.forEach((box, index) => {
                // Calculate a staggered delay for each box
                // The delay depends on the index in the list
                setTimeout(() => {
                    box.classList.add('animate');
                }, index * 50); // 50ms delay between each box
            });
        }
        
   }
   function CheckAlphabelts(val, word, position) {
    
        const gridRow = document.getElementById(`grid-row-${position}`);
        // console.log(val,word.position);
    const box = gridRow.querySelectorAll('.box');
        const listletter = word.split('')
        // console.log(listletter);
        
        var count = 0;
        for (let a = 0; a < 6; a++) {
            const angnum = alphabets[val[a]];
            const dot = box[a].querySelectorAll('.dot'); // or loop through multiple if needed
            const letter = listletter[a];
            if(letter == val[a]){
                // console.log("match");
                count +=1;
            }
            for (let i = 0; i < 35; i++) {
                if (letter == val[a]) {
                    if (angnum[i] === "o") {
                        // Apply transformation to the dot element
                        dot[i].style.backgroundColor = 'blue';
                    }
                }
                else if(i < position*5) {
                    // console.log(angnum[i], alphabets[letter][i]);
                    if(angnum[i] == alphabets[letter][i]&& angnum[i] === "o") {
                        dot[i].style.backgroundColor = 'green';
                    } else if ( (angnum[i] === "x" ) ) {
                        //dot[i].style.backgroundColor = 'var(--hand-color)';
                    }
                    else
                    {
                        dot[i].style.backgroundColor = 'red';
                    }
                }
                else {
                    if (angnum[i] === "o") {
                        // Apply transformation to the dot element
                        dot[i].style.backgroundColor = 'var(--hand-color)';
                    }
                }
                

            }
            dot.forEach((box, index) => {
                // Calculate a staggered delay for each box
                // The delay depends on the index in the list
                setTimeout(() => {
                    box.classList.add('animate');
                }, index * 50); // 50ms delay between each box
            });
        }
        // console.log(count);
        if(count == 6){
            setTimeout(function() {
                alert("You WIN!!!");
            }, 2000);
        }
        var guessval = document.getElementById("guessval").value;
        console.log(guessval);
        if (parseInt(guessval) >= 4 && count != 6){
            setTimeout(function() {
                alert("Game Over!!! The correct word is " + word);
            }, 2000);
            

        }
        
   }
   
   start();
   var value = "Beauty";
    var answer = value.toUpperCase();
//     //updateHands(value.toUpperCase().split(''));
//    CheckAlphabelts(answer, "BEAUTY",1) 

    const button = document.getElementById("mybutton");
    
    
    button.addEventListener("click", function() {
        const wordInput = document.getElementById("inputtext").value;
        var guessval = document.getElementById("guessval");
        // console.log(wordInput);
        CheckAlphabelts(wordInput.toUpperCase().split(''), "BEAUTY", parseInt(guessval.value) + 1);
        guessval.value = parseInt(guessval.value) + 1;
    });
