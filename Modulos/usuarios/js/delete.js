let userArray = JSON.parse(sessionStorage.getItem("userArray")) || [];

function deleteField(index){
    userArray.splice(index, 1);
    sessionStorage.setItem("userArray", JSON.stringify(userArray));
    window.location.reload();
}
