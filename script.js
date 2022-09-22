let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let timeDOM = document.querySelector('#timer')



// STEP 3: Create an object from the timer class
let timer = new Timer()



function updateTime(){
    console.log('update called')
    timeDOM.innerHTML = timer.time
}


startBtn.addEventListener('click', () => {
    timer.start(updateTime);
})


stopBtn.addEventListener('click', () => {
    timer.stop()
})





