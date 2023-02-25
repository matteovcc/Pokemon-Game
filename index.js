const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d") // 2d context

canvas.width = 1024
canvas.height = 576

c.fillStyle = "white"


c.fillRect(0, 0, canvas.width, canvas.height) // clear the canvas



const image = new Image() // creiamo la immagine del background canvas
image.src = "./images/Pellet Town.png" 

const playerImage = new Image() 
playerImage.src = "./images/playerDown.png" //creiamo il player

image.onload = () => {
    c.drawImage(image, -785, -650) //disegnamo l'immagine al caricare della pagina -700px asse x e -500px asse y
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 2,
        canvas.height / 2 - playerImage.height / 2,   //queste rappresentano le coordinate del player 
        playerImage.width / 4,
        playerImage.height
    ) 
}




    



