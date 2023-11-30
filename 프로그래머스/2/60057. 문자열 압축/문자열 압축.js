function solution(s) {
    let min_length = s.length;

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let compressed = '';
        let prev = s.slice(0, i);
        let count = 1;

        for (let j = i; j < s.length; j += i) {
            let substr = s.slice(j, j + i);
            if (prev === substr) {
                count++;
            } else {
                compressed += (count > 1 ? String(count) : '') + prev;
                prev = substr;
                count = 1;
            }
        }

        compressed += (count > 1 ? String(count) : '') + prev;
        min_length = Math.min(min_length, compressed.length);
    }

    return min_length;
}
