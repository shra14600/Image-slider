let total=3;
var count=1;
let left=document.getElementById("left");
left.addEventListener("click",leftside);
function leftside(e){
    document.getElementById(`${count}`).classList.add("in-active");
    count=count+1;
    if(count>total){
        count=1;
    }
    else if(count<1){
        count=total;
    }
    document.getElementById(`${count}`).classList.remove("in-active");
}
    let right=document.getElementById("right");
    right.addEventListener("click",rightside);
    function rightside(e){
    document.getElementById(`${count}`).classList.add("in-active");
    count=count+1;
    if(count>total){
        count=1;
    }
    else if(count<1){
        count=total;
    }
    document.getElementById(`${count}`).classList.remove("in-active");
}