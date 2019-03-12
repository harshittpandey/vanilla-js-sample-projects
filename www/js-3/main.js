const secondHand= document.querySelector('.sec');
const minHand= document.querySelector('.min');
const hourHand= document.querySelector('.hour');



function setDate () {
    const now = new Date();

    const seconds= now.getSeconds();
    const secondDegrees = ((seconds / 60)* 360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const min= now.getMinutes();
    const minDegrees = ((min / 60)* 360)+ 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours= now.getHours();
    const hourDegrees = ((hours / 60)* 360) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
