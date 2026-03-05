let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1500, 600, 145, 60, './img/car-game-red')
let carroInimigo2 = new CarroInimigo(1500, 600, 145, 60, './img/car-game-red')
let carroInimigo3 = new CarroInimigo(1500, 600, 145, 60, './img/car-game-red')
let carro = new Carro(200, 200, 50, 50, 'blue')

// Ir para cima e para baixo 
document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir = -10
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir = 10
    }
})
document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp' || e.key === 's' || e.key === 'ArrowDown') {
        carro.dir = 0
    }
})

// Ir para esquerda e direita
document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.pos = -10
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.pos = 10
    }
})
document.addEventListener('keyup', (e) => {
    if (e.key === 'a' || e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'ArrowRight') {
        carro.pos = 0
    }
})

function colisao() {
    if (carro.colid(carroInimigo)) {
        carroInimigo.recomeca()
        carro.vida -= 1

    }
    if (carro.colid(carroInimigo2)) {
        carroInimigo2.recomeca()
        carro.vida -= 1
    }
    if (carro.colid(carroInimigo3)) {
        carroInimigo3.recomeca()
        carro.vida -= 1
    }
    console.log('vida: ', carro.vida)
}

function pontuacao() {
    console.log('pos: ', carroInimigo.x)
    if (carro.point(carroInimigo)) {
        carro.pontos += 5
    }
    // if(carro.point(carroInimigo2)){
    //     carro.pontos += 5
    // }
    // if(carro.point(carroInimigo3)){
    //     carro.pontos += 5
    // }
    console.log('pontos: ', carro.pontos)
}

function desenha() {
    carroInimigo.des_carro_old()
    carroInimigo2.des_carro_old()
    carroInimigo3.des_carro_old()

    carro.des_carro_old()
}

function atualiza() {
    carro.mov_car()
    carroInimigo.mov_car()
    carroInimigo2.mov_car()
    carroInimigo3.mov_car()
    colisao()
    pontuacao()

}

function main() {
    des.clearRect(0, 0, 1700, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()