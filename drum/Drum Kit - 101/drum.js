const action = document.querySelectorAll(".container button");
console.log(action);


action.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        const sound = e.target.id
        console.log(sound);
        
        PlaySound(sound);
    })
})

document.addEventListener("keydown", (e) => {
  const sound = e.key; 
  console.log(sound);
  PlaySound(sound);
});


function PlaySound(sound){
    if(sound === "w"){
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }else if(sound === "a"){    
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }else if(sound === "s"){
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    else if(sound === "d"){
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    else if(sound === "j"){
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
    }   
    else if(sound === "k"){
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    else if(sound === "l"){
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }

    
}