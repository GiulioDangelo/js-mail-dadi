const email = prompt('inserire mail');

let emailList = [
    'emailprova@test.com',
    'nonloso@test.com',
    'placeholder@test.com',
];

let prova = false

for (let i = 0; i < emailList.length; i++) {

    if (email == emailList[i]) {
        prova = true 
    }
}

if (prova) {
    console.log('email trovata')
}
else{
    console.log('email non trovata')
}