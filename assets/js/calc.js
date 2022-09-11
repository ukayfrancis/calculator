var result = document.getElementById('show');

function calculate(number){
   
    result.value+=number
    
}

function Result(){
    try{
        result.value = eval(result.value);
        
    }

    catch(err){
        alert('Enter a valid input')
    }
}

function clr(number){
    result.value = " ";
}

function del(){
    result.value=result.value.slice(0,-1);
}


function toggle(){
   let theme = document.getElementById("dark")
   if (theme.getAttribute("href")== "assets/css/calc.css"){
    theme.href= "assets/css/calcdark.css"
   }
   else{
    theme.href= "assets/css/calc.css"
   }
}


