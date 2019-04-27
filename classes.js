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

class Pawn {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }

}

class Queen {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }
}

class King {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }
}

class Tower {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }
}

class Horse {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }
}

class Bishop {
    constructor(piece, position){
        this.piece = piece;
        this.position = position;
    }

    draw(piece, position){
        convertPosition(position, (xPos, yPos)=>{
            ctx.drawImage(piece, xPos, yPos, 87.5, 87.5);
        });
    }
}