function solution(dots) {
    //x중에서 가장 큰값 - x중에서 가장 작은 값 = 가로 길이
    const width = Math.max(...dots.map(a=>a[0]))-Math.min(...dots.map(a=>a[0]))
      //y중에서 가장 큰값 - y중에서 가장 작은 값 = 세로의 길이
    const height = Math.max(...dots.map(a=>a[1]))-Math.min(...dots.map(a=>a[1]))
    return width * height
}