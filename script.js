let ct = document.querySelector(".text").children;
// console.log(ct[0].value);

let textAreaVal = ct[0].value;
//console.log(colorVal);

let btn = document.querySelector("button");
let rightContainer = document.querySelector(".right-container");
let btn2 = document.querySelectorAll(".btn2");
btn.addEventListener("click", () => {
    let colorVal = ct[1].children[0].value;
    if(ct[0].value === ""){
        alert("plz enter some text");
        return;
    }

    makeStickyNotes(ct[0].value , colorVal);
    ct[0].value ="";
    document.querySelector("#para").style.display ="none";
    removeStickyNotes();
});

function removeStickyNotes(){
//    btn2 = document.querySelectorAll(".btn2");
//    btn2.forEach((singleBtn) =>{
//     singleBtn.addEventListener("click" , (e) =>{
//         e.target.parentElement.remove();
//     });
//    });

    let rc = document.querySelector(".right-cont");
    rc.addEventListener("click",(e) => {
    
        if(e.target.innerText === "X") {
            e.target.parentElement.remove();
        }
    })
}

function makeStickyNotes(text , color) {
    let div = document.createElement("div");
    div.innerHTML = 
    `<p>${text}</p>
    <button>X</button>`;

    div.style.padding = "0.5rem";
    div.style.margin = "0.5rem";
    div.style.display = "flex";
    div.style.gap = "2rem";
    div.style.backgroundColor = color ;
    rightContainer.appendChild(div);
    
}
// #button {
//     background-color: none;
//     display: flex;
//     justify-content: end;
// }
   
