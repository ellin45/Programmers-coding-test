function solution(n, arr1, arr2) {
    let answer = [];
    num = arr1.toString(2)
    for(let i=0; i<n; i++){
        const strLine = (arr1[i] | arr2[i]).toString(2) // arr1의 배열 or arr2을 배열2진법을 10진법으로 전환
        const arrLine = strLine.split("") // strLine을 문자열로 split한다.
        while (arrLine.length < n){ // arrLine의 길이가 n보다 작을때
            arrLine.unshift("0") // 0을 arrLine 맨앞에 추가
        }
        const decLine = (arrLine.map(i => i === "1" ? "#" : " ")).join("") // i가 문자열 1일때 true면 #, 아니라면 " " 공백으로 변환한다.
																																						// arrLine을 join한다.
        answer.push(decLine) //answer에 decLine을 push
    }
    return answer;
}