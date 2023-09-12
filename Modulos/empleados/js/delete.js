let emploArray = JSON.parse(sessionStorage.getItem("emploArray")) || [];

function deleteField(index){
    emploArray.splice(index, 1);
    sessionStorage.setItem("emploArray", JSON.stringify(emploArray));
    window.location.reload();
}