document.getElementById('patientDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let bp = document.getElementById('bp').value;
    let medication = document.getElementById('medication').value;
    let lifestyle = document.getElementById('lifestyle').value;

    let status = checkBloodPressure(bp);

    let table = document.getElementById('patientTableBody');
    let row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${bp}</td><td>${medication}</td><td>${lifestyle}</td><td>${status}</td>`;

    document.getElementById('patientDataForm').reset();
});
function checkBloodPressure(bp) {
    let [systolic, diastolic] = bp.split('/').map(Number);
    if (systolic > 140 || diastolic > 90) {
        return `<span style="color: red;">High Risk</span>`;
    } else if (systolic < 90 || diastolic < 60) {
        return `<span style="color: orange;">Low BP</span>`;
    } else {
        return `<span style="color: green;">Normal</span>`;
    }
}
