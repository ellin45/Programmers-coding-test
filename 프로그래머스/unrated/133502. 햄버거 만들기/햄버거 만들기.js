function solution(ingredient) {
  const burger = [1, 2, 3, 1];
  let stack = [];
  let count = 0;

  ingredient.forEach(item => {
    stack.push(item);
    while (stack.length >= 4) {
      const top4 = stack.slice(-4).join('');
      const burgerPattern = burger.join('');
      if (top4 === burgerPattern) {
        stack.splice(-4);
        count++;
      } else {
        break;
      }
    }
  });

  return count;
}
