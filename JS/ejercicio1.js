function calcular() {
    // Constantes del DOM
    const inputBase = document.getElementById('base');
    const inputAltura = document.getElementById('altura');
    const spanSup = document.getElementById('sup');
    // Variables de ingreso de datos
    let base = parseFloat(inputBase.value);
    let altura = parseFloat(inputAltura.value);
    // Cálculo de la superficie
    sup = base * altura / 2;
    // Mostrar la superficie
    spanSup.innerHTML = sup;
}

function calcular2() {
    // Constantes del DOM
    const inputBase = document.getElementById('base2');
    const inputAltura = document.getElementById('altura2');
    const spanSup = document.getElementById('sup2');
    const spanPer = document.getElementById('per2');
    // Variables de ingreso de datos
    let base2 = parseFloat(inputBase.value);
    let altura2 = parseFloat(inputAltura.value);
    // Cálculo de la superficie
    sup2 = base2 * altura2;
    // Mostrar la superficie
    spanSup.innerHTML = sup2;
    // Cálculo del perimetro
    per2 = (base2 + altura2) * 2;
    // Mostrar el perimetro
    spanPer.innerHTML = per2;
}

function calcular3() {
    // Constantes del DOM
    const inputRadio = document.getElementById('radio');
    const inputAltura = document.getElementById('altura3');
    const spanVol = document.getElementById('vol');
    const spanArea = document.getElementById('area');
    const Pi3 = Math.PI;
    // Variables de ingreso de datos
    let radio = parseFloat(inputRadio.value);
    let altura3 = parseFloat(inputAltura.value);
    // Cálculo de la superficie
    vol = Pi3 * (radio^2) *altura3;
    // Mostrar la superficie
    spanVol.innerHTML = vol;
    // Cálculo del perimetro
    area = 2*Pi3*radio*altura3;
    // Mostrar el perimetro
    spanArea.innerHTML = area;
}

function calcular4() {
    // Constantes del DOM
    const inputPrecio = document.getElementById('precio');
    const inputPago = document.getElementById('pago');
    const spanVuelto = document.getElementById('vuelto');
    // Variables de ingreso de datos
    let precio = parseFloat(inputPrecio.value);
    let pago = parseFloat(inputPago.value);
    // Cálculo de la superficie
    vuelto = pago - precio;
    // Mostrar el perimetro
    spanVuelto.innerHTML = vuelto;
}

function calcular5() {
    // Constantes del DOM
    const inputDias = document.getElementById('dias');
    const spanSeg = document.getElementById('seg');
    const spanDiasspan = document.getElementById('diasspan');
    // Variables de ingreso de datos
    let dias = parseFloat(inputDias.value);
    // Cálculo de la superficie
    seg = dias *24*60*60;
    // Mostrar el perimetro
    spanDiasspan.innerHTML = dias;
    spanSeg.innerHTML = seg;
}