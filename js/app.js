const newBtn = document.getElementById("new-item");

const additem = () => {
    const getText = document.getElementById("inputFiled").value;
    if(getText <= 0) {
       alert('Please add an item');
    } else {
       const itmlist = document.getElementById("list");
       const itm = document.createElement("li");
       itmlist.appendChild(itm);
       itm.innerHTML = getText;
       itm.addEventListener("click", clearitem);
    }
  };

newBtn.addEventListener("click", additem);

function clearitem() {
this.classList.add("done");
};
