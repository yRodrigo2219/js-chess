const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const board = [];

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
        let wPawn = document.getElementById('whitePawn');
        let wTower = document.getElementById('whiteTower');
        let wBishop = document.getElementById('whiteBishop');
        let wKingI = document.getElementById('whiteKing');
        let wQueenI = document.getElementById('whiteQueen');
        let wHorse = document.getElementById('whiteHorse');
        

        // Black Pieces
        let bPawn = document.getElementById('blackPawn');
        let bTower = document.getElementById('blackTower');
        let bBishop = document.getElementById('blackBishop');
        let bKingI = document.getElementById('blackKing');
        let bQueenI = document.getElementById('blackQueen');
        let bHorse = document.getElementById('blackHorse');

        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        for(let w = 0; w < 8; w++){
            let colls = [];
            for(let h = 0; h < 8; h++){
                colls[h] = chars[w] + h;

                if((w+h)%2 === 0){
                ctx.fillStyle = "white";
                }else{
                    ctx.fillStyle = "#8B4513";
                }
                    
                ctx.fillRect(xPos, yPos, 87.5, 87.5);        

                switch(w){
                    case 1:
                        eval(`wPawn${h}.draw(wPawn, colls[h])`);
                        break;
                    case 6:
                        eval(`bPawn${h}.draw(bPawn, colls[h])`);
                        break;
                    case 0:
                        if(h === 0 || h === 7){
                            h === 0 ? wTower0.draw(wTower, colls[h]) : wTower1.draw(wTower, colls[h]);
                        }else if(h === 1 || h === 6){
                            h === 1 ? wHorse0.draw(wHorse, colls[h]) : wHorse1.draw(wHorse, colls[h]);
                        }else if(h === 2 || h === 5){
                            h === 2 ? wBishop0.draw(wBishop, colls[h]) : wBishop1.draw(wBishop, colls[h]);
                        }else if(h === 4){
                            wQueen.draw(wQueenI, colls[h]);
                        }else{
                            wKing.draw(wKingI, colls[h]);
                        }
                        break;
                    case 7:
                        if(h === 0 || h === 7){
                            h === 0 ? bTower0.draw(bTower, colls[h]) : bTower1.draw(bTower, colls[h]);
                        }else if(h === 1 || h === 6){
                            h === 1 ? bHorse0.draw(bHorse, colls[h]) : bHorse1.draw(bHorse, colls[h]);
                        }else if(h === 2 || h === 5){
                            h === 2 ? bBishop0.draw(bBishop, colls[h]) : bBishop1.draw(bBishop, colls[h]);
                        }else if(h === 4){
                            bQueen.draw(bQueenI, colls[h]);
                        }else{
                            bKing.draw(bKingI, colls[h]);
                        }
                        break;
                }
                board[w] = colls;
                yPos += 87.5;
            }
            xPos += 87.5;
            yPos = 0;
        }
        resolve();
    });
}