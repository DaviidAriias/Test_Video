//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy(){
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal(){
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal(){
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo(){
    document.getElementById('contCanguro').classList.add('contCanguroMain--isShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress(){
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
    document.getElementById('adressAltern_B').style.display = '';
    document.getElementById('adressAltern_C').style.display = '';
    document.getElementById('noMrgnBottom').style.marginBottom = '15px';
}


//-------------------- Mostrar Información persoal
function showPersonalInfo(){
    document.getElementById('firstInfo').style.display = 'none';
    document.getElementById('secondInfo').style.display = 'inline-block';
}


//-------------------- Editar fecha cédula
function editFechaCedula(){
    document.getElementById('triggerEditFechaCedula').style.display = 'none';
    var input = document.getElementById('fecha-cedula');
    input.classList.remove('editable')
    input.disabled = false;
    input.focus();
    function openPicker(inputDateElem) {
        var ev = document.createEvent('KeyboardEvent');
        ev.initKeyboardEvent('keydown', true, true, document.defaultView, 'F4', 0);
        inputDateElem.dispatchEvent(ev);
    }
    
    openPicker(cal);
}


//-------------------- Editar pais expedición
function editPaisExpedicion(){
    document.getElementById('triggerEditPaisExpedicion').style.display = 'none';
    var input = document.getElementById("pais-expedicion");
    input.disabled = false;
    input.focus();
    input.select();
}


//-------------------- Editar pais nacimiento
function editPaisNaciemiento(){
    document.getElementById('triggerEditPaisNacimiento').style.display = 'none';
    var input = document.getElementById("pais-nacimiento");
    input.disabled = false;
    input.focus();
    input.select();
}


//-------------------- Editar ciudad nacimiento
function editCiudadNacimiento(){
    document.getElementById('triggerCiudadNacimiento').style.display = 'none';
    var input = document.getElementById("ciudad-nacimiento");
    input.disabled = false;
    input.focus();
    input.select();
}


//-------------------- Mostrar datos ocultos confirmación y resultados A
function seeMoreDetails(){
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails(){
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}


//-------------------- Mostrar datos ocultos confirmación y resultados A
function seeMoreDetails_second(){
    document.getElementById('result__ConfirToggleOpen_second').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_second').style.display = 'block';
    document.getElementById('result__ConfirToggleClose_second').style.display = '';
}

function seeLessDetails_second(){
    document.getElementById('result__ConfirToggleClose_second').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_second').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen_second').style.display = '';
}


//-------------------- Mostrar datos ocultos confirmación y resultados A
function seeMoreDetails_third(){
    document.getElementById('result__ConfirToggleOpen_third').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_third').style.display = 'block';
    document.getElementById('result__ConfirToggleClose_third').style.display = '';
}

function seeLessDetails_third(){
    document.getElementById('result__ConfirToggleClose_third').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_third').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen_third').style.display = '';
}

//-------------------- Mostrar datos ocultos confirmación y resultados A
function seeMoreDetails_fourth(){
    document.getElementById('result__ConfirToggleOpen_fourth').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_fourth').style.display = 'block';
    document.getElementById('result__ConfirToggleClose_fourth').style.display = '';
}

function seeLessDetails_fourth(){
    document.getElementById('result__ConfirToggleClose_fourth').style.display = 'none';
    document.getElementById('boxResultConfirmHidden_fourth').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen_fourth').style.display = '';
}

//-------------------- Añadir  y eliminar producto extra vinculación
function addExtraProduct(){
    document.getElementById('extraProduct').style.display = 'inline-block';
}

function deleteExtraProduct(){
    document.getElementById('extraProduct').style.display = 'none';
}


//-------------------- Formulario transferencias
function executeDropdown(){
    var dropdown = document.getElementById('cuentaDropdown').value;
    if( dropdown == 1 ) {
        console.log('Cuentas Davivienda');
        document.getElementById('pseHidden').style.display = 'none';
        document.getElementById('pseHidden--title').style.display = 'none';
        document.getElementById('outputBalance').style.display = '';
        document.getElementById('pseButton').innerHTML = 'Continuar';

        //Validation
        document.getElementById('validation').style.display = '';
        document.getElementById('monto').classList.add('input--alert');
    }
    if( dropdown == 2 ) {
        console.log('PSE');
        document.getElementById('pseHidden').style.display = '';
        document.getElementById('pseHidden--title').style.display = '';
        document.getElementById('outputBalance').style.display = 'none';
        document.getElementById('pseButton').innerHTML = 'Transferir';
        
        //Validation
        document.getElementById('validation').style.display = 'none';
        document.getElementById('monto').classList.remove('input--alert');
    }
}


//-------------------- Validar focus input
function focusIn(){
    if (screen.width<800){
        //console.log('Focus In');
        document.getElementById('support').style.position = 'relative';
    }else{
        document.getElementById('support').style.position = '';
    }
}

function focusOut(){
    if (screen.width<800){
        //console.log('Focus Out');
        document.getElementById('support').style.position = '';
    }else{
        document.getElementById('support').style.position = '';
    }
}

