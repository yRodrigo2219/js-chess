const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

(()=>{ //Start
    createBoard();

})();

function createBoard(){
    let xPos = 350;
    let yPos = 0;

    for(let w = 0; w < 8; w++){
        for(let h = 0; h < 8; h++){
            if((w+h)%2 === 0){
                ctx.fillStyle = "white";
            }else{
                ctx.fillStyle = "black";
            }
            
            ctx.fillRect(xPos, yPos, 87.5, 87.5);
            yPos += 87.5;
        }
        xPos += 87.5;
        yPos = 0;
    }
    
}