const endDate = "27 February 2024 12:38 AM";

document.getElementById("end-Date").innerText=endDate;
const inputs = document.querySelectorAll("input");

const clock=()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;  //converted from ms to sec
    
    if(diff<0){
        return;
    }
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);

}
clock();

setInterval(
    ()=>{
        clock()
    }, 1000
);