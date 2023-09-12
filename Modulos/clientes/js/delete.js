let clientArray = JSON.parse(sessionStorage.getItem("clientArray")) || [];

function deleteField(index){
    clientArray.splice(index, 1);
    sessionStorage.setItem("clientArray", JSON.stringify(clientArray));
    window.location.reload();
}