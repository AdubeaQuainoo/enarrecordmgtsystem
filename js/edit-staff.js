// ========================================
// EDIT STAFF
// ========================================

const urlParams =
    new URLSearchParams(window.location.search);

const staffId =
    urlParams.get("id");


const staffMember =
    staffRecords.find(function (staff) {
        return staff.id === staffId;
    });


// ========================================
// CHECK STAFF MEMBER
// ========================================

if (!staffMember) {

    alert("Staff member not found.");
    window.location.href = "staff.html";

} else {

    // ========================================
    // GET FORM
    // ========================================

    const editStaffForm =
        document.getElementById("editStaffForm");


    // ========================================
    // LOAD EXISTING INFORMATION
    // ========================================

    document.getElementById("staffId").value = staffMember.id;
    document.getElementById("fullName").value = staffMember.fullName;
    document.getElementById("email").value = staffMember.email;
    document.getElementById("phone").value = staffMember.phone;
    document.getElementById("department").value = staffMember.department;
    document.getElementById("position").value = staffMember.position;
    document.getElementById("category").value = staffMember.category;
    document.getElementById("employmentType").value = staffMember.employmentType;
    document.getElementById("status").value = staffMember.status;
    document.getElementById("dateJoined").value = staffMember.dateJoined;


    // ========================================
    // SAVE CHANGES
    // ========================================

    editStaffForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const updatedStaff = {
            id: staffMember.id,
            fullName: document.getElementById("fullName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            department: document.getElementById("department").value,
            position: document.getElementById("position").value.trim(),
            category: document.getElementById("category").value,
            employmentType: document.getElementById("employmentType").value,
            status: document.getElementById("status").value,
            dateJoined: document.getElementById("dateJoined").value
        };


        const staffIndex =
            staffRecords.findIndex(function (staff) {
                return staff.id === staffId;
            });


        if (staffIndex === -1) {
            alert("Staff member could not be found.");
            return;
        }


        staffRecords[staffIndex] = updatedStaff;

        localStorage.setItem(
            "staffRecords",
            JSON.stringify(staffRecords)
        );

        alert("Staff information updated successfully!");

        window.location.href =
            "staff-profile.html?id=" + staffId;

    });

}
