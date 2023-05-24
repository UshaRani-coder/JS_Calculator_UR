let input = document.querySelector("#input");
let no_keys = document.querySelectorAll(".key");
no_keys.forEach(e=>{
    e.addEventListener("click",()=>{
      input.value += e.textContent;
    });
})


function del(){
  input.value = input.value.slice(0,-1);
}

function reset(){
  input.value = "";
}

function result(){
  try{
    input.value = eval(input.value);
  }
  catch(error){
    alert("Enter the valid input");
  
  }
  }
















