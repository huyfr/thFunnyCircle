function Circle(x, y, radius)
{
    this.x=x;
    this.y=y;
    this.radius=radius;
}
function createCircle()
{
    let ctx=document.getElementById("myCanvas").getContext("2d");
    let radius=Math.floor(Math.random()*100);
    let color=getRandomColor();
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
}
function getRandomRGB()
{
    return Math.floor(Math.random()*255);
}
function getRandomColor()
{
    let red=getRandomRGB();
    let blue=getRandomRGB();
    let green=getRandomRGB();
    return  "rgb("+red+","+blue+","+green+")";
}

function createMultipleCircle()
{
    for (let i=0; i<30; i++)
    {
        createCircle();
    }
}

createMultipleCircle();
