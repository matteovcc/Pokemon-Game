const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d") // 2d context


canvas.width = 1024
canvas.height = 576

ctx.fillStyle = "antiquewhite"

ctx.fillRect(0, 0, canvas.width, canvas.height) // clear the canvas



const image = new Image() // create a new image

image.src = "./images/Pellet Town.png" 


image.onload = () => {
    ctx.drawImage(image, -700, -500) //disegnamo l'immagine al caricare della pagina -700px asse x e -500px asse y

}
//console.log(canvas)