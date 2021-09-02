const loading = (() => {
    // Access the DOM
    const loadNumber = document.querySelector(".number");
    const imgblur = document.querySelector('.img');

    imgblur.style.filter = 'blur(0px)';

    // Increment number logic
    let currentNumber = parseInt(loadNumber.innerHTML[0]);

    const timingFunction = () => {
        if (currentNumber < 99){
            currentNumber += 1;
            loadNumber.innerHTML = `${currentNumber}%`;

        }else{
            clearInterval(timingFunction);
            loadNumber.style.display = "none";
        };
    };

    setInterval(timingFunction, 20);
    

    // Blurring Logic

    
})()

