function solution(my_string) {
    let my_set = [...new Set(my_string)].join('')
    return my_set;
}