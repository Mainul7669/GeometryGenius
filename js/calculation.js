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


function displayData(card_1Name, triangle_result) {
    const container = document.getElementById('table-container')
    //create new tr
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${serial}</td>
<td>${card_1Name}</td>
<td>${triangle_result}</td>
`
    container.appendChild(tr);
}


