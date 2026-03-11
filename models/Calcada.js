// Classe para a Calçada
class Calcada extends Obj {
    constructor(x, y, w, h, cor) {
        super(x, y, w, h, cor)
    }

    des_calcada() {
        // Desenha o fundo da calçada (cinza)
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)

        // Desenha as linhas divisórias da calçada
        des.strokeStyle = 'white'
        des.lineWidth = 2

        // Linhas horizontais (simulando blocos de concreto)
        for (let i = 0; i < this.w; i += 60) {
            des.beginPath()
            des.strokeStyle = 'rgba(255, 255, 255, 0.3)'
            des.moveTo(this.x + i, this.y)
            des.lineTo(this.x + i, this.y + this.h)
            des.stroke()
        }

        // Bordas da calçada
        des.strokeStyle = 'darkgray'
        des.lineWidth = 3
        des.strokeRect(this.x, this.y, this.w, this.h)

        // Textura de pequenos pontos (simulando pedriscos)
        des.fillStyle = 'rgba(255, 255, 255, 0.2)'
        for (let j = 0; j < 20; j++) {
            let px = this.x + Math.random() * this.w
            let py = this.y + Math.random() * this.h
            des.beginPath()
            des.arc(px, py, 2, 0, Math.PI * 2)
            des.fill()
        }
    }
}

// Classe para a Faixa de Pedestres
class FaixaPedestres extends Obj {
    constructor(x, y, w, h) {
        super(x, y, w, h, 'white')
    }

    des_faixa() {
        // Desenha as listras brancas da faixa de pedestres
        let numListras = 8
        let larguraListra = this.w / (numListras * 2 - 1)

        for (let i = 0; i < numListras; i++) {
            des.fillStyle = 'white'
            des.fillRect(
                this.x + (i * larguraListra * 2),
                this.y,
                larguraListra,
                this.h
            )
        }

        // Borda amarela ao redor da faixa (opcional)
        des.strokeStyle = 'yellow'
        des.lineWidth = 2
        des.strokeRect(this.x, this.y, this.w, this.h)
    }
}

// Classe para o Meio-fio
class MeioFio extends Obj {
    constructor(x, y, w, h) {
        super(x, y, w, h, '#8B7355') // Marrom para simular concreto
    }

    des_meiofio() {
        // Desenha o meio-fio principal
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)

        // Desenha a borda superior (detalhe)
        des.fillStyle = '#A0522D'
        des.fillRect(this.x, this.y, this.w, 5)

        // Desenha a textura do meio-fio
        des.strokeStyle = '#654321'
        des.lineWidth = 1
        for (let i = 0; i < this.w; i += 20) {
            des.beginPath()
            des.moveTo(this.x + i, this.y + 2)
            des.lineTo(this.x + i + 10, this.y + this.h - 2)
            des.stroke()
        }
    }
}

// Como integrar no seu código existente:

// Criar os objetos da calçada
let calcadaSuperior = new Calcada(0, 0, 2000, 50, '#696969') // Calçada de cima
let calcadaInferior = new Calcada(0, 690, 2000, 50, '#696969') // Calçada de baixo

// Criar meios-fios
let meioFioSuperior = new MeioFio(0, 50, 2000, 5)
let meioFioInferior = new MeioFio(0, 685, 2000, 5)

// Criar faixas de pedestres (opcional)
let faixa1 = new FaixaPedestres(400, 55, 100, 630)
let faixa2 = new FaixaPedestres(1200, 55, 100, 630)

// Função para desenhar tudo (adicione no seu loop principal)
function desenharCenario() {
    // Desenha o fundo da estrada primeiro
    des.fillStyle = '#2F4F4F' // Cor da estrada
    des.fillRect(0, 55, 2000, 630)

    // Desenha as calcadas
    calcadaSuperior.des_calcada()
    calcadaInferior.des_calcada()

    // Desenha os meios-fios
    meioFioSuperior.des_meiofio()
    meioFioInferior.des_meiofio()

    // Desenha as faixas de pedestres (opcional)
    faixa1.des_faixa()
    faixa2.des_faixa()

    // Desenha as marcações da estrada (linhas)
    des.strokeStyle = 'yellow'
    des.lineWidth = 3

    // Linha divisória central (tracejada)
    for (let i = 0; i < 2000; i += 60) {
        des.beginPath()
        des.moveTo(i, 370)
        des.lineTo(i + 30, 370)
        des.stroke()
    }
}

// Movimento da calçada (se quiser que ela se mova com o cenário)
calcadaSuperior.mov_est = function () {
    this.x -= 3
    if (this.x < -30) {
        this.x = 2000
    }
}

calcadaInferior.mov_est = function () {
    this.x -= 3
    if (this.x < -30) {
        this.x = 2000
    }
}