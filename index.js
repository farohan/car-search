fetch ('cars.json')
    .then(response => response.json())
    .then(json => analyze(json));

function analyze(json) {
    let target = 'Cadillac';
    let counter = 0;

    for (let i = 0; i < json.length; i++) {
        if (target == json[i]['brand']) {
            counter++;
        }
    }

    console.log(counter);
}
