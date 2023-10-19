function solution(wallpaper) {
    let left = [];
    let right = [];
    let top = [];
    let bottom = [];
    wallpaper.forEach((el,i)=>{
        [...el].forEach((item,idx)=>{
          if(item === "#"){
              left.push(i)
              right.push(i+1)
              top.push(idx)
              bottom.push(idx+1)
          }
        })
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
}
