class Obj {
    constructor(x, y, w, h, a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_quad() {
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }
}

class Carro extends Obj {
    dir = 0

    mov_car() {
        this.y += this.dir

        // Limites para não sair da tela
        if (this.y < 50) this.y = 50
        if (this.y > 650) this.y = 650
    }

    des_carro_old() {
        // Roda dianteira esquerda (frente superior)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'white'
        des.rect(this.x + 55, this.y - 48, 10, 10)
        des.stroke()
        des.fill()

        // Roda dianteira direita (frente inferior)
        des.beginPath()
        des.rect(this.x + 55, this.y - 8, 10, 10)
        des.stroke()
        des.fill()

        // Roda traseira esquerda (trás superior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 52, 10, 10)
        des.stroke()
        des.fill()

        // Roda traseira direita (trás inferior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 8, 10, 10)
        des.stroke()
        des.fill()

        // Trapézio do corpo (Corpo principal rotacionado)
        des.beginPath()
        des.moveTo(this.x, this.y - 50)
        des.lineTo(this.x, this.y)
        des.lineTo(this.x + 50, this.y - 10)
        des.lineTo(this.x + 50, this.y - 40)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.stroke()
        des.fill()

        // Corpo frente (retângulo do "nariz")
        des.beginPath()
        des.rect(this.x + 50, this.y - 40, 20, 30)
        des.stroke()
        des.fill()

        // Asa frontal (vertical na ponta direita)
        des.beginPath()
        des.rect(this.x + 70, this.y - 50, 10, 50)
        des.stroke()
        des.fill()
    }
}

class CarroInimigo extends Obj {
    mov_car(velocidade) {
        this.x -= velocidade
    }

    des_carro_old() {
        // Roda dianteira esquerda (frente superior)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'white'
        des.rect(this.x + 55, this.y - 48, 10, 10)
        des.stroke()
        des.fill()

        // Roda dianteira direita (frente inferior)
        des.beginPath()
        des.rect(this.x + 55, this.y - 8, 10, 10)
        des.stroke()
        des.fill()

        // Roda traseira esquerda (trás superior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 52, 10, 10)
        des.stroke()
        des.fill()

        // Roda traseira direita (trás inferior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 8, 10, 10)
        des.stroke()
        des.fill()

        // Trapézio do corpo (Corpo principal rotacionado)
        des.beginPath()
        des.moveTo(this.x, this.y - 50)
        des.lineTo(this.x, this.y)
        des.lineTo(this.x + 50, this.y - 10)
        des.lineTo(this.x + 50, this.y - 40)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.stroke()
        des.fill()

        // Corpo frente (retângulo do "nariz")
        des.beginPath()
        des.rect(this.x + 50, this.y - 40, 20, 30)
        des.stroke()
        des.fill()

        // Asa frontal (vertical na ponta direita)
        des.beginPath()
        des.rect(this.x + 70, this.y - 50, 10, 50)
        des.stroke()
        des.fill()
    }
}

class Estrada extends Obj {
    mov_est(velocidade) {
        this.x -= velocidade
        if (this.x < -30) {
            this.x = 1500
        }
    }
}