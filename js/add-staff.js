// ========================================
// ADD STAFF
// ========================================

const addStaffForm =
    document.getElementById("addStaffForm");


addStaffForm.addEventListener(
    "submit",
    function (event) {

        // Stop normal form submission
        event.preventDefault();


        // ========================================
        // GET FORM VALUES
        // ========================================

        const staffId =
            document.getElementById("staffId").value.trim();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const department =
            document.getElementById("department").value;

        const position =
            document.getElementById("position").value.trim();

        const category =
            document.getElementById("category").value;

        const employmentType =
            document.getElementById("employmentType").value;

        const status =
            document.getElementById("status").value;

        const dateJoined =
            document.getElementById("dateJoined").value;


        // ========================================
        // CHECK STAFF ID
        // ========================================

        if (staffId === "") {

            alert("Please enter a Staff ID.");

            return;
        }


        // ========================================
        // CHECK FOR DUPLICATE ID
        // ========================================

        const existingStaff =
            staffRecords.find(function (staff) {

                return staff.id.toLowerCase() ===
                    staffId.toLowerCase();

            });


        if (existingStaff) {

            alert(
                "A staff member with this ID already exists."
            );

            return;
        }


        // ========================================
        // CREATE NEW STAFF OBJECT
        // ========================================

        const newStaff = {

            id: staffId,

            fullName: fullName,

            email: email,

            phone: phone,

            department: department,

            position: position,

            category: category,

            employmentType: employmentType,

            status: status,

            dateJoined: dateJoined

        };


        // ========================================
        // ADD TO STAFF ARRAY
        // ========================================

        staffRecords.push(newStaff);


        // ========================================
        // SAVE UPDATED ARRAY
        // ========================================

        localStorage.setItem(
            "staffRecords",
            JSON.stringify(staffRecords)
        );




        // ========================================
        // SUCCESS
        // ========================================

        alert(
            "Staff member added successfully!"
        );


        // ========================================
        // GO TO STAFF DIRECTORY
        // ========================================

        window.location.href =
            "staff.html";

    }
);


