function validate(){
    let inp1 = document.getElementById("field1");
    let inp2 = document.getElementById("field2");
    if (inp1.value !== inp2.value){
        alert("The passwords do not match!");
    }
    else if (inp1.value.length < 8){
        alert("The length of the password must be at least 8.");
    }
}