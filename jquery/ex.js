function form_valid() {
    // let name = document.querySelector("#name").value;

    // text name
    let name = document.myform.name.value;

    if (name == "") {
        alert("enter name");
    }else if(name == "parth"){
        alert("Hello parth");
    } 
    else if (!isNaN(name)) {
        alert("enter alphabet");
    }

    // radio button
    let male = document.myform.gen[0].checked;
    let female = document.myform.gen[1].checked;

    if (male == false && female == false) {
        alert("select gender");
        return false;
    }

    // check box
    let c1 = document.myform.c1.checked;
    let c2 = document.myform.c2.checked;
    if (c1 == false && c2 == false) {
        alert("select qualification");
        return false;
    }

    // Selection
    let city = document.myform.city.value;
    if (city == -1) {
        alert("select city");
        return false;
    }


    //  number
    let mno = document.myform.mno.value;
    if (mno == "") {
        alert("enter number");
        return false;
    } else if (mno < 10) {
        alert("enter number not more than 10 digit ");
        return false;
    }
}
