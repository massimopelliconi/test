function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }

    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'red';  
}

wait(4000);
