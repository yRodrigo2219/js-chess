function convertPosition(position, callback){
    let xPos = 350;
    let yPos = 0;

    let char = position.substring(0, 1);
    let number = position.substring(1, 2);
    
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    xPos += chars.indexOf(char) * 87.5;
    yPos += number * 87.5;

    callback(xPos, yPos);
}

function positionToSquareColor(position){
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let char = position.substring(0, 1);
    let number = position.substring(1, 2);

    if((chars.indexOf(char) + parseInt(number)) % 2 === 0){
        return "white";
    }else{
        return "#8B4513";
    }
}

function captured(position){
    let char = position.substring(0, 1);
    let number = position.substring(1, 2);

    if(board[char][number] != ''){
        board[char][number].exclude();
    }
}

class Piece {
    constructor(piece, position, squareColor, team){
        this.piece = piece;
        this.position = position;
        this.squareColor = squareColor;
        this.team = team;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);

            const square = this.position;
            const char = square.substring(0, 1);
            const number = square.substring(1, 2);
            board[char][number] = this;
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);

            const square = this.position;
            const char = square.substring(0, 1);
            const number = square.substring(1, 2);
            board[char][number] = '';
        });
    }

}

class Pawn extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
        this.firstMove = true;
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const wPawn = document.getElementById('whitePawn');

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);
        
        if(this.piece === wPawn){
            if(momentCharIndex+1 === charIndex){
                if((momentNumber === number && board[char][number] === '') ||
                    (momentNumber+1 === number && board[char][number] != '') ||
                    (momentNumber-1 === number && board[char][number] != '')){

                        this.exclude();

                        this.position = position;
                        this.squareColor = positionToSquareColor(position);

                        captured(position);

                        this.draw();

                        this.firstMove = false;
                        return true;
                    }
            }else if(this.firstMove){ // Se for o 1 movimento
                if(momentCharIndex+2 === charIndex){
                    if(momentNumber === number && board[char][number] === ''){
                        this.exclude();
    
                        this.position = position;
                        this.squareColor = positionToSquareColor(position);
    
                        this.draw();
    
                        this.firstMove = false;
                        return true;
                    }
                }
            }
        }else{
            if(momentCharIndex-1 === charIndex){
                if((momentNumber === number && board[char][number] === '') ||
                    (momentNumber+1 === number && board[char][number] != '') ||
                    (momentNumber-1 === number && board[char][number] != '')){

                        this.exclude();

                        this.position = position;
                        this.squareColor = positionToSquareColor(position);

                        captured(position);

                        this.draw();

                        this.firstMove = false;
                        return true;
                    }
            }else if(this.firstMove){ // Se for o 1 movimento
                if(momentCharIndex-2 === charIndex){
                    if(momentNumber === number && board[char][number] === ''){
                        this.exclude();
    
                        this.position = position;
                        this.squareColor = positionToSquareColor(position);
    
                        this.draw();
    
                        this.firstMove = false;
                        return true;
                    }
                }
            }
        }
        
    }

}

class Queen extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);
        captured(pos);

        this.draw();
    }

}

class King extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);
        captured(pos);

        this.draw();
    }

}

class Tower extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);
        captured(pos);

        this.draw();
    }

}

class Horse extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);
        captured(pos);

        this.draw();
    }

}

class Bishop extends Piece {
    constructor(piece, position, squareColor, team){
        super(piece, position, squareColor, team);
    }

    draw(){
        super.draw();
    }

    exclude(){
        super.exclude();
    }

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);
        captured(pos);

        this.draw();
    }

}