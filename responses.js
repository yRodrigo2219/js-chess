var pieceSelected = '';

function startListeners(){
    canvas.addEventListener('click', select);
    canvas.addEventListener('mousemove', piece);
    //canvas.addEventListener('mouseup', drop);
}

function nextPlayer(){

}

function getMouesPosition(pos) {
    var mouseX = pos.offsetX * canvas.width / canvas.clientWidth | 0;
    var mouseY = pos.offsetY * canvas.height / canvas.clientHeight | 0;
    return {x: mouseX, y: mouseY};
}

function select(pos){
    let square = piece(pos);
    if(square != 'out'){
        if(pieceSelected === ''){
            const char = square.substring(0, 1);
            const number = square.substring(1, 2);
            pieceSelected = board[char][number];
        }else{
            console.log(pieceSelected);
            if(pieceSelected.move(square)){
                nextPlayer();
            }
            pieceSelected = '';
        }
    }else{
        pieceSelected = '';
    }
    console.log(pieceSelected);
}

function piece(pos){
    const position = getMouesPosition(pos);
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    
    if(position.x >= 350 && position.x < 1050){
        const charIndex = Math.floor(position.x / 87.5) - 4;
        const number = Math.floor(position.y / 87.5);
        
        return chars[charIndex] + number;
    }
    return 'out';
}