function solution(l, r) {
    let result = [];

    // Start from "5", generate numbers by appending "0" and "5"
    let str = ["5"];
    while (str.length > 0) {
        let numStr = str.shift();
        let num = Number(numStr);

        if (num >= l && num <= r) {
            result.push(num);
        }

        // Do not generate numbers beyond the upper limit
        if (num > r) continue;

        // Append "0" and "5" to generate more numbers
        str.push(numStr + "0");
        str.push(numStr + "5");
    }

    // Return [-1] if no number is found
    if (result.length === 0) {
        result.push(-1);
    }

    return result;
}
