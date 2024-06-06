let inputBox = document.querySelector("#inputBox");
let subBtn = document.querySelector("#subBtn");
let todoClassList = document.querySelector(".todoClassList");


const toDo = () =>{
    console.log(inputBox.value);
    let addElle = document.createElement("p");
    addElle.textContent = inputBox.value;
    todoClassList.append(addElle)
    inputBox.value = ""
}

subBtn.addEventListener("click", ()=>{
    toDo()
})

todoClassList.addEventListener("click", (event) =>{
    let currentElle = event.target;
    currentElle.remove()
})
