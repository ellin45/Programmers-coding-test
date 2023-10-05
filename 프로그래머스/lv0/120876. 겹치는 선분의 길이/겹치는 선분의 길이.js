function solution(lines) {
    // 시작점과 끝점을 이벤트로 변환
    let events = [];
    for (let line of lines) {
        events.push({point: line[0], type: "start"});
        events.push({point: line[1], type: "end"});
    }

    // 이벤트를 정렬
    events.sort((a, b) => {
        if (a.point === b.point) {
            return a.type === "start" ? -1 : 1;  // 시작점을 끝점보다 앞에 둔다.
        }
        return a.point - b.point;
    });

    let overlapLength = 0;
    let active = 0; // 현재 활성화된 선분의 수
    let prevPoint = null;

    for (let event of events) {
        if (active >= 2 && prevPoint !== null) { // 2개 이상의 선분이 겹치는 경우만 고려
            overlapLength += event.point - prevPoint;
        }
        if (event.type === "start") {
            active++;
        } else {
            active--;
        }
        prevPoint = event.point;
    }

    return overlapLength;
}

