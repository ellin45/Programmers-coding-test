function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0],size[1]]: [size[1],size[0]]);

    let width = [];
    let length = [];
    
    for(let i=0; i<arr.length; i++){
        width.push(arr[i][0])
        length.push(arr[i][1])
    }
    return Math.max(...width)*Math.max(...length);
}