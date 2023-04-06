let input=document.getElementById('input');
let result=document.getElementById('result');
let inputType=document.getElementById('inputType');
let resultType=document.getElementById('resultType');

input.addEventListener("change",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

let inputTypeValue=inputType.value;
let resultTypeValue=resultType.value;


function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;

    if(inputTypeValue==='meter'){
        if(resultTypeValue==='kilometer'){
            result.value=Number(input.value)*0.001;
        }else if(resultTypeValue==='meter'){
            result.value=input.value;
        }else if(resultTypeValue==='centimeter'){
            result.value=Number(input.value)*100;
        }
    }

    if(inputTypeValue==='kilometer'){
        if(resultTypeValue==='meter'){
            result.value=Number(input.value)*1000;
        }else if(resultTypeValue==='kilometer'){
            result.value=input.value;
        }else if(resultTypeValue==='centimeter'){
            result.value=Number(input.value)*100000;
        }
    }

    if(inputTypeValue==='centimeter'){
        if(resultTypeValue==='kilometer'){
            result.value=Number(input.value)*0.00001;
        }else if(resultTypeValue==='centimeter'){
            result.value=input.value;
        }else if(resultTypeValue==='meter'){
            result.value=Number(input.value)*0.01
        }
    }

}