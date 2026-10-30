// ========================================
// SETTINGS PAGE
// ========================================

const resetDataButton =
    document.getElementById("resetDataButton");

const clearDataButton =
    document.getElementById("clearDataButton");


// ========================================
// RESET DEFAULT DATA
// ========================================

if (resetDataButton) {

    resetDataButton.addEventListener("click", function () {

        const confirmReset = confirm(
            "Are you sure you want to reset the staff records to the default data?"
        );

        if (!confirmReset) {
            return;
        }

        localStorage.setItem(
            "staffRecords",
            JSON.stringify(defaultStaffRecords)
        );

        alert("Staff records have been reset successfully.");

        window.location.href = "staff.html";

    });

}


// ========================================
// CLEAR ALL RECORDS
// ========================================

if (clearDataButton) {

    clearDataButton.addEventListener("click", function () {

        const confirmClear = confirm(
            "Are you sure you want to remove all staff records? This action cannot be undone."
        );

        if (!confirmClear) {
            return;
        }

        localStorage.setItem(
            "staffRecords",
            JSON.stringify([])
        );

        alert("All staff records have been cleared.");

        window.location.href = "staff.html";

    });

}
const exportDataButton =
    document.getElementById("exportDataButton");
    // ========================================
// EXPORT STAFF RECORDS
// ========================================

if (exportDataButton) {

    exportDataButton.addEventListener(
        "click",
        function () {

            if (staffRecords.length === 0) {

                alert("There are no staff records to export.");

                return;
            }


            const headers = [
                "Staff ID",
                "Full Name",
                "Email",
                "Phone",
                "Department",
                "Position",
                "Category",
                "Employment Type",
                "Status",
                "Date Joined"
            ];


            const rows = staffRecords.map(
                function (staff) {

                    return [
                        staff.id,
                        staff.fullName,
                        staff.email,
                        staff.phone,
                        staff.department,
                        staff.position,
                        staff.category,
                        staff.employmentType,
                        staff.status,
                        staff.dateJoined
                    ];

                }
            );


            const csvContent = [
                headers,
                ...rows
            ]
                .map(
                    function (row) {

                        return row
                            .map(
                                function (value) {

                                    return `"${String(value ?? "")
                                        .replace(/"/g, '""')}"`;

                                }
                            )
                            .join(",");

                    }
                )
                .join("\n");


            const blob = new Blob(
                [csvContent],
                {
                    type: "text/csv;charset=utf-8;"
                }
            );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");


            link.href = url;

            link.download =
                "EN.AR-Staff-Records.csv";


            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            URL.revokeObjectURL(url);

        }
    );

}


    