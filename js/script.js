function ejecutarModal0(){
    document.getElementById("btnModal").click(); 
}

var jugador = true;
var arreglo = new Array();

inteligenciaArtificial();

function jugar(id){
    console.log("Jugador= "+jugador)
    jugador=!jugador;
    console.log("Jugador negado= "+jugador)
    if(jugador){
        document.getElementById('c'+id).innerHTML='<img src="img/cruz.png">';
        //$('#c'+id).html('<img src="img/cruz.png">');
        console.log("Id: "+id)
        arreglo[id]='cruz';
        console.log("Id: "+arreglo[id])

        if(comprobar('cruz')){
            $('#c'+id).removeAttr('onClick');
            console.log("YA LE DI")
            inteligenciaArtificial();
        }
    }
    else{
        $('#c'+id).html('<img src="img/circulo.png">');
        arreglo[id]='circulo';

        if(comprobar('circulo')){
            console.log("Entro")
            $('#c'+id).removeAttr('onClick');
        }
    }
}

function comprobar(valor){

    if(arreglo[1] == valor && arreglo[2] == valor && arreglo[3] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c1").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c2").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c3").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>'
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>'
            document.getElementById("imgGanador").innerHTML='<h1>GANADOR</h1>'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[4] == valor && arreglo[5] == valor && arreglo[6] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">'
        document.getElementById("c4").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c5").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c6").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>'
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>'
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[7] == valor && arreglo[8] == valor && arreglo[9] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c7").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c8").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c9").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <=9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>'
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">' 
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>'
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">' 
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[1] == valor && arreglo[4] == valor && arreglo[7] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c1").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c4").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c7").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[2] == valor && arreglo[5] == valor && arreglo[8] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c2").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c5").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c8").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[3] == valor && arreglo[6] == valor && arreglo[9] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c3").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c6").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c9").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[1] == valor && arreglo[5] == valor && arreglo[9] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c1").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c5").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c9").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;
    }
    else if(arreglo[3] == valor && arreglo[5] == valor && arreglo[7] == valor){
        //$('#marco').prepend('<img src="img/win.png" width="300" title="Ganador:'+valor+'">');
        document.getElementById("c3").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c5").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("c7").style.backgroundColor="rgb(400,500,200,1)";
        document.getElementById("imgWinner").innerHTML='<h1>GANADOR</h1>'

        //Eliminar click despues de ganar
        for (let j = 1; j <= 9; j++) {
                if(arreglo[j] === undefined){
                    $('#c'+j).removeAttr('onClick');
                }
        } 

        //Compara cual fue el ganador y lo envia de nuevo a el modal
        if(valor === 'circulo'){
            document.getElementById("ganador").innerHTML='<h2>Maquina</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/circulo.png">'
        }else{
            document.getElementById("ganador").innerHTML='<h2>Jugador</h2>' 
            document.getElementById("imgGanador").innerHTML='<img src="img/cruz.png">'
        }
        ejecutarModal0();
        return false;

    }else if(arreglo[1] !== undefined && arreglo[2] !== undefined && arreglo[3] !== undefined
    && arreglo[4] !== undefined && arreglo[5] !== undefined && arreglo[6] !== undefined && arreglo[7] !== undefined
    && arreglo[8] !== undefined && arreglo[9] !== undefined){
        document.getElementById("ganador").innerHTML='<h2>Empate</h2>'
        ejecutarModal0();
    }
    else{
        return true;
        console.log("comprobar: "+true)
    }
}

function inteligenciaArtificial(){
    //jugar a ganar
    if(pensar('circulo')){

        //Jugar a defenderse
        if(pensar('cruz')){

            /*var aleatorio=Math.floor(Math.random()*9+1);
            console.log("verificando posicion:"+aleatorio);
            console.log(arreglo[aleatorio])
            if(arreglo[aleatorio]===undefined){
                jugar(aleatorio);
            }
            else{
                inteligenciaArtificial();
            }*/
            let x=1;
           for (let i = 0; i <= x; i++) {  // ciclo infinito
                console.log("numero del for"+i);
                var aleatorio=Math.floor(Math.random()*9+1);
                if(arreglo[aleatorio]===undefined){
                    jugar(aleatorio);
                    break;
                }
                x++;
            }
        }
    }
}

function pensar(figura){
    if(arreglo[1] == figura && arreglo[2] == figura && arreglo[3] === undefined){
        jugar(3);
        return false;
    }
    else if(arreglo[4] == figura && arreglo[5] == figura && arreglo[6] === undefined){
        jugar(6);
        return false;
    }
    else if(arreglo[7] == figura && arreglo[8] == figura && arreglo[9] === undefined){
        jugar(9);
        return false;
    }
    else if(arreglo[3] == figura && arreglo[2] == figura && arreglo[1] === undefined){
        jugar(1);
        return false;
    }
    else if(arreglo[6] == figura && arreglo[5] == figura && arreglo[4] === undefined){
        jugar(4);
        return false;
    }
    else if(arreglo[9] == figura && arreglo[8] == figura && arreglo[7] === undefined){
        jugar(7);
        return false;
    }
    else if(arreglo[1] == figura && arreglo[3] == figura && arreglo[2] === undefined){
        jugar(2);
        return false;
    }
    else if(arreglo[4] == figura && arreglo[6] == figura && arreglo[5] === undefined){
        jugar(5);
        return false;
    }
    else if(arreglo[7] == figura && arreglo[9] == figura && arreglo[8] === undefined){
        jugar(8);
        return false;
    }
    else if(arreglo[1] == figura && arreglo[4] == figura && arreglo[7] === undefined){
        jugar(7);
        return false;
    }
    else if(arreglo[2] == figura && arreglo[5] == figura && arreglo[8] === undefined){
        jugar(8);
        return false;
    }
    else if(arreglo[3] == figura && arreglo[6] == figura && arreglo[9] === undefined){
        jugar(9);
        return false;
    }
    else if(arreglo[1] == figura && arreglo[7] == figura && arreglo[4] === undefined){
        jugar(4);
        return false;
    }
    else if(arreglo[2] == figura && arreglo[8] == figura && arreglo[5] === undefined){
        jugar(5);
        return false;
    }
    else if(arreglo[3] == figura && arreglo[9] == figura && arreglo[6] === undefined){
        jugar(6);
        return false;
    }
    else if(arreglo[1] == figura && arreglo[5] == figura && arreglo[9] === undefined){
        jugar(9);
        return false;
    }
    else if(arreglo[9] == figura && arreglo[5] == figura && arreglo[1] === undefined){
        jugar(1);
        return false;
    }
    else if(arreglo[1] == figura && arreglo[9] == figura && arreglo[5] === undefined){
        jugar(5);
        return false;
    }
    else if(arreglo[3] == figura && arreglo[5] == figura && arreglo[7] === undefined){
        jugar(7);
        return false;
    }
    else if(arreglo[7] == figura && arreglo[5] == figura && arreglo[3] === undefined){
        jugar(3);
        return false;
    }
    else if(arreglo[3] == figura && arreglo[7] == figura && arreglo[5] === undefined){
        jugar(5);
        return false;
    }
    else if(arreglo[8] == figura && arreglo[5] == figura && arreglo[2] === undefined){
        jugar(2);
        return false;
    }
    else if(arreglo[7] == figura && arreglo[4] == figura && arreglo[1] === undefined){
        jugar(1);
        return false;
    }
    else if(arreglo[9] == figura && arreglo[6] == figura && arreglo[3] === undefined){
        jugar(3);
        return false;
    }
    else{
        return true;
    }
}