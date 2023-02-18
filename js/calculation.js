//First Card
let serial = 0;
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

    displayData(card_1Name, triangle_result)

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

    displayData(card_2Name, rectangle_result)

})




