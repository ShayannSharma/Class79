name_array= []
function submit(){
    var name1 = document.getElementById("name1").value
    var name2 = document.getElementById("name2").value
    var name3 = document.getElementById("name3").value
    var name4 = document.getElementById("name4").value
    var name5 = document.getElementById("name5").value
    var name6 = document.getElementById("name6").value
    var name7 = document.getElementById("name7").value

    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);
    name_array.push(name5);
    name_array.push(name6);
    name_array.push(name7);
    document.getElementById("array").innerHTML=name_array
    document.getElementById("submit_button").style.display= "none"
    document.getElementById("sort_button").style.display= "inline-block"
}

function sorting(){
    name_array.sort()
    document.getElementById("array").innerHTML=name_array
}
