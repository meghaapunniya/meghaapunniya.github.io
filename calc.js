let a,p,r,n,b; 
function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    p=Number(p);
    n=Number(n);
    r=Number(r);
    console.log(p);                            
    console.log(n);
    console.log(r);
        b=Math.pow((1+r*0.01),n);
        a=p*((r*0.01*b)/(b-1));
        console.log(b);
        console.log(a);
        document.getElementById("display").innerHTML = "The Payment Amount is $" + a.toFixed(2) ;
    }
