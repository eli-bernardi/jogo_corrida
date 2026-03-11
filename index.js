let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(2200, 600, 145, 60, './img/car-game-red')
let carroInimigo2 = new CarroInimigo(2200, 600, 145, 60, './img/car-game-red')
let carroInimigo3 = new CarroInimigo(2200, 600, 145, 60, './img/car-game-red')
let carro = new Carro(200, 200, 50, 50, './img/car-game-black')

let calcadaSuperior = new Calcada(0, 0, 2000, 50, '#696969')
let calcadaInferior = new Calcada(0, 690, 2000, 50, '#696969')
let meioFioSuperior = new MeioFio(0, 50, 2000, 5)
let meioFioInferior = new MeioFio(0, 685, 2000, 5)


let estrada1 = new Estrada(10, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada2 = new Estrada(100, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada3 = new Estrada(190, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada4 = new Estrada(280, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada5 = new Estrada(370, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada6 = new Estrada(460, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada7 = new Estrada(550, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada8 = new Estrada(640, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada9 = new Estrada(730, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada10 = new Estrada(820, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada11 = new Estrada(910, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada12 = new Estrada(1000, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada13 = new Estrada(1090, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada14 = new Estrada(1180, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada15 = new Estrada(1270, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada16 = new Estrada(1360, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada17 = new Estrada(1450, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada18 = new Estrada(1540, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada19 = new Estrada(1630, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada20 = new Estrada(1720, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada21 = new Estrada(1800, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada22 = new Estrada(1880, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')
let estrada23 = new Estrada(1960, 400, 80, 10, 'rgba(228, 168, 56, 0.863)')

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
    if (carro.point(carroInimigo2)) {
        carro.pontos += 5
    }
    if (carro.point(carroInimigo3)) {
        carro.pontos += 5
    }
    console.log('pontos: ', carro.pontos)
}

function desenha() {
    carroInimigo.des_carro_old()
    carroInimigo2.des_carro_old()
    carroInimigo3.des_carro_old()

    carro.des_carro_old()

    estrada1.des_quad()
    estrada2.des_quad()
    estrada3.des_quad()
    estrada4.des_quad()
    estrada5.des_quad()
    estrada6.des_quad()
    estrada7.des_quad()
    estrada8.des_quad()
    estrada9.des_quad()
    estrada10.des_quad()
    estrada11.des_quad()
    estrada12.des_quad()
    estrada13.des_quad()
    estrada14.des_quad()
    estrada15.des_quad()
    estrada16.des_quad()
    estrada17.des_quad()
    estrada18.des_quad()
    estrada19.des_quad()
    estrada20.des_quad()
    estrada21.des_quad()
    estrada22.des_quad()
    estrada23.des_quad()


}

function atualiza() {
    carro.mov_car()
    carroInimigo.mov_car()
    carroInimigo2.mov_car()
    carroInimigo3.mov_car()
    estrada1.mov_est()
    estrada2.mov_est()
    estrada3.mov_est()
    estrada4.mov_est()
    estrada5.mov_est()
    estrada6.mov_est()
    estrada7.mov_est()
    estrada8.mov_est()
    estrada9.mov_est()
    estrada10.mov_est()
    estrada11.mov_est()
    estrada12.mov_est()
    estrada13.mov_est()
    estrada14.mov_est()
    estrada15.mov_est()
    estrada16.mov_est()
    estrada17.mov_est()
    estrada18.mov_est()
    estrada19.mov_est()
    estrada20.mov_est()
    estrada21.mov_est()
    estrada22.mov_est()
    estrada23.mov_est()

    calcadaSuperior.mov_calcada()
    calcadaInferior.mov_calcada()
    meioFioSuperior.mov_meiofio()
    meioFioInferior.mov_meiofio()

    colisao()
    pontuacao()

}

function main() {
    des.clearRect(0, 0, 2000, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()