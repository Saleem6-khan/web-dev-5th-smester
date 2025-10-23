const action = document.querySelectorAll(".container button");
console.log(action);


action.forEach((button) => {

    button.addEventListener("keypress",(e)=>{
        e.preventDefault();
        const sound = e.key;  
        console.log(sound);
        if(sound == 'a'){
            let audio = new Audio('sounds/tom-2.mp3')
    audio.play();
    }
    else if(sound == 's'){
        let audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    }
    else if(sound == 'd'){
        let audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    }
    else if(sound == 'j'){
        let audio = new Audio('sounds/snare.mp3')
        audio.play();
    }
    else if(sound == 'k'){
        let audio = new Audio('sounds/crash.mp3')
        audio.play();
    }
    else if(sound == 'l'){
        let audio = new Audio('sounds/kick-bass.mp3')
        audio.play();
    }
    else if(sound == 'w'){
        let audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    }
    });


    button.addEventListener("click",(e)=>{













        e.preventDefault();
        const sound = e.target.id;  // this gives you "a", "s", "d" etc

        console.log(sound);
        if(sound == 'a'){
            let audio = new Audio('sounds/tom-2.mp3')
    audio.play();
    } else if(sound == 's'){
        let audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    } else if(sound == 'd'){
        let audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    } else if(sound == 'j'){
        let audio = new Audio('sounds/snare.mp3')
        audio.play();
    } else if(sound == 'k'){
        let audio = new Audio('sounds/crash.mp3')
        audio.play();
    } else if(sound == 'l'){
        let audio = new Audio('sounds/kick-bass.mp3')
        audio.play();
    } else if(sound == 'w'){
        let audio = new Audio('sounds/tom-1.mp3')
        audio.play();

 }
 
});
});


