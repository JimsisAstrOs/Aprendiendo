// FECHA

const startDate = new Date("2006-12-03T00:00:00");

/* CONTADOR */

function updateCounter(){

    const now = new Date();

    let years =
    now.getFullYear() -
    startDate.getFullYear();

    let months =
    now.getMonth() -
    startDate.getMonth();

    let days =
    now.getDate() -
    startDate.getDate();

    if(days < 0){

        months--;

        const previousMonth =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if(months < 0){

        years--;
        months += 12;
    }

    document.getElementById("counter").innerHTML =

    `
    <div class="time-box">
        <span>${years}</span>
        <small>Años</small>
    </div>

    <div class="time-box">
        <span>${months}</span>
        <small>Meses</small>
    </div>

    <div class="time-box">
        <span>${days}</span>
        <small>Días</small>
    </div>
    `;
}

updateCounter();

setInterval(updateCounter,1000);

/* ESTRELLAS */

const stars =
document.querySelector(".stars");

for(let i = 0; i < 180; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "vw";

    star.style.animationDuration =
    (4 + Math.random() * 8) + "s";

    star.style.animationDelay =
    Math.random() * 5 + "s";

    const size =
    1 + Math.random() * 3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    stars.appendChild(star);
}

/* PALABRAS */

const phrases = [

    "Te quiero mucho 💖",
    "Eres la mejor mamá 🌸",
    "Gracias por todo ✨",
    "Mi lugar seguro 💕",
    "Siempre conmigo 💖",
    "Te amo mamá 🌷",
    "Mi persona favorita 🌸",
    "Eres increíble 💕",
    "Gracias por cuidarme 🌻",
    "Mi mamá hermosa 💖"

];

const wordsContainer =
document.querySelector(".words");

for(let i = 0; i < 40; i++){

    const word =
    document.createElement("div");

    word.classList.add("word");

    word.innerText =
    phrases[
        Math.floor(
            Math.random() * phrases.length
        )
    ];

    word.style.left =
    Math.random() * 100 + "vw";

    word.style.fontSize =
    (14 + Math.random() * 18) + "px";

    word.style.animationDuration =
    (8 + Math.random() * 12) + "s";

    word.style.animationDelay =
    Math.random() * 10 + "s";

    wordsContainer.appendChild(word);
}