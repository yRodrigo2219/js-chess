const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const wPawn0 = new Pawn();  const bPawn0 = new Pawn();
const wPawn1 = new Pawn();  const bPawn1 = new Pawn();
const wPawn2 = new Pawn();  const bPawn2 = new Pawn();
const wPawn3 = new Pawn();  const bPawn3 = new Pawn();
const wPawn4 = new Pawn();  const bPawn4 = new Pawn();
const wPawn5 = new Pawn();  const bPawn5 = new Pawn();
const wPawn6 = new Pawn();  const bPawn6 = new Pawn();
const wPawn7 = new Pawn();  const bPawn7 = new Pawn();

const wQueen = new Queen();  const bQueen = new Queen();

const wKing = new King();  const bKing = new King();

const wTower0 = new Tower();  const bTower0 = new Tower();
const wTower1 = new Tower();  const bTower1 = new Tower();

const wHorse0 = new Horse();  const bHorse0 = new Horse();
const wHorse1 = new Horse();  const bHorse1 = new Horse();

const wBishop0 = new Bishop();  const bBishop0 = new Bishop();
const wBishop1 = new Bishop();  const bBishop1 = new Bishop();


window.onload = async function start(){
    await startBoard().then(startListeners());
}

function startBoard(){
    return new Promise((resolve, reject)=>{
        let xPos = 350;
        let yPos = 0;

        // White Pieces
        const wPawn = document.getElementById('whitePawn');
        const wTower = document.getElementById('whiteTower');
        const wBishop = document.getElementById('whiteBishop');
        const wKingI = document.getElementById('whiteKing');
        const wQueenI = document.getElementById('whiteQueen');
        const wHorse = document.getElementById('whiteHorse');
        

        // Black Pieces
        const bPawn = document.getElementById('blackPawn');
        const bTower = document.getElementById('blackTower');
        const bBishop = document.getElementById('blackBishop');
        const bKingI = document.getElementById('blackKing');
        const bQueenI = document.getElementById('blackQueen');
        const bHorse = document.getElementById('blackHorse');

        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        for(let w = 0; w < 8; w++){
            let colls = [];
            for(let h = 0; h < 8; h++){
                colls[h] = chars[w] + h;
                let sColor;

                if((w+h)%2 === 0){
                    sColor = "white";
                    ctx.fillStyle = sColor;
                }else{
                    sColor = "#8B4513";
                    ctx.fillStyle = sColor;
                }
                    
                ctx.fillRect(xPos, yPos, 87.5, 87.5);        

                switch(w){
                    case 1:
                        eval(`wPawn${h}.piece = wPawn;wPawn${h}.position = colls[h];wPawn${h}.squareColor = sColor;wPawn${h}.draw();`);
                        break;
                    case 6:
                        eval(`bPawn${h}.piece = bPawn;bPawn${h}.position = colls[h];bPawn${h}.squareColor = sColor;bPawn${h}.draw();`);
                        break;
                    case 0:
                        if(h === 0 || h === 7){
                            if(h === 0){
                                wTower0.piece = wTower; wTower0.position = colls[h]; wTower0.squareColor = sColor; wTower0.draw();
                            }else{
                                wTower1.piece = wTower; wTower1.position = colls[h]; wTower1.squareColor = sColor; wTower1.draw();
                            }
                        }else if(h === 1 || h === 6){
                            if(h === 1){
                                wHorse0.piece = wHorse; wHorse0.position = colls[h]; wHorse0.squareColor = sColor; wHorse0.draw();
                            }else{
                                wHorse1.piece = wHorse; wHorse1.position = colls[h]; wHorse1.squareColor = sColor; wHorse1.draw();
                            }
                        }else if(h === 2 || h === 5){
                            if(h === 2){
                                wBishop0.piece = wBishop; wBishop0.position = colls[h]; wBishop0.squareColor = sColor; wBishop0.draw();
                            }else{
                                wBishop1.piece = wBishop; wBishop1.position = colls[h]; wBishop1.squareColor = sColor; wBishop1.draw();
                            }
                        }else if(h === 4){
                            wQueen.piece = wQueenI; wQueen.position = colls[h]; wQueen.squareColor = sColor; wQueen.draw();
                        }else{
                            wKing.piece = wKingI; wKing.position = colls[h]; wKing.squareColor = sColor; wKing.draw();
                        }
                        break;
                    case 7:
                        if(h === 0 || h === 7){
                            if(h === 0){
                                bTower0.piece = bTower; bTower0.position = colls[h]; bTower0.squareColor = sColor; bTower0.draw();
                            }else{
                                bTower1.piece = bTower; bTower1.position = colls[h]; bTower1.squareColor = sColor; bTower1.draw();
                            }
                        }else if(h === 1 || h === 6){
                            if(h === 1){
                                bHorse0.piece = bHorse; bHorse0.position = colls[h]; bHorse0.squareColor = sColor; bHorse0.draw();
                            }else{
                                bHorse1.piece = bHorse; bHorse1.position = colls[h]; bHorse1.squareColor = sColor; bHorse1.draw();
                            }
                        }else if(h === 2 || h === 5){
                            if(h === 2){
                                bBishop0.piece = bBishop; bBishop0.position = colls[h]; bBishop0.squareColor = sColor; bBishop0.draw();
                            }else{
                                bBishop1.piece = bBishop; bBishop1.position = colls[h]; bBishop1.squareColor = sColor; bBishop1.draw();
                            }
                        }else if(h === 3){
                            bQueen.piece = bQueenI; bQueen.position = colls[h]; bQueen.squareColor = sColor; bQueen.draw();
                        }else{
                            bKing.piece = bKingI; bKing.position = colls[h]; bKing.squareColor = sColor; bKing.draw();
                        }
                        break;
                }
                //board[w] = colls;
                yPos += 87.5;
            }
            xPos += 87.5;
            yPos = 0;
        }
        resolve();
    });
}