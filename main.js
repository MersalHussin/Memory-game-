document.querySelector(".control-game span").onclick = function(){
   let yourName =  prompt("Whats is Your Name")
   if(yourName == "" || yourName == null){
    document.querySelector(".name span").innerHTML = "Unknown"
   }else{
    document.querySelector(".name span").innerHTML = yourName
   }

   document.querySelector(".control-game").remove()
}

let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks")

let blocks = Array.from(blockContainer.children)

//Flip Block function
function flipBlock(selectedBlock){
   //Add Class is-flipped
   selectedBlock.classList.add("is-flipped")

   //Collect All Flipped Cards
   let allFlippedCards = blocks.filter((flippedBlock) => flippedBlock.classList.contains("is-flipped"))

   if(allFlippedCards.length === 2){

      console.log("HAi")
      //do stop function
      stopClick();

      //Matching Function
      checkIsMatched(allFlippedCards[0],allFlippedCards[1])
      
   }
}

function stopClick(){
   blockContainer.classList.add("no-clicking");

   setTimeout(() => {
   blockContainer.classList.remove("no-clicking")
   }, duration)
}

let tries = document.querySelector(".wrong span")
function checkIsMatched(fristBlock,secondBlock){
   if(fristBlock.dataset.image === secondBlock.dataset.image){
      fristBlock.classList.remove("is-flipped")
      secondBlock.classList.remove("is-flipped")

      fristBlock.classList.add("has-match")
      secondBlock.classList.add("has-match")

      document.getElementById("succsess").play()
   }else{
      tries.innerHTML = +(tries.innerHTML) + 1;
      document.getElementById("fail").play()
      setTimeout(()=>{
         fristBlock.classList.remove("is-flipped")
         secondBlock.classList.remove("is-flipped")
      },duration)
   }
}

function shuffleBlocks(){
   blocks.forEach(block => {
      let randomNum = Math.floor(Math.random() * blocks.length )
      block.style.order = randomNum;
      
      //on Click On block do flipBlock Function
      block.addEventListener("click",function(){
      flipBlock(block)
      });
   });
};

shuffleBlocks()


// Addtional options
// Sound at backgroung when start play
// add timer when it end the game will reset
// create leader board and save it on local storage
// add new blocks and it's perfect if i generate it with Js 