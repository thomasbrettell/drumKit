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
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        case "l":
            new Audio("sounds/crash.mp3").play();
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
