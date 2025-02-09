const form = document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    let status;

    if(bmi <= 18.6){
        status = 'You are underweight';
    }
    else if(bmi > 24.0){
        status = 'You are overweight';
    }
    else(status = 'Normal BMI Range');
    
    //    show the result

    results.innerHTML = `<span> BMI: ${bmi} - ${status}</span>`;


    }
});