const btn = document.getElementById("check");

btn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    let flag = false;
    let emailList = [
        'emailprova@test.com',
        'nonloso@test.com',
        'placeholder@test.com',
    ];
    
    
    for (let i = 0; i < emailList.length; i++) {
    
        if (email == emailList[i]) {
            flag = true 
        }
    }
    
    
    if (flag) {
        document.getElementById("result").innerHTML=('Email trovata')
        document.querySelector(".on-list").style.display="block"
        document.querySelector(".not-on-list").style.display="none"
    }
    else{
        document.getElementById("result").innerHTML=('Email non trovata');
        document.querySelector(".not-on-list").style.display="block"
        document.querySelector(".on-list").style.display="none"
    }
    
})

