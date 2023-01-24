const turnOnOff = document.getElementById ( 'turnOnOff' );
const lamp = document.getElementById ( 'lamp' );


/* acão para verificação caso a lampada estiver quebrada */

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1 
     
 }


/* ligar a lampada */

function lampOn ( ) {
    if ( !isLampBroken () ) {
        lamp.src = "img/ligada.jpg";
    }
}

turnOnOff.addEventListener ('click', lampOnOff );


/* desligar a lampada */

 function lampOff() {
    if ( !isLampBroken () ) {
    lamp.src = "img/desligada.jpg";
    turnOnOff.textContent = 'Ligar'
    }
}

/* com dublo click a lampada quebra */

function lampBroken (){
    lamp.src = "img/quebrada.jpg"
}





function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
 }
/*   
passando mouse e dublo click */

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('dblclick', lampBroken)
lamp.addEventListener ('mouseleave', lampOff)


