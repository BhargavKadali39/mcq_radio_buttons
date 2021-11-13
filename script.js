

function checkButton() {  
    let chk
    if(document.getElementById('answer').checked) {
        chk = 'Correct answer'
        alert(chk);
    }else if(document.getElementById('delete4').checked){
        alert('Wrong, please try again');
    }else if(document.getElementById('update3').checked){
        alert('Wrong, please try again');
    }else if(document.getElementById('read2').checked){
        alert('Wrong, please try again');
    }else if(document.getElementById('create1').checked){
        alert('Wrong, please try again');
    }
    else{
        alert('Please select any option');
    }
} 
