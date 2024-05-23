var lightTheme = document.getElementById("light");
var darkTheme = document.getElementById("dark");
var body = document.body;
var newTheme = document.getElementById("newTheme");
var inputTheme = document.querySelector(".input-nmg");
var chatMistake = document.querySelector(".chatMistake");
var userInput = document.getElementById("userInput");
var chatNmg = document.getElementById("chatNmg");
var hdTheme = document.getElementById("hdTheme")
lightTheme.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.remove("dark");
    body.classList.add("light");
    newTheme.style.backgroundColor="white";
    inputTheme.style.backgroundColor="white";
    userInput.style.backgroundColor="white";
    userInput.style.color ="grey";
    chatNmg.style.color="black";
    chatMistake.style.color = "black";
    hdTheme.style.color ="black";
    
});

darkTheme.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.remove("light");
    body.classList.add("dark");
    newTheme.style.backgroundColor="black";
    inputTheme.style.backgroundColor="black";
    userInput.style.backgroundColor="rgba(230, 238, 240, 0.651)";
    userInput.style.color ="black";
    chatNmg.style.color="white";
    chatMistake.style.color = "white";
    hdTheme.style.color ="white";
});
