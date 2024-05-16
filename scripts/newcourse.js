function addCourse() {
    //alert('Add Course using fetch');
    // Create JSON object to include in the request body
    let bodyData = {
        dept: document.getElementById("deptname").value,
        courseNum: document.getElementById("coursenumber").value,
        courseName: document.getElementById("coursename").value,
        instructor: document.getElementById("instruct").value,
        startDate: document.getElementById("startdate").value,
        numDays: document.getElementById("noOfdays").value,
    }
    console.log(JSON.stringify(bodyData));
    fetch("http://localhost:8081/api/courses", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // If the POST finishes successfully, ...
            location.replace("index.html")
        })
        .catch(err => {
            // If the POST returns an error, ...
            console.error(err);
        });



}