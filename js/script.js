let custName = document.querySelector('#name');
let age = document.querySelector('#age');
let faceMask = document.querySelector('#face-mask');
        
let allowed = 0;
let denied = 0;

function validateEntry() {
    if (custName.value == '' || age.value == '') {
        alert("Please fill in the required fields")
    }

    else if (age.value < 12 && faceMask.value == 'Yes') {
        alert("Dear"+ " " + custName.value + "," + " " + "You must be 12 years or older to enter Lofem Shopping Mall!")
    }

    else if (faceMask.value == 'No') {
        alert("You have been denied entry into Lofem Shopping Mall!")
    }

    else {
        alert("Dear"+ " " + custName.value + "," + " " + "welcome to Lofem Shopping Mall!")
        
        allowed++
        document.querySelector('#allowed').innerHTML = "Allowed visitors:" + allowed
        
        custName.value = ''
        age.value = ''
        faceMask.value = 'Yes'
    }
    if((age.value < 12 || faceMask.value != 'Yes') && (custName.value != '' && age.value != '')){
        
        denied++
        document.querySelector('#denied').innerHTML = "Denied visitors:" + denied
        
        custName.value = ''      
        age.value = ''
        faceMask.value = 'Yes'
    }
}