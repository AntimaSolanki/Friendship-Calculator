window.onload=function(){
    let button=document.getElementById("calculate");
    button.addEventListener("click",calculateFriendship)
}
function calculateFriendship(){
    let yourname=document.getElementById("your name").value;
    let Friendname=document.getElementById("friend-name").value;
    
    if(yourname!=""&&Friendname!=""){
        let percentage=Math.floor(math.randam()*101);
        document.getElementsById("result-messsage").innerText=yourname+"and"+Friendname +"'s chnace of friendship :"
        document.getElementsById("result-messsage").innerText=percentage.toString()+"%"

    }
}