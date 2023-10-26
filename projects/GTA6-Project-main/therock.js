const oRocha= document.getElementById('oRocha');

function oRochaOn (){
    oRocha.src='img/therockOn.png';
}
function oRochaOff (){
    oRocha.src='img/therockOff.png';
}

oRocha.addEventListener ('mouseover', oRochaOn);
oRocha.addEventListener ('mouseleave', oRochaOff);