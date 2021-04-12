'use strict';
let userName = prompt('what\'s your name?');
alert('Helloo '+userName+' nice to meet you');
alert('I will make for you a qucik quiz (answer with :yes or no) ')

function quesOne(){

    let ginder =prompt('Am I a male?');
    if (ginder.toLocaleLowerCase() === 'yes'|| ginder.toLocaleLowerCase() ==='y'){

        console.log('The fisrt answer:correct');
        alert('correct');
    }else if (ginder.toLocaleLowerCase() === 'no'|| ginder.toLocaleLowerCase() ==='n') {

        console.log('The first answer:wrong');
        alert('wrong');


    }



    }
    quesOne();


    function quesTwo(){
        let age =prompt('Am I in the twenties?');

        if (age.toLocaleLowerCase() === 'yes'|| age.toLocaleLowerCase() ==='y'){

            console.log('The second answer:correct');
            alert('correct');
        }else if (age.toLocaleLowerCase() === 'no'|| age.toLocaleLowerCase() ==='n') {
    
            console.log('The second answer:wrong');
            alert('wrong');
        }
    }
    quesTwo();


    function quesThree(){

        let club =prompt('My favorit club is Fc Barcelona ?');

        if (club.toLocaleLowerCase() === 'yes'|| club.toLocaleLowerCase() ==='y'){

            console.log('The third answer:wrong');
            alert('wrong');
        }else if (club.toLocaleLowerCase() === 'no'|| club.toLocaleLowerCase() ==='n') {
    
            console.log('The third answer:correct');
            alert('correct , I am a real madrid fan');
        }
    }
    quesThree();

    function quesFour(){

        let developer =prompt('Do you think I will be a great developer?');

        if (developer.toLocaleLowerCase() === 'yes'|| developer.toLocaleLowerCase() ==='y'){

            console.log('The fourth answer:correct');
            alert('correct , I beleive to be great developer');
        }else if (developer.toLocaleLowerCase() === 'no'|| developer.toLocaleLowerCase() ==='n') {
    
            console.log('The fourth answer:wrong');
            alert('wrong ,I beleive to be great developer ');
        }
    }
    quesFour();

    function quesFive(){

        let sport =prompt('Do you think I go to gym in my free time?');

        if (sport.toLocaleLowerCase() === 'yes'|| sport.toLocaleLowerCase() ==='y'){

            console.log('The fifth answer:correct');
            alert('correct');
        }else if (sport.toLocaleLowerCase() === 'no'|| sport.toLocaleLowerCase() ==='n') {
    
            console.log('The fifth answer:wrong');
            alert('wrong');
        }
    }
    quesFive();

    alert('Thanks for your time '+userName+'if you want more details about me you can go to my social media acoount ');
    



