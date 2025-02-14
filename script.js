let popup;
let compPopup;

let compscore = 0;
let playerscore = 0;

const choice = document.querySelector('.playerchoice').querySelectorAll('button');

const selection = document.querySelector('.selection');

const compselection = document.querySelector('.computerselection');

const playerscoredisplay = document.querySelector('.player_score');
const compscoredisplay = document.querySelector('.computer_score');


//this function displays the images after the user has clicked on a button
function showPopup(player_val){

    if(popup){
        selection.removeChild(popup);
        popup = null;
    }

    if(!popup && player_val === 1){
        popup= document.createElement('img');
        popup.src = 'rock.png';
        popup.style.width = '100px';
        popup.style.height = '100px';
        selection.appendChild(popup)
        let val = computerPlay();
        showcompPopup(val);
        display_score(val, player_val);
        }
    else if(!popup && player_val === 2){
        popup= document.createElement('img');
        popup.src = 'paper.png';
        popup.style.width = '100px';
        popup.style.height = '100px';
        selection.appendChild(popup)
        let val = computerPlay();
        showcompPopup(val);
        display_score(val, player_val);
    }
    else if(!popup && player_val === 3){
        popup= document.createElement('img');
        popup.src = 'scissors.png';
        popup.style.width = '100px';
        popup.style.height = '100px';
        selection.appendChild(popup)
        let val = computerPlay();
        showcompPopup(val);
        display_score(val, player_val);
    }
    
    
}

//this iterates over all the three butttons and then appplies the event listener to each of them
choice.forEach(button=>{
    button.addEventListener('click', function(event){
        if(event.target === button){
            if(event.target === choice[0]){
                console.log('rock')
            
                showPopup(1);
                
            }
            
            else if(event.target === choice[1]){console.log('paper')
                
                showPopup(2);
            }   

            else if(event.target === choice[2]){console.log('scissors')
                showPopup(3);
            }

        }
            
    })
})


//this function generates a random number between 1 and 3

function computerPlay(){
    return  Math.floor(Math.random()*3)+1;
   
}




//this function displays the image of the computer's choice
function showcompPopup(comp_val){

    if(compPopup){
        compselection.removeChild(compPopup);
        compPopup = null;
    }

    if(!compPopup && comp_val === 1){
        compPopup= document.createElement('img');
        compPopup.src = 'rock.png';
        compPopup.style.width = '100px';
        compPopup.style.height = '100px';
        compselection.appendChild(compPopup)
        
        }
    else if(!compPopup && comp_val === 2){
        compPopup= document.createElement('img');
        compPopup.src = 'paper.png';
        compPopup.style.width = '100px';
        compPopup.style.height = '100px';
        compselection.appendChild(compPopup)
    }
    else if(!compPopup && comp_val === 3){
        compPopup= document.createElement('img');
        compPopup.src = 'scissors.png';
        compPopup.style.width = '100px';
        compPopup.style.height = '100px';
        compselection.appendChild(compPopup)
    }
   

    
}

//cacualtes score
function display_score(comp_val, player_val)
{
       if(comp_val===player_val){
        console.log('draw');
       }

       else if((comp_val===1 && player_val===2) || (comp_val===2 && player_val===3) || (comp_val===3 && player_val===1)){
        playerscore++;
       }

       else{
        compscore++;
       }

       //displays score on the screen
       compscoredisplay.textContent = `Computer : ${compscore}`;
       playerscoredisplay.textContent = `Player : ${playerscore}`;


}

document.addEventListener('DOMContentLoaded', function(){


    // loads initial score
    compscoredisplay.textContent = `Computer : ${compscore}`;
    playerscoredisplay.textContent = `Player : ${playerscore}`;
});











