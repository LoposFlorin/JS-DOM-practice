const newBtn = document.getElementById("new-item");
const input = document.getElementById("inputField");


const additem = () => {
    const itm = document.createElement("li");
    const itmlist = document.getElementById("list");
    itmlist.appendChild(itm);
    const getText = document.getElementById("inputFiled").value;
    if(getText <= 0) {
       alert('Please add an item');
    } else {
       itm.innerHTML = getText;
    }
    itm.addEventListener("click", checkitem);
  };

newBtn.addEventListener("click", additem);


function checkitem() {
  this.classList.add("done");
};
