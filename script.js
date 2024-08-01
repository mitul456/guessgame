
let num = Math.random() * 10;
let numF = Math.ceil(num);
let numA = numF + 5;
let numB = numF + 2;
let gusNumResult = numA + " - " + numB ;

// console.log(numF);

function start(){
    let gusNumberShow = document.getElementById('numShow');

    gusNumResult = gusNumResult;
    gusNumberShow.innerHTML = gusNumResult;
}

function sub(){
    let inputValue = document.getElementById('inputValue').value ;
    // console.log(inputValue);


    if(numF == inputValue){
    document.getElementById('win').classList.remove('d-none');
    document.getElementById('win').classList.add('d-flex');
    }else{
    document.getElementById('lose').classList.remove('d-none');
    document.getElementById('lose').classList.add('d-flex');
    document.getElementById('bg-dange').classList.add('bg-dange');
    }



}