var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var canc1 = document.getElementById('canc1');
var canc2 = document.getElementById('canc2');
var subtn = document.getElementById('subtn');

function validateForm (){
    var name1 = document.getElementById('name1');
    var hmp1 = document.getElementById('hmp1');
    var date1 = document.getElementById('date1');
    var mesg = document.getElementById('mesg');
    removeMessage();
    var valid = true;
    if (name1.value.length == 0){
        name1.nextElementSibling.innerHTML = "username can't be blank";
        valid = false;
    }

    if (hmp1.value.length == 0){ 
        hmp1.nextElementSibling.innerHTML = "Contact number can not be less than 10";
        valid = false;
    }
    
    if (date1.value == ""){
        date1.nextElementSibling.innerHTML = "please input date";
        valid = false;
    }

    if (mesg.value == ""){
        mesg.nextElementSibling.innerHTML = "please input filed";
        valid = false;
    }
    return valid;
};

function removeMessage(){
    var errorpara = document.querySelectorAll(".error");
    [].forEach.call(errorpara, function(el){
        el.innerHTML = "";
    });
}

btn1.addEventListener('click', function(){
    menu1.style.display = 'block';
});

canc1.addEventListener('click', function(){
    menu1.style.display = 'none';
});

btn2.addEventListener('click', function(){
    menu2.style.display = 'block';
});

canc2.addEventListener('click', function(){
    menu2.style.display = 'none';
});
