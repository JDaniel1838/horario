const d = document,
    ls = localStorage;
let VariableBoton = undefined,
    botonClickVG = undefined,
    HoyEs = undefined;


function QuitarLoading() {

        
    setTimeout(() => {
        setTimeout(() => {
            d.querySelector(".cargaInicio").classList.toggle("desavilidado");
        }, 500);
        d.querySelector(".cargaInicio").classList.toggle("animate__fadeOutUp");
        
    }, 4000);
    
}

function ActualizarValores() {
    const $selectors = d.querySelectorAll("[data-hora]"); 

    $selectors.forEach(el => {
        let ClassName = `.${el.className}`;

        if (ls.getItem(`${ClassName}`)) {
            el.innerText = ls.getItem(`${ClassName}`);
        }
    });
        
    /*Funcioan haci, guardas todos los elementos en una variable, luego con un forEachs ves si hay una variable en local storage  
    si la hay, la colocas en el documento, si  no, no pasa nada*/
}

function FechayActividad() {
    let fecha = new Date(),
        diajs = fecha.getDate(),
        mesjs = fecha.getMonth(),
        aniojs = fecha.getFullYear();
    DiaLetra = fecha.getDay();
    console.log(DiaLetra);
    
    
    //ConvertirDiadeSemana en letra
    if (DiaLetra === 0) {
        DiaLetra = "Domingo";
        HoyEs = DiaLetra;
    }

    if (DiaLetra === 1) {
        DiaLetra = "Lunes";
        HoyEs = DiaLetra;
        
    }

    if (DiaLetra ===2) {
        DiaLetra = "Martes";
        HoyEs = DiaLetra;
    }

    if (DiaLetra ===3) {
        DiaLetra = "Miercoles";
        HoyEs = DiaLetra;
    }

    if (DiaLetra ===4) {
        DiaLetra = "Jueves";
        HoyEs = DiaLetra;
    }

    if (DiaLetra ===5) {
        DiaLetra = "Viernes";
        HoyEs = DiaLetra;
    }

    if (DiaLetra ===6) {
        DiaLetra = "Sabado";
        HoyEs = DiaLetra;
    }


    //convierte el numero del mes A letra
    if (typeof(mesjs) == "number") {
        if (mesjs == 0) {
            mesjs = "Enero";
        }

        if (mesjs == 1) {
            mesjs = "Febrero";
        }

        if (mesjs == 2) {
            mesjs = "Marzo";
        }

        if (mesjs == 3) {
            mesjs = "Abril";
        }

        if (mesjs == 4) {
            mesjs = "Mayo";
        }

        if (mesjs == 5) {
            mesjs = "Junio";
        }

        if (mesjs == 6) {
            mesjs = "Julio";
        }

        if (mesjs == 7) {
            mesjs = "Agosto";
        }

        if (mesjs == 8) {
            mesjs = "Septiembre";
        }

        if (mesjs == 9) {
            mesjs = "Octubre";
        }
        
        if (mesjs == 10) {
            mesjs = "Noviembre";
        }

        if (mesjs == 11) {
            mesjs = "Diciembre";
        }
    }

    setInterval(() => {
        let fechaReloj = new Date,
            horajs = fechaReloj.getHours(),
        minutosjs = fechaReloj.getMinutes(),
            segundosjs = fechaReloj.getSeconds();
        
        //Convierte el formato de hora a 12 Hrs
        if (horajs >=13) {
            
            //Aqui si la hora es mayor a 12 quiere decir que cambiamos al uso horario PM
            if (horajs >= 12) {
                d.querySelector(".AM").innerText = "PM";
            }
            horajs = (horajs - 12);
        }

        if (horajs <13) {
            if (horajs<10) {
                horajs = `0${horajs}`;
            }
            if (horajs) {
                
            }
        }

        if (minutosjs<10) {
            minutosjs =`0${minutosjs}`;
        }

        if (segundosjs<10) {
            segundosjs =`0${segundosjs}`;
        }
        //*****************************************/

        d.querySelector(".diaTitle").innerText = diajs,
        d.querySelector(".mes").innerText = mesjs,
        d.querySelector(".año").innerText = aniojs,
        d.querySelector(".hora").innerText = horajs,
        d.querySelector(".minutos").innerText = minutosjs,
        d.querySelector(".segundos").innerText = segundosjs;
        d.querySelector(".DiaLetra").innerText = DiaLetra;
        
    }, 1000);

}

function AgregarTarea(botonClick) {
    const $Dia = d.querySelector(".dia"),
        $PlaceHolder = d.querySelector(".placeholder");
    
    d.addEventListener("click", (e) => {
        if (e.target.matches(botonClick)) {
                BotonDatos = d.querySelector(botonClick);
            
            $Dia.innerText = `Dia: ${BotonDatos.dataset.dia} ${BotonDatos.dataset.hora}`;
            //If para que si no hay actividad se ponga un mensaje
            if (BotonDatos.innerText=="") {
                BotonDatos.innerText == "No tienes actividades Programadas";
                $PlaceHolder.value= "";
            }
            $PlaceHolder.value = `${BotonDatos.innerText}`;
            

            //Activan el formulario
            VariableBoton = d.querySelector(botonClick);
            d.querySelector(".form").classList.remove("animate__fadeOut");
            d.querySelector(".form").classList.toggle("animate__fadeIn");
            d.querySelector(".form").classList.toggle("active");
            

            //guarda la variable en local Stage
            botonClickVG = botonClick;
            
        }
    });
}

function ActualizarValor(BotonActualizar, btnClock) {
    const  $Dia = d.querySelector(".dia"),
    $PlaceHolder = d.querySelector(".placeholder"),
        BotonFormulario = d.querySelector(".ButtonSubmit");
    
    d.addEventListener("click", (e) => {
        if (e.target.matches(BotonActualizar)) {
            VariableBoton.innerText = $PlaceHolder.value;

            ls.setItem(`${botonClickVG}`, `${$PlaceHolder.value}`);
            d.querySelector(".form").classList.remove("animate__fadeIn");
            d.querySelector(".form").classList.toggle("animate__fadeOut");
            
            setTimeout(() => {
                d.querySelector(".form").classList.remove("active");
            }, 1000);
        };

        if (e.target.matches(btnClock)) {
            d.querySelector(".form").classList.remove("animate__fadeIn");
            d.querySelector(".form").classList.toggle("animate__fadeOut");
            
            setTimeout(() => {
                d.querySelector(".form").classList.remove("active");
            }, 1000);
        }
    });
    
}
    
function CargaBotones() {
    AgregarTarea(".lunes-7am");
    AgregarTarea(".lunes-8am");
    AgregarTarea(".lunes-9am");
    AgregarTarea(".lunes-10am");
    AgregarTarea(".lunes-11am");
    AgregarTarea(".lunes-12am");
    AgregarTarea(".lunes-1pm");
    AgregarTarea(".lunes-2pm");
    AgregarTarea(".lunes-3pm");
    AgregarTarea(".lunes-4pm");
    AgregarTarea(".lunes-5pm");
    AgregarTarea(".lunes-6pm");
    AgregarTarea(".lunes-7pm");
    AgregarTarea(".lunes-8pm");
    AgregarTarea(".lunes-9pm");
    AgregarTarea(".lunes-10pm");
    AgregarTarea(".lunes-11pm");

    AgregarTarea(".martes-7am");
    AgregarTarea(".martes-8am");
    AgregarTarea(".martes-9am");
    AgregarTarea(".martes-10am");
    AgregarTarea(".martes-11am");
    AgregarTarea(".martes-12am");
    AgregarTarea(".martes-1pm");
    AgregarTarea(".martes-2pm");
    AgregarTarea(".martes-3pm");
    AgregarTarea(".martes-4pm");
    AgregarTarea(".martes-5pm");
    AgregarTarea(".martes-6pm");
    AgregarTarea(".martes-7pm");
    AgregarTarea(".martes-8pm");
    AgregarTarea(".martes-9pm");
    AgregarTarea(".martes-10pm");
    AgregarTarea(".martes-11pm");

    AgregarTarea(".miercoles-7am");
    AgregarTarea(".miercoles-8am");
    AgregarTarea(".miercoles-9am");
    AgregarTarea(".miercoles-10am");
    AgregarTarea(".miercoles-11am");
    AgregarTarea(".miercoles-12am");
    AgregarTarea(".miercoles-1pm");
    AgregarTarea(".miercoles-2pm");
    AgregarTarea(".miercoles-3pm");
    AgregarTarea(".miercoles-4pm");
    AgregarTarea(".miercoles-5pm");
    AgregarTarea(".miercoles-6pm");
    AgregarTarea(".miercoles-7pm");
    AgregarTarea(".miercoles-8pm");
    AgregarTarea(".miercoles-9pm");
    AgregarTarea(".miercoles-10pm");
    AgregarTarea(".miercoles-11pm");

    AgregarTarea(".jueves-7am");
    AgregarTarea(".jueves-8am");
    AgregarTarea(".jueves-9am");
    AgregarTarea(".jueves-10am");
    AgregarTarea(".jueves-11am");
    AgregarTarea(".jueves-12am");
    AgregarTarea(".jueves-1pm");
    AgregarTarea(".jueves-2pm");
    AgregarTarea(".jueves-3pm");
    AgregarTarea(".jueves-4pm");
    AgregarTarea(".jueves-5pm");
    AgregarTarea(".jueves-6pm");
    AgregarTarea(".jueves-7pm");
    AgregarTarea(".jueves-8pm");
    AgregarTarea(".jueves-9pm");
    AgregarTarea(".jueves-10pm");
    AgregarTarea(".jueves-11pm");

    AgregarTarea(".viernes-7am");
    AgregarTarea(".viernes-8am");
    AgregarTarea(".viernes-9am");
    AgregarTarea(".viernes-10am");
    AgregarTarea(".viernes-11am");
    AgregarTarea(".viernes-12am");
    AgregarTarea(".viernes-1pm");
    AgregarTarea(".viernes-2pm");
    AgregarTarea(".viernes-3pm");
    AgregarTarea(".viernes-4pm");
    AgregarTarea(".viernes-5pm");
    AgregarTarea(".viernes-6pm");
    AgregarTarea(".viernes-7pm");
    AgregarTarea(".viernes-8pm");
    AgregarTarea(".viernes-9pm");
    AgregarTarea(".viernes-10pm");
    AgregarTarea(".viernes-11pm");

    AgregarTarea(".sabado-7am");
    AgregarTarea(".sabado-8am");
    AgregarTarea(".sabado-9am");
    AgregarTarea(".sabado-10am");
    AgregarTarea(".sabado-11am");
    AgregarTarea(".sabado-12am");
    AgregarTarea(".sabado-1pm");
    AgregarTarea(".sabado-2pm");
    AgregarTarea(".sabado-3pm");
    AgregarTarea(".sabado-4pm");
    AgregarTarea(".sabado-5pm");
    AgregarTarea(".sabado-6pm");
    AgregarTarea(".sabado-7pm");
    AgregarTarea(".sabado-8pm");
    AgregarTarea(".sabado-9pm");
    AgregarTarea(".sabado-10pm");
    AgregarTarea(".sabado-11pm");

    AgregarTarea(".domingo-7am");
    AgregarTarea(".domingo-8am");
    AgregarTarea(".domingo-9am");
    AgregarTarea(".domingo-10am");
    AgregarTarea(".domingo-11am");
    AgregarTarea(".domingo-12am");
    AgregarTarea(".domingo-1pm");
    AgregarTarea(".domingo-2pm");
    AgregarTarea(".domingo-3pm");
    AgregarTarea(".domingo-4pm");
    AgregarTarea(".domingo-5pm");
    AgregarTarea(".domingo-6pm");
    AgregarTarea(".domingo-7pm");
    AgregarTarea(".domingo-8pm");
    AgregarTarea(".domingo-9pm");
    AgregarTarea(".domingo-10pm");
    AgregarTarea(".domingo-11pm");
}

function MostrarActividades() {
    const ContentActivity = d.querySelector(".TarjetaContendora"),
        HoyEsVarLocal = HoyEs,
        HoraActual = new Date();
    
    HoraActualVG = HoraActual.getHours();
    let Contador = 0;
    
    if (HoyEsVarLocal === "Lunes") {
        let Dia = "lunes";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }
    
    if (HoyEsVarLocal === "Martes") {
        let Dia = "martes";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }

    if (HoyEsVarLocal === "Miercoles") {
        let Dia = "miercoles";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }

    if (HoyEsVarLocal === "Jueves") {
        let Dia = "jueves";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }

    if (HoyEsVarLocal === "Viernes") {
        let Dia = "viernes";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }
    
    if (HoyEsVarLocal === "Sabado") {
        let Dia = "Sabado";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }

    if (HoyEsVarLocal === "Domingo") {
        let Dia = "Domingo";

        //Cambiar Miercoles por Martes para que funcione en la linea 410 y 412
        if (ls.getItem(`.${Dia}-9am`)) {
            let Hora = 9;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }
        
        if (ls.getItem(`.${Dia}-10am`)) {
            let Hora = 10;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-11am`)) {
            let Hora = 11;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} AM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-12am`)) {
            let Hora = 12;
            if (HoraActualVG == Hora || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
            NuevaActividad.innerHTML = `<span>${Hora} PM</span><p>${ls.getItem(`.${Dia}-${Hora}am`)}</p>`;
                ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-1pm`)) {
            if (HoraActualVG == 13 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>1 PM</span><p>${ls.getItem(`.${Dia}-1pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-2pm`)) {
            if (HoraActualVG == 14 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>2 PM</span><p>${ls.getItem(`.${Dia}-2pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-3pm`)) {
            if (HoraActualVG == 15 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>3 PM</span><p>${ls.getItem(`.${Dia}-3pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-4pm`)) {
            if (HoraActualVG == 16 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>4 PM</span><p>${ls.getItem(`.${Dia}-4pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-5pm`)) {
            if (HoraActualVG == 17 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>5 PM</span><p>${ls.getItem(`.${Dia}-5pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-6pm`)) {
            if (HoraActualVG == 18 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>6 PM</span><p>${ls.getItem(`.${Dia}-6pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
            
        }

        if (ls.getItem(`.${Dia}-7pm`)) {
            if (HoraActualVG == 19 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>7 PM</span><p>${ls.getItem(`.${Dia}-7pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-8pm`)) {
            if (HoraActualVG == 20 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>8 PM</span><p>${ls.getItem(`.${Dia}-8pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-9pm`)) {
            if (HoraActualVG == 21 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>9 PM</span><p>${ls.getItem(`.${Dia}-9pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-10pm`)) {
            if (HoraActualVG == 22 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>10 PM</span><p>${ls.getItem(`.${Dia}-10pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

        if (ls.getItem(`.${Dia}-11pm`)) {
            if (HoraActualVG == 23 || Contador == 1) {
                let NuevaActividad = d.createElement("div");
                
                NuevaActividad.innerHTML = `<span>11 PM</span><p>${ls.getItem(`.${Dia}-11pm`)}</p>`;
                    ContentActivity.appendChild(NuevaActividad);
                Contador = 1;
            }
        }

    }

    //SI HAY UNA VAR EN LOCAL STORAGE DE ESTA FECHA LA VA A PONER EN EL DOM
    
}

function MostrarHorario(MostrarHorario, CerrarHorario) {
    d.addEventListener("click", (e) => {
        if (e.target.matches(MostrarHorario)) {
            d.querySelector(".content").classList.remove("animate__fadeOut");
            d.querySelector(".content").classList.toggle("activado");
            d.querySelector(".content").classList.toggle("animate__fadeIn");
            
        }

        if (e.target.matches(CerrarHorario)) {
            d.querySelector(".content").classList.remove("animate__fadeIn");
            d.querySelector(".content").classList.toggle("animate__fadeOut");

            setTimeout(() => {
                d.querySelector(".content").classList.remove("activado");
            }, 1000);
        }
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    FechayActividad();
    MostrarActividades();
    ActualizarValores();
    QuitarLoading();
    MostrarHorario(".MostrarOrario", ".closeHours");
    CargaBotones();


    ActualizarValor(".ButtonSubmit",".Cerrar");

});