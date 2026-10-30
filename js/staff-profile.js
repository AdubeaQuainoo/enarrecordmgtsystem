// ========================================
// STAFF PROFILE
// ========================================

const urlParams =
    new URLSearchParams(window.location.search);

const staffId =
    urlParams.get("id");


const staff =
    staffRecords.find(function (record) {
        return record.id === staffId;
    });


// ========================================
// DISPLAY STAFF PROFILE
// ========================================

if (staff) {

    document.getElementById("profileName").textContent = staff.fullName;
    document.getElementById("profilePosition").textContent = staff.position;
    document.getElementById("profileAvatar").textContent =
        staff.fullName.charAt(0).toUpperCase();
    document.getElementById("profileId").textContent = staff.id;
    document.getElementById("profileEmail").textContent = staff.email;
    document.getElementById("profilePhone").textContent = staff.phone;
    document.getElementById("profileDepartment").textContent = staff.department;
    document.getElementById("profilePositionDetails").textContent = staff.position;
    document.getElementById("profileCategory").textContent = staff.category;
    document.getElementById("profileEmploymentType").textContent = staff.employmentType;
    document.getElementById("profileStatus").textContent = staff.status;
    document.getElementById("profileDateJoined").textContent = staff.dateJoined;

    document.getElementById("editStaffButton").href =
        `edit-staff.html?id=${encodeURIComponent(staff.id)}`;

} else {

    const profileCard =
        document.querySelector(".profile-card");

    if (profileCard) {
        profileCard.innerHTML = `
            <div class="no-profile">
                <h2>Staff Member Not Found</h2>
                <p>The staff record you are looking for does not exist.</p>
                <a href="staff.html">Back to Staff Directory</a>
            </div>
        `;
    }

}


// ========================================
// DELETE STAFF
// ========================================

const deleteStaffButton =
    document.getElementById("deleteStaffButton");

const deleteModal =
    document.getElementById("deleteModal");

const cancelDeleteButton =
    document.getElementById("cancelDeleteButton");

const confirmDeleteButton =
    document.getElementById("confirmDeleteButton");

const deleteMessage =
    document.getElementById("deleteMessage");


if (staff && deleteStaffButton && deleteModal) {

    deleteStaffButton.addEventListener("click", function () {

        deleteMessage.textContent =
            "Are you sure you want to delete " +
            staff.fullName +
            "? This action cannot be undone.";

        deleteModal.classList.add("show");

    });

}


if (cancelDeleteButton && deleteModal) {

    cancelDeleteButton.addEventListener("click", function () {
        deleteModal.classList.remove("show");
    });

}


if (confirmDeleteButton && deleteModal && staff) {

    confirmDeleteButton.addEventListener("click", function () {

        staffRecords =
            staffRecords.filter(function (record) {
                return record.id !== staffId;
            });

        localStorage.setItem(
            "staffRecords",
            JSON.stringify(staffRecords)
        );

        deleteModal.classList.remove("show");

        window.location.href = "staff.html";

    });

}


// Close the delete modal by clicking the overlay.
if (deleteModal) {

    deleteModal.addEventListener("click", function (event) {

        if (event.target === deleteModal) {
            deleteModal.classList.remove("show");
        }

    });

}
