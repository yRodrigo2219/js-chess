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

function verticalCheck(initPos, finPos, char){
    if((finPos - initPos) > 0){
        for(let n = 1; n < (finPos - initPos); n++){
            let nextCord = initPos+n;
            if(board[char][nextCord.toString()] != '') return false;
        }
        return true;
    }else{
        for(let n = 1; n < (finPos - initPos)*-1 ; n++){
            let nextCord = initPos-n;
            if(board[char][nextCord.toString()] != '') return false;
        }
        return true;
    }
}

function horizontalCheck(initPos, finPos, number){
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if((finPos - initPos) > 0){
        for(let n = 1; n < (finPos - initPos); n++){
            let nextCord = initPos+n;
            if(board[chars[nextCord]][number] != '') return false;
        }
        return true;
    }else{
        for(let n = 1; n < (finPos - initPos)*-1 ; n++){
            let nextCord = initPos-n;
            if(board[chars[nextCord]][number] != '') return false;
        }
        return true;
    }
}

function diagonalCheck(finCharIndex, initCharIndex, finNumb, initNumber){
    const horizontal = finCharIndex - initCharIndex;
    const vertical = finNumb - initNumber;
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    
    if(Math.abs(horizontal) != Math.abs(vertical)){
        return false;
    }

    if(horizontal > 0 && vertical > 0){
        for(let i = 1; i < horizontal; i++){ // Tanto faz, se for um movimento válido Horizontal == Vertical
            let numb = initNumber + i;
            if(board[chars[initCharIndex + i]][numb.toString()] != '') return false;
        }
    }else if(horizontal < 0 && vertical < 0){
        for(let i = 1; i < Math.abs(horizontal); i++){ // Tanto faz, se for um movimento válido Horizontal == Vertical
            let numb = initNumber - i;
            if(board[chars[initCharIndex - i]][numb.toString()] != '') return false;
        }
    }else if(horizontal > 0 && vertical < 0){
        for(let i = 1; i < horizontal; i++){ // Tanto faz, se for um movimento válido Horizontal == Vertical
            let numb = initNumber - i;
            if(board[chars[initCharIndex + i]][numb.toString()] != '') return false;
        }
    }else{
        for(let i = 1; i < Math.abs(horizontal); i++){ // Tanto faz, se for um movimento válido Horizontal == Vertical
            let numb = initNumber + i;
            if(board[chars[initCharIndex - i]][numb.toString()] != '') return false;
        }
    }

    return true;
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

    move(position){
        this.exclude();

        this.position = position;
        this.squareColor = positionToSquareColor(position);

        captured(position);

        this.draw();

        return true;
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
                    (momentNumber+1 === number && board[char][number].team === 'black') ||
                    (momentNumber-1 === number && board[char][number].team === 'black')){
                        this.firstMove = false;
                        super.move(position);

                    }
            }else if(this.firstMove){ // Se for o 1 movimento
                if(momentCharIndex+2 === charIndex){
                    if(momentNumber === number && horizontalCheck(momentCharIndex, charIndex, number)){
                        this.firstMove = false;
                        super.move(position);

                    }
                }
            }
        }else{
            if(momentCharIndex-1 === charIndex){
                if((momentNumber === number && board[char][number] === '') ||
                    (momentNumber+1 === number && board[char][number].team === 'white') ||
                    (momentNumber-1 === number && board[char][number].team === 'white')){
                        this.firstMove = false;
                        super.move(position);
                        
                    }
            }else if(this.firstMove){ // Se for o 1 movimento
                if(momentCharIndex-2 === charIndex){
                    if(momentNumber === number && horizontalCheck(momentCharIndex, charIndex, number)){
                        this.firstMove = false;
                        super.move(position);
                        
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

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);

        if(board[char][number].team != this.team
            && ((number === momentNumber && horizontalCheck(momentCharIndex, charIndex, number))
                || (char === momentChar && verticalCheck(momentNumber, number, char))
                || (char != momentChar && number != momentNumber && diagonalCheck(charIndex, momentCharIndex, number, momentNumber)))
                ){
            super.move(position);
        }   
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

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);

        if((Math.abs(number - momentNumber) + Math.abs(charIndex - momentCharIndex) === 1
            || (Math.abs(number - momentNumber) === 1 && Math.abs(charIndex - momentCharIndex) === 1)) 
            && board[char][number].team != this.team){
                super.move(position);

        }

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

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);

        if(char === momentChar && board[char][number].team != this.team){
            if(verticalCheck(momentNumber, number, char)){
                super.move(position);
                
            }
        }else if(number === momentNumber && board[char][number].team != this.team){
            if(horizontalCheck(momentCharIndex, charIndex, number)){
                super.move(position);
                
            }
        }
        
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

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);

        if(char != momentChar 
            && number != momentNumber
            && Math.abs(number - momentNumber) + Math.abs(charIndex - momentCharIndex) === 3
            && board[char][number].team != this.team){
                super.move(position);

        }
        
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

    move(position){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        let char = position.substring(0, 1);
        let charIndex = chars.indexOf(char);

        let number = position.substring(1, 2);
        number = parseInt(number);

        let momentChar = this.position.substring(0, 1);
        let momentCharIndex = chars.indexOf(momentChar);

        let momentNumber = this.position.substring(1, 2);
        momentNumber = parseInt(momentNumber);
        
        if(char != momentChar && number != momentNumber
            && board[char][number].team != this.team 
            && diagonalCheck(charIndex, momentCharIndex, number, momentNumber)){
                super.move(position);

        }        
    }
}