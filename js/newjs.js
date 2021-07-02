obst2 = [{x:1,y:1}];
for(let i=1;i<18;i++){
    obst2.unshift({x:i,y:1});
    // obst2.unshift({x:18,y:i});
}












alert('Next Level');
            obst=[{x:0,y:0}];
            // obst.unshift({x:7,y:7});
            for(let i=1;i<8;i++){
                obst.unshift({x:i,y:1});
                obst.unshift({x:i,y:18});
                obst.unshift({x:1,y:i});
                obst.unshift({x:18,y:i});
                
            }
            for(let i=12;i<19;i++){
                obst.unshift({x:i,y:1});
                obst.unshift({x:i,y:18});
                obst.unshift({x:1,y:i});
                obst.unshift({x:18,y:i});
            }

if(collide(snakeArr)){

    // obst = initialObst;
    inputDir={x:0,y:0}
    alert('Game Over! press any key to play again');
    obst = initialObst;
    // gameOversound.pause();
    snakeArr=[{x:13,y:13},{x:13,y:14}];
    score=0;
}

inputDir={x:0,y:0};
snakeArr=[{x:13,y:13},{x:13,y:14}];
