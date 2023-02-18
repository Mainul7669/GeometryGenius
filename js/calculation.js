
let serial = 0;
//First Card
document.getElementById("btn_call").addEventListener('click', function () {
    
    serial = serial + 1;
    const card_1Name = document.getElementById('first-name').innerText;
    

    const input_b = document.getElementById('input_b');
    const input_h = document.getElementById('input_h');

    const newInput_b_String = input_b.value;
    const newInput_h_String = input_h.value;

    const newInput_b = parseFloat(newInput_b_String);

    const newInput_h = parseFloat(newInput_h_String);


    if (isNaN(newInput_b_String) || isNaN(newInput_h_String) || newInput_b_String == '' || newInput_h_String=='') {
        return alert('Please provide a valid number');
    }


    const triangle_result = 0.5 * newInput_b * newInput_h;

    displayData(card_1Name, triangle_result.toFixed(2))


})


//Second Cart
document.getElementById("btn_call-2").addEventListener('click', function () {
    
    serial = serial + 1;
    const card_2Name = document.getElementById('second-name').innerText;
    

    const input_w = document.getElementById('input_w');
    const input_l = document.getElementById('input_l');

    const newInput_w_String = input_w.value;
    const newInput_l_String = input_l.value;


    const newInput_w = parseFloat(newInput_w_String);

    const newInput_l = parseFloat(newInput_l_String);


    if (isNaN(newInput_w_String) || isNaN(newInput_l_String) || newInput_w_String == '' || newInput_l_String=='') {
        return alert('Please provide a valid number');
    }


    const rectangle_result = newInput_w * newInput_l;

    displayData(card_2Name, rectangle_result.toFixed(2))

})


//Third Cart
document.getElementById("btn_call-3").addEventListener('click', function () {
    
    serial = serial + 1;
    const card_3Name = document.getElementById('third-name').innerText;
    

    const input_h = document.getElementById('input-h');
    const input_b = document.getElementById('input-b');

    const newInput_h_String = input_h.value;
    const newInput_b_String = input_b.value;


    const newInput_h = parseFloat(newInput_h_String);

    const newInput_b = parseFloat(newInput_b_String);


    if (isNaN(newInput_h_String) || isNaN(newInput_b_String) || newInput_h_String == '' || newInput_b_String=='') {
        return alert('Please provide a valid number');
    }


    const parallelogram_result = newInput_h * newInput_b;

    displayData(card_3Name, parallelogram_result.toFixed(2))

})


//Fourth Cart
document.getElementById("btn_call-4").addEventListener('click', function () {
    
    serial = serial + 1;
    const card_4Name = document.getElementById('fourth-name').innerText;
    

    const input_d1 = document.getElementById('input_d1');
    const input_d2 = document.getElementById('input_d2');

    const newInput_d1_String = input_d1.value;
    const newInput_d2_String = input_d2.value;


    const newInput_d1 = parseFloat(newInput_d1_String);

    const newInput_d2 = parseFloat(newInput_d2_String);


    if (isNaN(newInput_d1_String) || isNaN(newInput_d2_String) || newInput_d1_String == '' || newInput_d2_String=='') {
        return alert('Please provide a valid number');
    }


    const rhombus_result = 0.5 * newInput_d1 * newInput_d2;

    displayData(card_4Name, rhombus_result.toFixed(2))

})


//Fifth Cart
document.getElementById("btn_call-5").addEventListener('click', function () {
    
    serial = serial + 1;
    const card_5Name = document.getElementById('fifth-name').innerText;
    

    const input_p = document.getElementById('input-p');
    const input_b = document.getElementById('pentagon_b');

    const newInput_p_String = input_p.value;
    const newInput_b_String = input_b.value;


    const newInput_p = parseFloat(newInput_p_String);

    const newInput_b = parseFloat(newInput_b_String);


    if (isNaN(newInput_p_String) || isNaN(newInput_b_String) || newInput_p_String == '' || newInput_b_String=='') {
        return alert('Please provide a valid number');
    }


    const pentagon_result = 0.5 * newInput_p * newInput_b;

    displayData(card_5Name, pentagon_result.toFixed(2))

})





