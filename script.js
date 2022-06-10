const ctx = document.getElementById("canvas").getContext("2d");
ctx.fillStyle = "blue";
const game = {};
let paused = false;
let timeout =  false;
game.pos = {x: 0, y: 0};
game.food = [];
game.score = 0;
game.move = {
    up: function() {
            if (game.pos.y > 0 && paused == false) {
                game.pos.y--;
            }
        },
    down: function() {
            if (game.pos.y < 19 && paused == false) {
                game.pos.y++;
            }
        },
    left: function() {
            if (game.pos.x > 0 && paused == false) {
                game.pos.x--;
            }
        },
    right: function() {
            if (game.pos.x < 39 && paused == false) {
                game.pos.x++;
            }
        }
}

function control(input) {
    let key = input.key;
    if (["w", "a", "s", "d", " "].includes(key) && timeout == false) {
        switch(key) {
            case "w":
                game.move.up();
                break;
            case "a":
                game.move.left();
                break;
            case "s":
                game.move.down();
                break;
            case "d":
                game.move.right();
                break;
            case " ":
                if (paused == true) {
                    paused = false;
                } else {
                    paused = true;
                }
                break;
        }
        for (let i = 0; i < game.food.length; i++) {
            if (game.food[i].x == game.pos.x && game.food[i].y == game.pos.y) {
                game.food.splice(i, 1);
                game.score++;
            }
        }
    }
}

function render() {
    if (paused == false) {
        ctx.clearRect(0, 0, 800, 400);
        ctx.fillStyle = "blue";
        ctx.fillRect(game.pos.x * 20, game.pos.y * 20, 20, 20);
        ctx.fillStyle = "red";
        for (let i = 0; i < game.food.length; i++) {
            ctx.fillRect(game.food[i].x * 20 + 5, game.food[i].y * 20 + 5, 10, 10);
        }
        document.getElementById("score").innerHTML = "score: " + game.score;
    } else {
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(0, 0, 800, 400);
        ctx.fillStyle = "gray";
        ctx.fillRect(340, 120, 40, 160);
        ctx.fillRect(420, 120, 40, 160);
    }
}

function addFood() {
    if (paused == false) {
        let ax = Math.round(Math.random() * 39); let ay = Math.round(Math.random() * 19);
        let food = {};
        food.x = ax; food.y = ay;
        game.food.push(food);
    }
}

function timeFunc() {
    timeout = false;
}
setInterval(addFood, 3000);
setInterval(render, 25);
setInterval(timeFunc, 50);