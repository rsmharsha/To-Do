let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

let dateElement = document.getElementById("date");
let today = new Date();
let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
dateElement.innerText = today.toLocaleDateString("en-US", options);


btn.addEventListener("click", function(){
    if(inp.value.trim() == ""){
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete!"
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

inp.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        btn.click();
    }
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})