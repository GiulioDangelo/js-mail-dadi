const buttonEle = document.getElementById("dice-roll")

buttonEle.addEventListener("click",function(){
    const playerNum = Math.floor(Math.random() * 6) + 1;
    const cpuNum = Math.floor(Math.random() * 6) + 1;
    const playerEle = document.getElementById("player-result").innerHTML=(playerNum)
    const cpuEle = document.getElementById("cpu-result").innerHTML=(cpuNum)
    
    if (playerNum > cpuNum) {
        document.getElementById("conclusion").innerHTML=('player win')
    }
    else if (playerNum == cpuNum) {
        document.getElementById("conclusion").innerHTML=("it's a draw")
    }
    else{
        document.getElementById("conclusion").innerHTML=('cpu win')
    }
})