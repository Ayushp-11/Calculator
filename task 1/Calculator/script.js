let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('historyList');
let historyToggle = document.getElementById('historyToggle');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    handleInput(e.target.innerHTML.trim());
  });
});

function handleInput(btn) {
  if (btn === '=') {
 try {
      let result = eval(string).toString();
      let li = document.createElement('li');
      li.textContent = `${string} = ${result}`;
      historyList.appendChild(li);

      string = result;
      input.value = string;
    } 
    
    catch {
      input.value = "Error";
      string = "";
    }
   }

  else if (btn === 'Ac') {
    string = "";
    input.value = "0";
  }

  else if (btn === 'Del') {
    string = string.slice(0, -1);
    input.value = string || "0";
  }

  else {
    string += btn;
    input.value = string;
  }
}


document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    string += key;
    input.value = string;
  }

  else if (key === "Enter") {
    try {
      let result = eval(string).toString();
      let li = document.createElement('li');
      li.textContent = `${string} = ${result}`;
      historyList.appendChild(li);

      string = result;
      input.value = string;
    } 
    
    catch {
      input.value = "Error";
      string = "";
    }
  }

  else if (key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string || "0";
  }

  else if (key === "Escape") {
    string = "";
    input.value = "0";
  }
});


historyToggle.addEventListener("click", () => {
  if (historyList.style.display === "none") {
    historyList.style.display = "flex";
    historyToggle.textContent = "History ▲";
  } 
   else {
    historyList.style.display = "none";
    historyToggle.textContent = "History ▼";
  }
});
