var monto_cliente = document.querySelector("#Monto_cliente");
var monto_caja = document.querySelector("#Monto_caja");
var btn_calc = document.querySelector("#btn_calc");
var tasa_dia = document.querySelector("#tasa_dia");
var select_tipo_cambio = document.querySelector("#Tipo_cambio");


btn_calc.addEventListener("click", calcular);

function calcular(){
    if (select_tipo_cambio.value == "Dolares a Pesos"){
        monto_caja.value = Number(monto_cliente.value) * Number(tasa_dia.value)
    }
    else{
        monto_caja.value = Number(monto_cliente.value) / Number(tasa_dia.value)
    }
    
}

