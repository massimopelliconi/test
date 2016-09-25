var count = 0,
    counter = setInterval(function() {
        document.getElementById("box").innerHTML = count++;
        if(count==11) {
            clearInterval(counter);
        }
    }, 1000)
