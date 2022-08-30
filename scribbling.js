document.querySelector('#weaponmaster').addEventListener('click',pickOne)
document.querySelector('#premeditation').addEventListener('click',pickTwo)
document.querySelector('#gloomblade').addEventListener('click',pickThree)
document.querySelector('#nightstalker').addEventListener('click',pickFour)
document.querySelector('#subterfuge').addEventListener('click',pickFive)
document.querySelector('#shadowFocus').addEventListener('click',pickSix)
document.querySelector('#vigor').addEventListener('click',pickSeven)
document.querySelector('#deeperStrategem').addEventListener('click',pickEight)
document.querySelector('#markedForDeath').addEventListener('click',pickNine)
document.querySelector('#soothingDarkness').addEventListener('click',pickTen)
document.querySelector('#cheatDeath').addEventListener('click',pickEleven)
document.querySelector('#elusiveness').addEventListener('click',pickTwelve)
document.querySelector('#shotInTheDark').addEventListener('click',pickThirteen)
document.querySelector('#nightTerrors').addEventListener('click',pickFourteen)
document.querySelector('#preyOnTheWeak').addEventListener('click',pickFifteen)
document.querySelector('#darkShadow').addEventListener('click',pickSixteen)
document.querySelector('#alacrity').addEventListener('click',pickSeventeen)
document.querySelector('#envelopingShadows').addEventListener('click',pickEighteen)
document.querySelector('#masterOfShadows').addEventListener('click',pickNineteen)
document.querySelector('#secretTechnique').addEventListener('click',pickTwenty)
document.querySelector('#shurikenTornado').addEventListener('click',pickTwentyOne)



function pickOne() {
    document.getElementById('weaponmaster').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('premeditation').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('gloomblade').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickTwo() {
    document.getElementById('weaponmaster').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('premeditation').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('gloomblade').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickThree() {
    document.getElementById('weaponmaster').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('premeditation').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('gloomblade').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickFour() {
    document.getElementById('nightstalker').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('subterfuge').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('shadowFocus').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickFive() {
    document.getElementById('nightstalker').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('subterfuge').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('shadowFocus').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickSix() {
    document.getElementById('nightstalker').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('subterfuge').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('shadowFocus').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickSeven() {
    document.getElementById('vigor').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('deeperStrategem').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('markedForDeath').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickEight() {
    document.getElementById('vigor').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('deeperStrategem').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('markedForDeath').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickNine() {
    document.getElementById('vigor').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('deeperStrategem').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('markedForDeath').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickTen() {
    document.getElementById('soothingDarkness').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('cheatDeath').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('elusiveness').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickEleven() {
    document.getElementById('soothingDarkness').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('cheatDeath').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('elusiveness').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickTwelve() {
    document.getElementById('soothingDarkness').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('cheatDeath').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('elusiveness').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickThirteen() {
    document.getElementById('shotInTheDark').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('nightTerrors').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('preyOnTheWeak').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickFourteen() {
    document.getElementById('shotInTheDark').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('nightTerrors').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('preyOnTheWeak').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickFifteen() {
    document.getElementById('shotInTheDark').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('nightTerrors').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('preyOnTheWeak').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickSixteen() {
    document.getElementById('darkShadow').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('alacrity').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('envelopingShadows').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickSeventeen() {
    document.getElementById('darkShadow').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('alacrity').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('envelopingShadows').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickEighteen() {
    document.getElementById('darkShadow').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('alacrity').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('envelopingShadows').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}

function pickNineteen() {
    document.getElementById('masterOfShadows').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('secretTechnique').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('shurikenTornado').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickTwenty() {
    document.getElementById('masterOfShadows').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('secretTechnique').style.border = "5px solid rgba(252, 251, 182, 0.877)"
    document.getElementById('shurikenTornado').style.border = "5px solid rgba(0, 0, 0, 0)"
}

function pickTwentyOne() {
    document.getElementById('masterOfShadows').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('secretTechnique').style.border = "5px solid rgba(0, 0, 0, 0)"
    document.getElementById('shurikenTornado').style.border = "5px solid rgba(252, 251, 182, 0.877)"
}