canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent = "Empty";

var last_position_mouse_x, last_position_mouse_y;

color = "black";

line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent ="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent ="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent ="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_mouse_x= e.clientX - canvas.getBoundingClientRect().left;
    current_position_mouse_y= e.clientY - canvas.getBoundingClientRect().top;
    if (mouseEvent=="mouseDown"){

        color= document.getElementById("color_box").value;
        line_width= document.getElementById("width_box").value;
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = line_width;
        
        console.log("Last position of x and y are = ");
        console.log("x= " + last_position_mouse_x + " y = " + last_position_mouse_y);
        ctx.moveTo(last_position_mouse_x, last_position_mouse_y);

        console.log("Current position of x and y are = ");
        console.log("x= " + current_position_mouse_x + " y = " + current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
        ctx.stroke();
    }

    last_position_mouse_x = current_position_mouse_x;
    last_position_mouse_y = current_position_mouse_y;
}

function clearArea() {

    ctx.clearRect(0,0, canvas.width, canvas.height);
}