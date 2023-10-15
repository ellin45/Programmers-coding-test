function solution(dots) {
    let [[a,b],[c,d],[e,f],[g,h]] = dots

    let slope = parseFloat((f-b))/parseFloat((e-a));
    let slope1 = parseFloat((h-d))/parseFloat((g-c));


    return (parseFloat(slope)).toFixed(1) === (parseFloat(slope1)).toFixed(1) ? 1: 0

}

