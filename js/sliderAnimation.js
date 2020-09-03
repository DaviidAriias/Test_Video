//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
    setupRangeFuente();
});


/////////---------------- funcion de animacion de slider con la letra  
let rangeInterval;
function setupRangeFuente() {
    const rangeSlider = document.getElementById('rangeSizeFont')
    
    let fuenteVariable = localStorage.getItem('fontSizeMain')
    if (!fuenteVariable) {
        fuenteVariable = '100'
    }


    if(rangeSlider) {

        setTimeout(() => {
            rangeInterval = setInterval(() => {
                if (rangeSlider.value < 200) {
                    rangeSlider.stepUp()
                }
            }, 2);
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 1500)

        setTimeout(() => {
            clearInterval(rangeInterval)
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Mediano';
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 2000)

        setTimeout(() => {
            rangeInterval = setInterval(() => {
                if (rangeSlider.value < 300) {
                    rangeSlider.stepUp()
                }
            }, 2);
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 2700)

        setTimeout(() => {
            clearInterval(rangeInterval)
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Grande';
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "1";
        }, 3400)

        setTimeout(() => {
            rangeInterval = setInterval(() => {
                if (rangeSlider.value > 200) {
                    rangeSlider.stepDown()
                }
            }, 2);
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 3900)
        
        setTimeout(() => {
            clearInterval(rangeInterval)
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Mediano';
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 4500)

        setTimeout(() => {
            rangeInterval = setInterval(() => {
                if (rangeSlider.value > 100) {
                    rangeSlider.stepDown()
                }
            }, 1);
            document.getElementById("signoMenos").style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 4900)

        setTimeout(() => {
            clearInterval(rangeInterval)
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Normal';
            document.getElementById("signoMenos").style.opacity = "1";
            document.getElementById("signoMas").style.opacity = "0.5";
        }, 5500)

    }

    cambiarTamanoFuente(fuenteVariable)
    document.getElementById('rangeSizeFont').addEventListener('input', (event) => {
        const valor = event.target.value;
        cambiarTamanoFuente(valor)
        localStorage.setItem('fontSizeMain', valor) 
    });

    //Se setea de nuevo el slider en un minimo de 1 y un maximo de 3
    //la propiedad value hace que el slider se devulva de nuevo al punto inicial y no se quedé en el último punto
    setTimeout(() => {
        document.getElementById("rangeSizeFont").min = "1";
        document.getElementById("rangeSizeFont").max = "3";
        document.getElementById("rangeSizeFont").value = "1";
        localStorage.setItem('fontSizeMain', 1) 
    }, 5600)
}

//////  funcion de tamaño de fuente 
function cambiarTamanoFuente(tamanoFuente) {
    switch (tamanoFuente) {
        case "1":
            document.documentElement.style.setProperty('--fontSizeMain', '14px');
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Normal';
            document.getElementById("signoMas").style.opacity = "0.5";
            document.getElementById("signoMenos").style.opacity = "1";
            break;
        case "2":
            document.documentElement.style.setProperty('--fontSizeMain', '16px');
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Mediano';
            document.getElementById("signoMas").style.opacity = "0.5";
            document.getElementById("signoMenos").style.opacity = "0.5";
            break;
        case "3":
            document.documentElement.style.setProperty('--fontSizeMain', '18px');
            document.querySelector('.rangeSlider__quantityTitles .titulo').textContent = 'Grande';
            document.querySelector('.rangeSlider__quantityTitles span').style.opacity = "0.5";
            document.getElementById("signoMas").style.opacity = "1";
            document.getElementById("signoMenos").style.opacity = "0.5";
            break;
    } 
} 