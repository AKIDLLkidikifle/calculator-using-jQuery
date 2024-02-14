var display = $("#display-number");

function readyToDisplay(input){
     display.val(display.val()+input);
}

function calculate(){
    display.val(eval(display.val()));
}
 function del(){
    display.val('');
 }

 function delLastItem(){
    display.val(display.val().toString().slice(0, -1));
 }
