var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
});

function playSound(key) {
    buttonAnimation(key);
    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
            tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            kickBass.play();
            break;

        case "l":
            crash.play();
            break;

        default:
    }
}

function buttonAnimation(currentKey) {

    document.querySelector("."+currentKey).classList.toggle("pressed");

    setTimeout(function() {
        document.querySelector("."+currentKey).classList.toggle("pressed");
    }, 100);

}

function HouseKeeper(name, age, skills, languages) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.languages = languages;
    this.clean = function () {
        alert("Cleaning in progress...")
    }
}
