let turn='X'
let gameOver=false
let changeTurn=()=>{
    return turn=== "X" ? "O": "X"
}
let boxTxt=document.querySelectorAll(".boxtexr")
const checkWin =()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    win.map((ele)=>{
            if(boxTxt[ele[0]].textContent==boxTxt[ele[1]].textContent && boxTxt[ele[1]].textContent==boxTxt[ele[2]].textContent && boxTxt[ele[0]].textContent!=""){ 
                if(gameOver==false){
                    gameOver=true     
                    document.querySelector(".info").textContent=`${boxTxt[ele[1]].textContent} Won`
                }
            }
           })

}

let boxes=document.querySelectorAll(".box")
Array.from(boxes).forEach( element =>{
    let btxt=element.querySelector(".boxtexr")
    element.addEventListener('click', (data)=>{
        if(btxt.innerHTML==''){
            btxt.textContent =turn
            turn=changeTurn()
            console.log(turn)
            checkWin()
            if(gameOver==false){
                document.getElementsByClassName("info")[0].innerText='Turn for '+turn
            }   
        }
    })
})



let resrtAll=()=>{
 let boxtexr=document.querySelectorAll(".boxtexr")
 for(let i=0;i<boxtexr.length;i++){
    boxtexr[i].textContent=""
 }
 turn='X'
 gameOver=false
 document.getElementsByClassName("info")[0].innerText='Turn for '+turn
}
