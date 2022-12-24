let fibonacci=(num)=> {
    let a = 0;
    let b = 1;
    let c;
    let array=[];
    
    for(let i = 1; i < num; i++) {
      c = a + b;
      array.push(a)
      array.push(b)
      array.push(c)
      a = b + c;
      b = c + a;
      
    }
    console.log(array)
  }
  
  fibonacci(6)