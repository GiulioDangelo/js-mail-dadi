const email = prompt('inserire mail');

let emailList = [
    'emailprova@test.com',
    'nonloso@test.com',
    'placeholder@test.com',
];

for (let i = 0; i < emailList.length; i++) {

    if (email == emailList[i]) {
        console.log('vero')
    }
    else{
        console.log('falso')
    }
}