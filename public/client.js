const btn = document.getElementById("submit-btn");
btn.addEventListener("click", submitDataToServer);

funcion submitDataToServer() {
  console.log("SUBMIT clicked");

  let dataObj = {fname: document.getElementById("firstName").value,
                sname: document.getElementById("surName").value};

  event.preventDefault();
  const requesMsg = new XMLHttpRequest();
  requestMsg.open('post', '/putData', true);
  requestMsg.setRequestHeader('Content-Type',
"application/json;charset=UTF-8");
  requestMsg.send(JSON.stringify(dataObj));
}
