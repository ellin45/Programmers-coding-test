function solution(wallpaper) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -1;
    let maxY = -1;

    wallpaper.forEach((el, rowIndex) => {
        let arr = el.split("").map(item => item);
        arr.forEach((X, colIndex) => {
            if (X === '#') {
                if (colIndex < minX) minX = colIndex;
                if (colIndex > maxX) maxX = colIndex;
                if (rowIndex < minY) minY = rowIndex;
                if (rowIndex > maxY) maxY = rowIndex;
            }
        });
    });

    return [minY, minX, maxY+1, maxX+1];
}
