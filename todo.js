const listContainer = document.querySelector("#lists-container");
const btn =document.querySelector("button");
const input =document.querySelector("#taskInput");
const checkbox = listContainer.input;
const list =document.querySelector("#list");




const addTask=()=>{
    btn.addEventListener("click",()=>{
  const task=input.value;
     console.log(checkbox);

  listContainer.innerHTML+=` <!-- todo Lists 👇👇👇 -->
        <div class=" w-full todo-list justify-between p-5  bg-[#F3EFEE] h-[10vh] w-[60%] rounded-2xl flex">
          <div class="left flex items-center gap-5">
            <input id="checkbox" type="checkbox" name="" id="">
            <p id="list" class="text-xl">${task}</p>
          </div>
          <div class="right">
            <img src="./assets/Frame 2609477.png" alt="">
          </div>
        </div>`
        input.value="";
})
}
// const markAsDone=()=>{
//     listContainer.addEventListener("change",()=>{
     
//         list.classList.add("line-through");
       
//     })
// }



// .......................Calling My funtions.................
addTask();
markAsDone();

