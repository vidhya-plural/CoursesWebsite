const urlParams = new URLSearchParams(location.search);
// location.search returns the query string part of the URL
let cid = -1;
if (urlParams.has("cid") === true) {
    cid = urlParams.get("cid")
    // call a method that fetches this course
    getCourse(cid);
}

function getCourse(cid) {
    fetch('http://localhost:8081/api/courses/' + cid)
        .then(response => response.json())
        .then(course => {
            // this returns a single course!
            const container =
                document.getElementById('courseContainerDiv');

            // display one course property in a <p>
            const deptP1 = document.createElement('p');
            deptP1.textContent = `Department Name: ${course.dept}`;
            container.appendChild(deptP1);

            const deptP2 = document.createElement('p');
            deptP2.textContent = `Course Number: ${course.courseNum}`;
            container.appendChild(deptP2);

            const deptP3 = document.createElement('p');
            deptP3.textContent = `Course Name: ${course.courseName}`;
            container.appendChild(deptP3);

            const deptP4 = document.createElement('p');
            deptP4.textContent = `Instructor: ${course.instructor}`;
            container.appendChild(deptP4);

            const deptP5 = document.createElement('p');
            deptP5.textContent = `Start Date: ${course.startDate}`;
            container.appendChild(deptP5);

            const deptP6 = document.createElement('p');
            deptP6.textContent = `Number of Days: ${course.numDays}`;
            container.appendChild(deptP6);

            // repeat for each field you want to display

        })

        .catch(error => {
            // handle errors that occurred during the fetch request
            console.error(error);
        });
}