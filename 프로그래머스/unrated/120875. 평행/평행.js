
2
3
4
5
6
7
8
9
10
11
12
13
14
15
function solution(dots) {
    dots.length = 4;
    let [[a,b],[c,d],[e,f],[g,h]] = dots

    let slope = parseFloat((f-b))/parseFloat((e-a));
    let slope1 = parseFloat((h-d))/parseFloat((g-c));


    return (parseFloat(slope)).toFixed(1) === (parseFloat(slope1)).toFixed(1) ? 1: 0

}

