'use strict';
let sum =0;
let userName = prompt('what\'s your name?');
alert('Helloo '+userName+' nice to meet you');
alert('I will make for you a qucik quiz (answer with :yes or no) ')

function checkGinder(){

    let ginder =prompt('Am I a male?');
    if (ginder.toLocaleLowerCase() === 'yes'|| ginder.toLocaleLowerCase() ==='y'){

        // console.log('The fisrt answer:correct');
        alert('correct');
        sum++;
    }else if (ginder.toLocaleLowerCase() === 'no'|| ginder.toLocaleLowerCase() ==='n') {

        // console.log('The first answer:wrong');
        alert('wrong');


    }



    }
    checkGinder();


    function checkAge(){
        let age =prompt('Am I in the twenties?');

        if (age.toLocaleLowerCase() === 'yes'|| age.toLocaleLowerCase() ==='y'){

            // console.log('The second answer:correct');
            alert('correct');
            sum++;
        }else if (age.toLocaleLowerCase() === 'no'|| age.toLocaleLowerCase() ==='n') {
    
            // console.log('The second answer:wrong');
            alert('wrong');
        }
    }
    checkAge();


    function checkClub(){

        let club =prompt('My favorit club is Fc Barcelona ?');

        if (club.toLocaleLowerCase() === 'yes'|| club.toLocaleLowerCase() ==='y'){

            // console.log('The third answer:wrong');
            alert('wrong');
        }else if (club.toLocaleLowerCase() === 'no'|| club.toLocaleLowerCase() ==='n') {
    
            // console.log('The third answer:correct');
            alert('correct , I am a real madrid fan');
            sum++;
        }
    }
    checkClub();

    function checkFuture(){

        let developer =prompt('Do you think I will be a great developer?');

        if (developer.toLocaleLowerCase() === 'yes'|| developer.toLocaleLowerCase() ==='y'){

            // console.log('The fourth answer:correct');
            alert('correct , I beleive to be great developer');
            sum++;
        }else if (developer.toLocaleLowerCase() === 'no'|| developer.toLocaleLowerCase() ==='n') {
    
            // console.log('The fourth answer:wrong');
            alert('wrong ,I beleive to be great developer ');
        }
    }
    checkFuture();

    function checkHopies(){

        let sport =prompt('Do you think I go to gym in my free time?');

        if (sport.toLocaleLowerCase() === 'yes'|| sport.toLocaleLowerCase() ==='y'){

            // console.log('The fifth answer:correct');
            alert('correct');
            sum++;
        }else if (sport.toLocaleLowerCase() === 'no'|| sport.toLocaleLowerCase() ==='n') {
    
            // console.log('The fifth answer:wrong');
            alert('wrong');
        }
    }
    checkHopies();


    function checkSport(){

        

        for(let i=0 ; i<4 ; i++){

            let championsLeague  = prompt('Guess how many times realmadrid won with championsLeague?\n'+'The answer between 1-15\n'+'Also you have just 4 trials');
            
            

            if(championsLeague <=9){

                alert('Are you series !! its to low answer \n'+' try it again');
            }

            else if(championsLeague >13){

                alert('you are very close , but its tow high litle bit \n'+'just try again');
            }

            else if(championsLeague ==13){

            alert('Yes this is a correct answer and soon its will be 14');
            sum++;
            break;}

            if (i==3){
                alert('the correct answer is 13');
            }


        
        }

        


    }
    checkSport();




        function checkPlayer(){
    
            let ballondorArray = ['ronaldo','messi','cristiano','kaka','zidane','modric'];
            let theBest = ''
            for (let y = 0; y < 6; y++){ 
                   theBest = prompt('Give me one name player won with the ballondor? ');
                  for (let i = 0; i < ballondorArray.length ; i++) {
            
                if (theBest == ballondorArray[i]) {
                   alert( 'correct');
                  y=6;
                  sum++;
                  break;
                }
                
            }
            if (y==5){
                alert ('no more trials \n'+'the right answers are = '+ ballondorArray)
              }else if(y<6){
                 alert('this is wrong');
            }
            
            }
        }
        checkPlayer();






    alert('Thanks for your time '+userName+' if you want more details about me you can go to my social media acoount ');
    alert('you have got a score '+sum+' of 7');
    
    



