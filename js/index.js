let inputDir ={x: 0,y: 0};
const foodsound = new Audio('Bonk-sound-effect.mp3');
const gameOversound = new Audio('snake_danger.mp3');
const Eat = new Audio('food.mp3');
const gameOver = new Audio('gameover.mp3');
let hiscore = 0;
let speed =9;
let lastPainttime= 0;
let score = 0;
let snakeArr = [
    {
        x:13,
        y:13,
    },
    {
        x:13,
        y:14,
    }
]
initialObst = [{x:5,y:5},{x:6,y:5},{x:5,y:6},{x:15,y:12},{x:15,y:13},{x:15,y:14},{x:15,y:15},{x:14,y:15}];

obst = [{x:5,y:5},{x:6,y:5},{x:5,y:6},{x:15,y:12},{x:15,y:13},{x:15,y:14},{x:15,y:15},{x:14,y:15}];
food = {x:6,y:7};

// alert('press any key to play');

//Game functions

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPainttime)/1000 < 1/speed){
        return;
    }
    lastPainttime = ctime;
    gameEngine();
}
function collide(arr){
    if(arr[0].x >18 || arr[0].y >18 || arr[0].x<1 || arr[0].y<1){
        return true;
    }
    for(let i=0;i<obst.length;i++){
        if(arr[0].x===obst[i].x && arr[0].y===obst[i].y){
            return true;
        }
    }
    for (let i = 0; i<arr.length-2;i++){
        if(arr[0].x===arr[i+1].x && arr[0].y===arr[i+1].y){
            return true;
        }
    }
    return false;
}
function gameEngine(){
    //part 1 : updating the snake array

    if(snakeArr[0].y<1){
        snakeArr[0].y = 18;
        // break;
    }
    if(snakeArr[0].x<1){
        snakeArr[0].x =18;
    }
    if(snakeArr[0].x>18){
        snakeArr[0].x=1;
    }
    if(snakeArr[0].y>18){
        snakeArr[0].y=1;
    }
    if(collide(snakeArr)){
        // gameOversound.play();
        gameOver.play();
        
        // hiscore = Math.max(score,hiscore);
        inputDir={x:0,y:0}
        alert('Game Over! press Ok to play again');
        gameOver.pause();
        // gameOversound.pause();
        snakeArr=[{x:13,y:13},{x:13,y:14}];
        score=0;
        if(score===0){
            obst = initialObst;

        }
    }
    

    //if snake have eatan the food , increament the score and snake length and regenerate the food
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y ){
        //    foodsound.play();
           Eat.play();
           snakeArr.unshift({x:snakeArr[0].x + inputDir.x , y:snakeArr[0].y + inputDir.y});
           food = {x: Math.round(2+15*Math.random()),y: Math.round(2+15*Math.random())};
        for(let i=0;i<obst.length;i++){
            if(food.x===obst[i].x && food.y===obst[i].y){
                 food = {x: Math.round(2+15*Math.random()),y: Math.round(2+15*Math.random())};
            
        }
    }
         score++;
    
         scoreboard.innerHTML=" Score : "+score;





            if(score===15){
                food={x:3,y:3};
                alert('Congratulations! you have completed level 1 \nPress Ok to play level 2 ');
                obst=[{x:0,y:0}];
                for(let  i=2;i<19;i++){
                    obst.unshift({x:1,y:i});
                    obst.unshift({x:i,y:1});
                    obst.unshift({x:18,y:i});
                    obst.unshift({x:i,y:18});
                }
                inputDir={x:0,y:0};
                snakeArr=[{x:13,y:13},{x:13,y:14}];
            }

    
            //Code of Level 2 starts here
            if(score==25){
                food={x:3,y:3};
                alert('Congratulations! you have completed level 2 \nPress Ok to play level 3');
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
            for(let i=5;i<14;i++){
                obst.unshift({x:i,y:8});
                obst.unshift({x:i,y:11});
            }
            
            inputDir={x:0,y:0};
            snakeArr=[{x:13,y:13},{x:13,y:14}];
            
        }
        if(score>5){




            for(let i=0;i<obst.length;i++){
                if(food.x===obst[i].x && food.y===obst[i].y){
                     food = {x: Math.round(2+15*Math.random()),y: Math.round(2+15*Math.random())};
                }
            }
            if(collide(snakeArr)){
    
                // obst = initialObst;
                inputDir={x:0,y:0}
                alert('Game Over! press Ok to play again');
                obst = initialObst;
                // gameOversound.pause();
                snakeArr=[{x:13,y:13},{x:13,y:14}];
                score=0;
            }
        }
    
    }








    for (let i = snakeArr.length-2; i>=0; i--){
        snakeArr[i+1]={...snakeArr[i]};

    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    
    //part 2 : display the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
            board.appendChild(snakeElement);
            // continue;
        }
        else{

            snakeElement.classList.add('snake');
            board.appendChild(snakeElement);
        }
        
    });
    // Display the food
    if(score!=14 && score!=24){



        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
    }
    else{
        foodE = document.createElement('div');
        foodE.style.gridRowStart = food.y;
        foodE.style.gridColumnStart = food.x;
        foodE.classList.add('foody')
        board.appendChild(foodE);

    }

    // obstacle = document.createElement('div');
    // obstacle.style.gridColumnStart = obst[0].y;
    // obstacle.style.gridRowStart = obst[0].x;
    // obstacle.style.gridColumnStart = obst[1].y;
    // obstacle.style.gridRowStart = obst[1].y;
    // obstacle.classList.add('obst');
    // board.appendChild(obstacle);
    for(let i=0;i<obst.length;i++){
        obstacle = document.createElement('div');
        obstacle.style.gridColumnStart = obst[i].x;
        obstacle.style.gridRowStart = obst[i].y;
        obstacle.classList.add('obst');
        board.appendChild(obstacle);
    }
}





//Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0,y:-1};
    
    switch (e.key) {
        case "ArrowUp":
            console.log("arrowUP")
            if(inputDir.x===0 & inputDir.y===1){
                console.log("illigal move");
                inputDir={x:0,y:1};
            }
            else{
                inputDir={x:0,y:-1};
            }
            break;
        case "ArrowDown":
            console.log("arrowDown")
            inputDir={x:0,y:1}
            break;
        case "ArrowLeft":
            console.log("arrowLeft")
            inputDir={x:-1,y:0}
            break;
        case "ArrowRight":
            console.log("arrowRight")
            inputDir={x:1,y:0}
            break;    
        default:
            break;
    }
})

