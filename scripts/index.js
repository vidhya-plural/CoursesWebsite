 // fetches all users and places their names and emails in a table
 try {

    fetch("http://localhost:8081/api/courses")
        .then(response => {
            if (response.status === 200)
                return response.json();
            else return "";
        })

        .then(data => { displayUsersData(data) });
}
catch (error) {
    // TypeError: Failed to fetch
    console.log('There was an error', error);
    errorDisplay();
}

    function errorDisplay() {
        let table = document.getElementById("usersTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = "Run node server locally: node server.js";
        console.error(cell1.innerHTML);
        return;

    }
function displayUsersData(data) {
    if (data === "") {
        errorDisplay();
    }
    let table = document.getElementById("usersTable");

    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        const detailsCell = row.insertCell(3);
        const deleteCell = row.insertCell(4);
        cell1.innerHTML = data[i].dept;
        cell2.innerHTML = data[i].courseNum;
        cell3.innerHTML = data[i].courseName;


       
        let anchor1 = document.createElement("a");
        anchor1.href = `details.html?cid=${data[i].id}`;
        anchor1.text = "See details";  
        detailsCell.appendChild(anchor1);

        let anchor2 = document.createElement("a");
        anchor2.href = `confirm-delete.html?cid=${data[i].id}`;
        anchor2.text = "Delete";  
        deleteCell.appendChild(anchor2);

    }
}