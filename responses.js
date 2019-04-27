function startListeners(){
    canvas.addEventListener('mousedown', holding);
    canvas.addEventListener('mousemove', piece);
    canvas.addEventListener('mouseup', drop);
}

function getMouesPosition(pos) {
    var mouseX = pos.offsetX * canvas.width / canvas.clientWidth | 0;
    var mouseY = pos.offsetY * canvas.height / canvas.clientHeight | 0;
    return {x: mouseX, y: mouseY};
}

function holding(){

}

function piece(pos){
    const position = getMouesPosition(pos);
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    
    if(position.x >= 350){
        const charIndex = Math.floor(position.x / 87.5) - 4;
        const number = Math.floor(position.y / 87.5);
        
        return chars[charIndex] + number;
    }
}

function drop(){

}