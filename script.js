var timer = 60  ;
var score = 0;
var hitRn = 0;

function increaseScore(){

    score += 10;
    document.querySelector(".newscore").innerHTML = score
}

function decreaseScore(){

    score -= 10;
    document.querySelector(".newscore").innerHTML = score
}



function hit(){

     hitRn = Math.floor(Math.random()*10);
     document.querySelector(".newhit").innerHTML = hitRn

}


function makeBubble(){

    
var clutter = "";


for( var i = 1; i<106; i++){

   var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#page2").innerHTML = clutter;


}


function runTimer(){

     var time = setInterval(function(){

        if(timer > 0){

            timer--;
            document.querySelector(".timeval").innerHTML = timer;

        }
        else{

            clearInterval(time);
            document.querySelector("#page2").innerHTML = `<h1>Game Over</h1>`
        }
        

    }, 1000)
}

document.querySelector("#page2").addEventListener("click",function(dets){

 var run = Number(dets.target.textContent);
 if(run === hitRn ){

    increaseScore();
    makeBubble();
    hit();
 }

 else{

    decreaseScore();
 }
 

})


hit();
runTimer();
makeBubble();



