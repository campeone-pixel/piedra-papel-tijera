function jugada_humano() {
    let jugada= prompt('Ingrese la opcion elegida:').toLowerCase()
    return jugada
}

function jugada_pc(){
    let opciones= [
    'piedra'
    ,'papel'
    ,'tijera']
    let opcion= opciones[Math.floor(Math.random()*opciones.length)]
    return opcion
}

function aJugar(){
    const jugadaHumano = jugada_humano()
    const jugadaPc= jugada_pc()
    if (jugadaHumano==jugadaPc){
    return "empate"
    }
    else if (
        jugadaHumano=="piedra" && jugadaPc=='tijera'  
        || jugadaHumano=='papel' && jugadaPc== 'piedra' 
        || jugadaHumano=='tijera' && jugadaPc=='papel' ){ 
        return 'humano'}
    else{ 
        return 'pc'
    }
}

function game(){
    let pc=0
    let humano=0
    while (true){
        let resultado= aJugar()
        if (resultado== 'empate'){
            console.log('empate')
            
        }
        else if(resultado=='pc'){
            console.log('gano pc')
            pc=pc+1
            if (pc==5){
                console.log(`gano pc, el resultado es ${pc} contra ${humano}`)
                break
            }
        } 
        else if(resultado=='humano'){
            console.log('gano humano')
            humano=humano+1
            if (humano==5){
                console.log(`gano humano, el resultado es ${humano} contra ${pc}`)
                break
            }
        }

    }
  
};

game()



