const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

window.onload = function start(){
    startBoard();
}

function startBoard(){
    let xPos = 350;
    let yPos = 0;

    // White Pieces
    let wPawn = document.getElementById('whitePawn');
    let wTower = document.getElementById('whiteTower');
    let wBishop = document.getElementById('whiteBishop');
    let wKing = document.getElementById('whiteKing');
    let wQueen = document.getElementById('whiteQueen');
    let wHorse = document.getElementById('whiteHorse');
    

    // Black Pieces
    let bPawn = document.getElementById('blackPawn');
    let bTower = document.getElementById('blackTower');
    let bBishop = document.getElementById('blackBishop');
    let bKing = document.getElementById('blackKing');
    let bQueen = document.getElementById('blackQueen');
    let bHorse = document.getElementById('blackHorse');


    for(let w = 0; w < 8; w++){
        for(let h = 0; h < 8; h++){
            if((w+h)%2 === 0){
               ctx.fillStyle = "white";
            }else{
                ctx.fillStyle = "#8B4513";
            }
                
            ctx.fillRect(xPos, yPos, 87.5, 87.5);        

            switch(w){
                case 1:
                    ctx.drawImage(wPawn, xPos, yPos, 87.5, 87.5);
                    break;
                case 6:
                    ctx.drawImage(bPawn, xPos, yPos, 87.5, 87.5);
                    break;
                case 0:
                    if(h === 0 || h === 7){
                        ctx.drawImage(wTower, xPos, yPos, 87.5, 87.5);
                    }else if(h === 1 || h === 6){
                        ctx.drawImage(wHorse, xPos, yPos, 87.5, 87.5);
                    }else if(h === 2 || h === 5){
                        ctx.drawImage(wBishop, xPos, yPos, 87.5, 87.5);
                    }else if(h === 4){
                        ctx.drawImage(wQueen, xPos, yPos, 87.5, 87.5);
                    }else{
                        ctx.drawImage(wKing, xPos, yPos, 87.5, 87.5);
                    }
                    break;
                case 7:
                    if(h === 0 || h === 7){
                        ctx.drawImage(bTower, xPos, yPos, 87.5, 87.5);
                    }else if(h === 1 || h === 6){
                        ctx.drawImage(bHorse, xPos, yPos, 87.5, 87.5);
                    }else if(h === 2 || h === 5){
                        ctx.drawImage(bBishop, xPos, yPos, 87.5, 87.5);
                    }else if(h === 4){
                        ctx.drawImage(bQueen, xPos, yPos, 87.5, 87.5);
                    }else{
                        ctx.drawImage(bKing, xPos, yPos, 87.5, 87.5);
                    }
                    break;
            }

            yPos += 87.5;
        }
        xPos += 87.5;
        yPos = 0;
    }
}