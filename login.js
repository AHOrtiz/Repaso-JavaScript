let body=document.querySelector('.body');
// let btnCuenta= document.querySelector ('.btnCuenta')


// document.getElementById('btnClick').addEventListener('click',()=>{
//     console.log('Estoy funcionando');
//     body.style.backgroundColor='green'
//     setTimeout(() => {
//         body.style.backgroundColor='white'
//         addElement();        
//     }, 5000);
// })


// function addElement(){
//     var newLabel = document.createElement("Label");
//     newLabel.innerHTML = "Finalizado";
//     body.appendChild(newLabel);
// }

// function CuentaRegresiva(){
//     let numeroMaximo=10;

//     let interval = setInterval(function() {
//         numeroMaximo=numeroMaximo-1;
//         btnCuenta.innerHTML= numeroMaximo;
//         if(numeroMaximo==5){
//             btnCuenta.style.backgroundColor='red'
//         }else if( numeroMaximo <= 0){
//             btnCuenta.style.backgroundColor='green'
//             clearInterval(interval)
//         }
//     }, 1000);
// }

var  btnIngresar = document.getElementById('ingresar');
var  pass        = document.getElementById('pass');
var  usuario     = document.getElementById('user')
var  pantallaCarga  = document.getElementById('pantallaCarga');

btnIngresar.addEventListener('click',()=>{
    if(pass.value === '' && usuario.value === ''){
        alert("Favor de llenar los campos")
    }else if(pass.value === '12345' && usuario.value === 'Administrador'){
        pantallaCarga.style.display = 'initial';
        setTimeout(() => {
            
            pantallaCarga.style.display = 'none';
               
        }, 5000);
    }
})