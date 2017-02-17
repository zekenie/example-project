function add() {
  return Array.from(arguments)
    .reduce((total, current) => total + current, 0);
}


function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}