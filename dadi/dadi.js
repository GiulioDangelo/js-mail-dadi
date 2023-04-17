function palyerNum(min, max) {
  return Math.random() * (6 - 1) + 1;
}

function cpuNum(min, max) {
    return Math.random() * (6 - 1) + 1;
  }


  if (palyerNum > cpuNum) {
    console.log('player win')
  }
  else if (palyerNum == cpuNum) {
    console.log("it's a draw")
  }
  else{
    console.log('cpu win')
  }