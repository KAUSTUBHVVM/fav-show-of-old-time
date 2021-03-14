var tom,tomImg,jerry,jerryImg,bgImg

function preload ()
{
tomImg = loadImage(images/cat1.png);
jerryImg = loadImage(images/mouse1.png);
bgImg = loadImage(images/garden.png);
}
function setup(){
    createCanvas(1000,800);

tom = createSprites(700,700,60,60)
tom.addImage(tomImg);

jerry = createSprites(300,700,60,60)
jerry.addImage(jerryImg);

}

function draw() {

    background.addImage(bgImg);


    drawSprites();
}


function keyPressed(){




}
