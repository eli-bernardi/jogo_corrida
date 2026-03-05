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
        des.fillRect(this.x, this.y, this.w, this.h, this.a)
    }
}

class Carro extends Obj {
    des_carro() {
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }

    dir = 0
    pos = 0
    vida = 5
    pontos = 0

    mov_car() {
        this.y += this.dir
        this.x += this.pos
    }

    des_carro_old() {

        // Roda dianteira esquerda (frente superior)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'white'
        des.rect(this.x + 55, this.y - 48, 10, 10)  // Ajustado para alinhar com a frente
        des.stroke()
        des.fill()

        // Roda dianteira direita (frente inferior)
        des.beginPath()
        des.rect(this.x + 55, this.y - 8, 10, 10)   // Ajustado para alinhar com a frente
        des.stroke()
        des.fill()

        // Roda traseira esquerda (trás superior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 52, 10, 10)   // Ajustado para alinhar com a traseira
        des.stroke()
        des.fill()

        // Roda traseira direita (trás inferior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 8, 10, 10)    // Ajustado para alinhar com a traseira
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
    colid(objeto) {
        if ((this.x < objeto.x + objeto.w) &&
            (this.x + this.w > objeto.x) &&
            (this.y < objeto.y + objeto.h) &&
            (this.y + this.h > objeto.y)) {
            return true
        } else {
            return false
        }
    }

    point(objeto) {
        if (objeto.x <= -100) {
            return true
        } else {
            return false
        }
    }
}

class CarroInimigo extends Obj {
    recomeca() {
        this.x = 1300
        this.y = Math.floor(Math.random() * (638 - 62) + 62)
    }

    mov_car() {
        this.x -= 6
        if (this.x < -100) {
            this.recomeca()
        }
    }
    des_carro_old() {
        // Roda dianteira esquerda (frente superior)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'dark'
        des.fillStyle = 'white'
        des.rect(this.x + 55, this.y - 48, 10, 10)  // Ajustado para alinhar com a frente
        des.stroke()
        des.fill()

        // Roda dianteira direita (frente inferior)
        des.beginPath()
        des.rect(this.x + 55, this.y - 8, 10, 10)   // Ajustado para alinhar com a frente
        des.stroke()
        des.fill()

        // Roda traseira esquerda (trás superior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 52, 10, 10)   // Ajustado para alinhar com a traseira
        des.stroke()
        des.fill()

        // Roda traseira direita (trás inferior)
        des.beginPath()
        des.rect(this.x + 5, this.y - 8, 10, 10)    // Ajustado para alinhar com a traseira
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
    mov_est() {
        this.x -= 3
        if (this.x < -30) {
            this.x = 1500
        }
    }
}