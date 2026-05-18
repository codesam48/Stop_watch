let sec = 0;
let min = 0;
let our = 0;

const timer = document.querySelector(".timer")
const secnds = document.querySelector(".secnds");
const munits = document.querySelector(".munits");
const hours = document.querySelector(".hour")

const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");

let isClicked = null;
let watch = null;

function secRep(){
    if(sec < 10){
    secnds.textContent = `0${sec}`
    };
};

function minRep(){
    if(min < 10){
        munits.textContent = `0${min}`
    };
};
function hourRep(){
    if(our < 10){
        hours.textContent = `0${our}:`
    };
};


start.addEventListener("click", ()=> {
    if (watch !== null) return;
     watch = setInterval(() => {
        sec++;
        secRep(
            secnds.textContent = sec
        );      
        if(sec == 60){
            sec = 0
            min++
            minRep(
                munits.textContent = min
            );
            if(min == 60){
                our++;
                min = 0; 
                hourRep(
                    hours.textContent = our
                );                               
            }
        };

    }, 1000);
});


pause.addEventListener('click', ()=> {
    clearInterval(watch);
    watch = null;
});




reset.addEventListener("click", (e)=> {
    sec = 0;
    min = 0;
    our = 0
    secRep();
    minRep();
    hourRep()
    
    clearInterval(watch)
    watch = null;
});




    