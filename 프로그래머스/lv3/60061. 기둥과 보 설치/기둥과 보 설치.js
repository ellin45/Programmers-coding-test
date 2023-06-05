function solution (n, build_frame) {
  const answer = [];
  
  for(const frame of build_frame) {
    const [x, y, fr, isInstall] = frame;
    
    if(isInstall) buildFrame(answer, x, y, fr);
    else destroyFrame(answer, x, y, fr);
  }
  
  return answer.sort((a, b) => a[0] === b[0] ? a[1] === b[1] ? a[2] - b[2] : a[1] - b[1] : a[0] - b[0]);
}

const checkPillar = (ans, x, y) => {
    //기둥이 바닥에 설치되는 경우
  if(y === 0) return true;
    //바로 아래에 기둥이 있는 경우
  else if(ans.find(([a, b, fr]) => a===x && b===y-1 && fr === 0)) return true;
    //기둥이 보의 끝 위에 설치되는 경우
    else if(ans.find(([a, b, fr]) => a===x && b===y && fr===1)) return true;
    //기둥이 보의 시작부분 위에 설치되는 경우
  else if(ans.find(([a, b, fr]) => a===x-1 && b===y && fr===1)) return true;
  return false;
}

const checkPlate = (ans, x, y) => {
    //보 아래에 기둥이 있는 경우
  if(ans.find(([a, b, fr]) => a===x && b===y-1 && fr===0)) return true;
    //보의 한 쪽 끝 아래 기둥이 있는 경우
  else if(ans.find(([a, b, fr]) => a===x+1 && b===y-1 && fr===0)) return true;
    //보의 양 끝이 다른 보에 연결되어 있는 경우
  else if(ans.find(([a, b, fr]) => a===x+1 && b===y && fr===1) &&
          ans.find(([a, b, fr]) => a===x-1 && b===y && fr===1)) return true;
  return false;
}

const buildFrame = (ans, x, y, frame) => {
  if(frame) {
    if(checkPlate(ans, x, y)) ans.push([x, y, frame]);
  }
  else {
    if(checkPillar(ans, x, y)) ans.push([x, y, frame]);
  }
}

const destroyFrame = (ans, x, y, frame) => {
  const copy = ans.slice();
  const idx = ans.findIndex(([a, b, fr]) => a===x && b===y && fr===frame);
  
  copy.splice(idx, 1);
  
  for(const frs of copy) {
    const [xpos, ypos, fr] = frs;
    
    if(fr) {
      if(!checkPlate(copy, xpos, ypos)) return;
    }
    else {
      if(!checkPillar(copy, xpos, ypos)) return;
    }
  }
  //복사배열에서 idx의 위치의 1개요소 제거
  ans.splice(idx, 1);       
}
//제한 조건
//1. 바닥에 보 설치 안됨
//2.기둥은 위쪽 방향, 보는 오른쪽 방향으로 설치 또는 제거
//3.기둥 설치 조건: 바닥, 다른 기둥, 보의 한쪽 끝 상단부
//4. 보 설치 조건: 양쪽 끝이 다른 보와 연결 , 한쪽 끝이 기둥과 연결
// 보는 두개의 x 좌표를 차지, 설치된 x좌표가 x일때 시작점을 x-1으로 생각

//기둥의 경우
// 1.y좌표가 바닥이라면 설치가능
// 2.현재 좌표 기준 밑에 설치된 프레임이 기둥이면 설치 가능
//3. 현재 좌표 기준 밑에 설치된 프레임이 보의 끝 부분이면 설치 가능(보의 끝 부분 === x좌표)
//4. 현재 좌표 기준 밑에 설치된 프레임의 보의 시작 부분이면 설치 가능(보의 시작 부분 === x-1좌표)

//보의 경우
//1. 현재 좌표 기준 밑에 설치된 프레임이 기둥이면 설치 가능
//2. 현재 좌표 기준 밑에 보의 끝 부분에 걸치는 부분 밑에 설치된 프레임이 기둥이면 설치 가능
//3. 현재 좌표 기준 양 옆에 설치된 프레임이 모두 보라면 설치 가능


