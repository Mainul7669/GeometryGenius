//Generates Random Color
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


//Output serially
function displayData(card_Name, calculatedResult) {
    const container = document.getElementById('table-container')
    //create new tr
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${serial}</td>
<td>${card_Name}</td>
<td>${calculatedResult}cm<sup>2</sup></td>
`
    container.appendChild(tr);
}