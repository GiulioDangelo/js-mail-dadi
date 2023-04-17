const playerNum = Math.floor(Math.random() * 6) + 1;
const cpuNum = Math.floor(Math.random() * 6) + 1;

  if (playerNum > cpuNum) {
    console.log('player win')
  }
  else if (playerNum == cpuNum) {
    console.log("it's a draw")
  }
  else{
    console.log('cpu win')
  }

  console.log(playerNum)
  console.log(cpuNum)