function getNthFib(n) {
    let fibonacci = [0, 1];
      for (let i = 2; i <= n; i++) {
          fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
      }
      console.log(fibonacci[n-1])
  }

getNthFib(6);