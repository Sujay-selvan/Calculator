function getNumber(val){
    if(val.target.innerText!="c"&&val.target.innerText!="="){
        
        document.getElementById("res").value+=val.target.innerText
        
    }else if(val.target.innerText=="c"){
        document.getElementById("res").value="";
        document.getElementById("pre").value="";
    }else if(val.target.innerText=="="){
        let replace=document.getElementById("res").value
        let last = replace.replaceAll("÷","/").replaceAll("X","*")
        document.getElementById("res").value=eval(last)
    }
}