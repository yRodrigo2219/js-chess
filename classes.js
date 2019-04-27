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

class Pawn {
    constructor(piece, position, squareColor){
        this.piece = piece;
        this.position = position;
        this.squareColor = squareColor;
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

    move(pos){
        this.exclude();

        this.position = pos;
        this.squareColor = positionToSquareColor(pos);

        this.draw();
    }

}

class Queen {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
        });
    }
}

class King {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
        });
    }
}

class Tower {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
        });
    }
}

class Horse {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
        });
    }
}

class Bishop {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.drawImage(this.piece, xPos, yPos, 87.5, 87.5);
        });
    }

    exclude(){
        convertPosition(this.position, (xPos, yPos)=>{
            ctx.fillStyle = this.squareColor;
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
        });
    }
}