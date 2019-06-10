//Botones
const btnEmpezar= document.getElementById('btnEmpezar');
const btnCifrar= document.getElementById('btnCifrar');
const btnDescifrar=document.getElementById('btnDescifrar');
const btnEmpezardenuevo=document.getElementById('btnEmpezardenuevo');
//Vistas
const vista0=document.getElementById('vistaEstaticaUp');
const vista1=document.getElementById('vistaPrimera');
const vista2=document.getElementById('vistaSegunda');
const vista3=document.getElementById('vistaEstaticaDown');
//CONTRASEÑA
let login = 0;
//Funcion primer boton Empezar
    
btnEmpezar.addEventListener('click', () => {
        const contraseña = document.getElementById('traerContraseña');
        const contraseñaValue = document.getElementById('traerContraseña').value;
        if (login < 2) 
        {
                if (contraseñaValue === 'LABORATORIA') 
                {
                        document.getElementById('bienvenida').innerHTML = "Bienvenidos";
                        vista1.classList.add('hide');
                        vista2.classList.remove('hide');
                        resultado1.classList.add('hide');
                        
                }
                else 
                {
                        document.getElementById('resultado1').innerHTML = "Contraseña errada";
                        login++;
                }
        } else 
        {
                document.getElementById('resultado2').innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
                resultado1.classList.add('hide');
        }
}

);
//RESCATANDO EL VALOR DE LA PALABRA y el numero de variacion A SER CIFRADA
const btnCifrado = document.getElementById("btnCifrar");
    btnCifrado.addEventListener("click", function() {
        let textEncode = document.getElementById("palabra").value;
        let number_offset = document.getElementById("numero").value;
        console.log(textEncode)
        console.log(number_offset)
        msgCipher = document.getElementById("resultado");
        msgCipher.value= window.cipher.encode(textEncode,number_offset);
    });

//RESCATANDO EL VALOR DE LA PALABRA y el numero de variacion A SER desCIFRADA
const btnDescifrado = document.getElementById("btnDescifrar");
    btnDescifrado.addEventListener("click", function() {
        let textDecode = document.getElementById("palabraD").value;
        let number_offset = document.getElementById("numero").value;
        console.log(textDecode)
        console.log(number_offset)
        msgDecipher=document.getElementById("resultado");
        msgDecipher.value= window.cipher.decode(textDecode,number_offset);
    });
