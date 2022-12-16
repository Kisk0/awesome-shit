const sample = document.getElementById("scr");
const sample2 = document.getElementById("second");
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }
function blue(){
    sample.style.color = 'blue'; 
    sample2.style.color = 'blue'; 
}
function white(){
    sample.style.color = 'white';
    sample2.style.color = 'white';
}
function changeColour(){
    setTimeout(white,500);
    blue();  
} 
const doSomething = async () => {
    for (let i = 0; i < 100; i++) {
      await sleep(1000)
      changeColour();
    }
  }

white();
doSomething();

