const body     = document.querySelector('body');
const stNameIn = document.querySelector('#name1'); 
const message  = document.querySelector('.message');
const note1In  = document.querySelector('#nota1'); 
const note2In  = document.querySelector('#nota2'); 
const colorIn  = document.querySelector('#color');
const submit   = document.querySelector('#enviar');
const changeBc = document.querySelector('#change');
const emptyPlc = document.querySelector('.sentence');
const respEmpty= document.querySelector('.emptyIn');
const select   = document.querySelector('select');
const rangeRes = document.querySelector('#rangeResponse');
const stNameH3 = document.querySelector('#stNameH3');

submit.addEventListener('click', () => {

    const note1 = parseFloat(note1In.value * 0.3);
    const note2 = parseFloat(note2In.value * 0.3);

    if ( stNameIn.value == "" || note1In.value == "" || note2In.value == "" ) {
        respEmpty.innerText = "* Hay campos sin completar"

    }
    else if ( (note1In.value > 5 || note1In.value < 0) || (note2In.value > 5 || note2In.value < 0) ) {
        respEmpty.innerText = "* Hay campos fuera de rango, 0 - 5"
    }
    else{
        respEmpty.innerText = ""
        stNameH3.innerText = stNameIn.value
    
        const valueNote = parseFloat(select.value);
        const finalNote = missing( note1, note2, valueNote );
        noteValidation( finalNote, valueNote );
    }

});

changeBc.addEventListener('click', () => {

    body.style.backgroundColor = (colorIn.value)
})

const missing = (n1, n2, check ) => {

    const missing = check - (n1 + n2);

    const needed = (missing * 100) / 40;

    return needed;
    
}

const noteValidation = ( note, select ) => {

    if ( note > 5 ) {
        rangeRes.innerText = `Ya paila, necesita un "${note}"`
        rangeRes.style.color = ('red')
        espera();
    }
    else if ( note < 0 && select == 1.9 ) {
        rangeRes.innerText = `Ya no pierde`
        rangeRes.style.color = ('red')
        espera();
    }
    else if ( (note < 5 && note > 0) && select == 1.9 ) {
        rangeRes.innerText = `Con un ${note} pierde`
        rangeRes.style.color = ('red')
        espera();
    }
    else if ( note < 0 && select == 2 ) {
        rangeRes.innerText = `No necesita más para lograrlo`
        rangeRes.style.color = ('black')
        espera();
    }
    else if ( (note <= 5 && note > 0) && (select == 4) ) {
        rangeRes.innerText = `Necesita un ${note}`
        rangeRes.style.color = ('#0089ff')
        espera();
    }
    else if ( (note <= 5 && note > 0) && (select == 3.5) ) {
        rangeRes.innerText = `Necesita un ${note}`;
        rangeRes.style.color = ('#38c515');
        espera();
        
    }
    else if ( (note <= 5 && note > 0) && (select == 2) ) {
        rangeRes.innerText = `Necesita un ${note}`
        rangeRes.style.color = ('black')
        espera();
    }
}

const espera = () => {
    setTimeout( () => {
        rangeRes.innerText = "";
    }, 5000)
}
