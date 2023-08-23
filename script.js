const bill= document.getElementById('bill-amt');
const numOfPeople=document.getElementById('tpeople');
const tipAmount=document.getElementById('number-amt');
const total=document.getElementById('number1-amt');
const button = document.getElementsByClassName('reset')[0];
const tip = document.querySelectorAll('.tip');


const handleButtonClick= (event) => {

    const clickedTip = event.target;
    clickedTip.style.backgroundColor = "hsl(172, 67%, 45%)";

    const clickedTipValue = clickedTip.value;

    tipvalue(clickedTipValue);
    
}

tip.forEach(button => {
    button.addEventListener('click' , handleButtonClick);

})

const tipvalue = (clickedTipValue) => {
    const bill= document.getElementById('bill-amt');
    const numOfPeople=document.getElementById('tpeople');


    if(bill.value > 0 & numOfPeople.value > 0){
        const amt = (bill.value*clickedTipValue)/100;
        const tips = amt/numOfPeople.value;

        const tipAmount=document.getElementById('number-amt');
        tipAmount.querySelector('span').innerHTML =  tips;
    

        totalAmount(bill,numOfPeople,tips);
    }
    else{
        if(bill.value <= 0){
            bill.style.border = "1px solid red";
        }
        else if(numOfPeople.value <= 0){
            numOfPeople.style.border = "1px solid red"
        }
        

    }

    console.log(bill);
}

const totalAmount = (bill,numOfPeople,tips) => {
    
    
    const ttl = bill.value /numOfPeople.value;
    const total = ttl+tips;
    
    const totall=document.getElementById('number1-amt');
    totall.querySelector('span').innerHTML = total;

}



button.addEventListener('click', function(){
   location.reload();
});





