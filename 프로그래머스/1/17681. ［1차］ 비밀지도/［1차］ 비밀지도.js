function solution(n, arr1, arr2) {
  let arr1이진수 = [];
  let arr2이진수 = [];

  arr1.forEach((el) => {
    let binary = el.toString(2);
    binary = binary.padStart(n, "0")
    return arr1이진수.push(binary);
  });
  arr2.forEach((el) => {
    let binary = el.toString(2);
    binary = binary.padStart(n, "0")
    return arr2이진수.push(binary);
  });
    
    const combine = combines(n, arr1이진수, arr2이진수);
    return combine;
}

function combines(n, arr1이진수, arr2이진수) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
        let combinedRow = '';
        console.log(arr1이진수[i])
        for(let j = 0; j < arr1이진수[i].length; j++) {
            combinedRow += (arr1이진수[i][j] === '1' || arr2이진수[i][j] === '1') ? '#' : ' ';
        }

        result.push(combinedRow);
    }
    
    return result;
}