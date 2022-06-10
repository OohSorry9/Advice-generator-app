const adviceId = document.querySelector('#advice_id');
const adviceText = document.querySelector('#advice_text');
const btn = document.querySelector('#btn');

function getAdvice(){

    fetch('https://api.adviceslip.com/advice').then(response =>
    {
        return response.json();
    }
).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = adviceNum;
    adviceText.innerHTML = `<p>${advice}</p>`

}).catch(error => {
    console.log(error)
})

}
btn.addEventListener('click', function(){
    getAdvice();
})

