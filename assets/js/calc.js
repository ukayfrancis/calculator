var result = document.getElementById('show');

function calculate(number){
    result.value+=number
}

function Result(){
    try{
        result.value = eval(result.value)
    }

    catch(err){
        alert('Enter a valid input')
    }
}

function clr(number){
    result.value = " ";
}

function del(){
    result.value=result.value.slice(0,-1);~~
}


