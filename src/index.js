//Botones
const btnEmpezar = document.getElementById('btnEmpezar');
const btnCifrar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const btnEmpezardenuevo = document.getElementById('btnEmpezardenuevo');
//Vistas
const vista0 = document.getElementById('vistaEstaticaUp');
const vista1 = document.getElementById('vistaPrimera');
const vista2 = document.getElementById('vistaSegunda');
const vista3 = document.getElementById('vistaEstaticaDown');
//Contraseña
let login = 0;
//Funcion primer boton Empezar
    
btnEmpezar.addEventListener('click', () => {
        const contraseña = document.getElementById('traerContraseña');
        const contraseñaValue = document.getElementById('traerContraseña').value;
        if (login <= 2) 
        {
                if (contraseñaValue === 'LABORATORIA') 
                {
                        document.getElementById('bienvenida').innerHTML = "Bienvenidos";
                        vista1.classList.add('hide');
                        vista2.classList.remove('hide');
                }
                else 
                {
                        document.getElementById('resultado1').innerHTML = "Contraseña errada";
                        login++;
                }
        } else 
        {
                document.getElementById('resultado2').innerHTML = "Lo sentimos, no puedes ingresar";
        }
}

);
//btnCifrar.addEventListener('click', () => {
  //      const wordWrite=document.getElementById('palabra');
    //    const wordwriteValue=document.getElementById('palabra').value;
//let input2 = documeNT.getElementById('palabra');
//let input3 = documeNT.getElementById('number');
//let input4 = documeNT.getElementById('resultado');

//rescatando el valor del input text para ser cifrado

//const btnCifrado= document.getElementById("btnCifrar");
//btnCifrar.addEventListener('click', () =>{
//        let textEncode=document.getElementById('palabra').value;
  //      let numberEscogido= document.getElementById('number').value;
    //    document.getElementById('msg-encode-check').innerHTML = "PRUEBA";
//});
 












