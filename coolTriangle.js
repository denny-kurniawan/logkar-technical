const coolTriangle = (n) => {
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i) {
        process.stdout.write('*')
      } else {
        process.stdout.write(' ')
      }
    }
    console.log()
  }
  
  for (let i = 1; i <= n/2; i++) {
    process.stdout.write('*')
  }
  console.log()
}

console.log('input: 8')
coolTriangle(8)

console.log('\ninput: 3')
coolTriangle(3)