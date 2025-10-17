
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let bill=Number(document.getElementById('bill').value)||0.00;
    let tip=Number(document.getElementById('tip').value)||0.00;
    let total=document.getElementById("total");
    let ruselt=(bill*tip/100)+bill;
    total.textContent=ruselt.toFixed(2);
    
})

