let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300, 200, 50, 50, 'red')
let carroInimigo2 = new CarroInimigo(1300, 400, 50, 50, 'pink')
let carroInimigo3 = new CarroInimigo(1300, 600, 50, 50, 'orange')
let carro = new Carro(200, 200, 50, 50, 'blue')

// Array para as estradas
let estradas = []
for (let i = 0; i < 40; i++) {
    estradas.push(new Estrada(10 + (i * 40), 345, 30, 10, 'white'))
}

// Controle de velocidade
let velocidadeJogo = 3

//Ir para cima e para baixo (W/S e setas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir = -5
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir = 5
    }

    // Ir para frente e para trás (A/D e setas)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        velocidadeJogo = 6  // Aumenta velocidade (vai mais rápido para esquerda)
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        velocidadeJogo = 0  // Diminui velocidade (vai mais devagar para direita)
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        carro.dir = 0
    }

    if (e.key === 'a' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        velocidadeJogo = 3  // Volta à velocidade normal
    }
})

// Função para gerar posição Y aleatória
function getRandomY() {
    return Math.floor(Math.random() * 500) + 100  // Entre 100 e 600
}

function desenha() {
    // Desenha estradas
    estradas.forEach(estrada => estrada.des_quad())

    // Desenha carros inimigos
    carroInimigo.des_carro_old()
    carroInimigo2.des_carro_old()
    carroInimigo3.des_carro_old()

    // Desenha carro do jogador
    carro.des_carro_old()
}

function atualiza() {
    // Move carro do jogador verticalmente
    carro.mov_car()

    // Move carros inimigos com a velocidade do jogo
    carroInimigo.mov_car(velocidadeJogo)
    carroInimigo2.mov_car(velocidadeJogo)
    carroInimigo3.mov_car(velocidadeJogo)

    // Move estradas com a velocidade do jogo
    estradas.forEach(estrada => estrada.mov_est(velocidadeJogo))

    // Reposiciona carros inimigos aleatoriamente quando saem da tela
    if (carroInimigo.x < -100) {
        carroInimigo.x = 1500
        carroInimigo.y = getRandomY()
        carroInimigo.a = `hsl(${Math.random() * 360}, 100%, 50%)` // Cor aleatória
    }
    if (carroInimigo2.x < -100) {
        carroInimigo2.x = 1500
        carroInimigo2.y = getRandomY()
        carroInimigo2.a = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    if (carroInimigo3.x < -100) {
        carroInimigo3.x = 1500
        carroInimigo3.y = getRandomY()
        carroInimigo3.a = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
}

function main() {
    des.clearRect(0, 0, 1700, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}
main()