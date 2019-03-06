let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let mirror= document.getElementById("mirror");
mirror.addEventListener("keyup", function (event) {
    boxOne.innerHTML = event.target.value
    boxTwo.innerHTML = event.target.value
    console.log(event.target.value)
})

