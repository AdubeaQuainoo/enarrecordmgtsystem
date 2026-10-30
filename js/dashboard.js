// ========================================
// UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    // ========================================
    // TOTAL WORKFORCE
    // ========================================

    const totalWorkforce =
        staffRecords.length;


    // ========================================
    // FULL-TIME STAFF
    // ========================================

    const fullTimeWorkers =
        staffRecords.filter(function (staff) {

            return (
                staff.category === "Staff" &&
                staff.employmentType === "Full-Time"
            );

        }).length;


    // ========================================
    // PART-TIME STAFF
    // ========================================

    const partTimeWorkers =
        staffRecords.filter(function (staff) {

            return (
                staff.category === "Staff" &&
                staff.employmentType === "Part-Time"
            );

        }).length;


    // ========================================
    // TOTAL STAFF
    // ========================================

    const totalStaff =
        fullTimeWorkers +
        partTimeWorkers;


    // ========================================
    // CONTRACT PERSONNEL
    // ========================================

    const contractPersonnel =
        staffRecords.filter(function (staff) {

            return (
                staff.category ===
                "Contract Personnel"
            );

        }).length;


    // ========================================
    // NATIONAL SERVICE PERSONNEL
    // ========================================

    const nationalService =
        staffRecords.filter(function (staff) {

            return (
                staff.category ===
                "National Service Personnel"
            );

        }).length;


    // ========================================
    // INTERNS
    // ========================================

    const totalInterns =
        staffRecords.filter(function (staff) {

            return (
                staff.category === "Intern"
            );

        }).length;


    // ========================================
    // UPDATE STATISTICS
    // ========================================

    document.getElementById(
        "totalWorkforce"
    ).textContent =
        totalWorkforce;


    document.getElementById(
        "totalStaff"
    ).textContent =
        totalStaff;


    document.getElementById(
        "fullTimeWorkers"
    ).textContent =
        fullTimeWorkers;


    document.getElementById(
        "partTimeWorkers"
    ).textContent =
        partTimeWorkers;


    document.getElementById(
        "contractPersonnel"
    ).textContent =
        contractPersonnel;


    document.getElementById(
        "nationalService"
    ).textContent =
        nationalService;


    document.getElementById(
        "totalInterns"
    ).textContent =
        totalInterns;


    // ========================================
    // WORKFORCE OVERVIEW
    // ========================================

    document.getElementById(
        "overviewTotal"
    ).textContent =
        totalWorkforce;


    document.getElementById(
        "overviewFullTime"
    ).textContent =
        fullTimeWorkers;


    document.getElementById(
        "overviewPartTime"
    ).textContent =
        partTimeWorkers;


    document.getElementById(
        "overviewContract"
    ).textContent =
        contractPersonnel;


    document.getElementById(
        "overviewNationalService"
    ).textContent =
        nationalService;


    document.getElementById(
        "overviewInterns"
    ).textContent =
        totalInterns;


    // ========================================
    // UPDATE DONUT CHART
    // ========================================

    updateOverviewChart(
        fullTimeWorkers,
        partTimeWorkers,
        contractPersonnel,
        nationalService,
        totalInterns,
        totalWorkforce
    );

}


// ========================================
// DONUT CHART
// ========================================

function updateOverviewChart(
    fullTime,
    partTime,
    contract,
    nationalService,
    interns,
    total
) {

    const overviewCircle =
        document.querySelector(
            ".overview-circle"
        );


    if (!overviewCircle) {
        return;
    }

    if (total === 0) {
        overviewCircle.style.background = "#e5e7eb";
        return;
    }


    // ========================================
    // CALCULATE PERCENTAGES
    // ========================================

    const fullTimePercent =
        (fullTime / total) * 100;


    const partTimePercent =
        (partTime / total) * 100;


    const contractPercent =
        (contract / total) * 100;


    const nationalServicePercent =
        (nationalService / total) * 100;


    // ========================================
    // CALCULATE CHART SECTIONS
    // ========================================

    const fullTimeEnd =
        fullTimePercent;


    const partTimeEnd =
        fullTimeEnd +
        partTimePercent;


    const contractEnd =
        partTimeEnd +
        contractPercent;


    const nationalServiceEnd =
        contractEnd +
        nationalServicePercent;


    // ========================================
    // CREATE DONUT CHART
    // ========================================

    overviewCircle.style.background = `
        conic-gradient(
            #2563eb 0% ${fullTimeEnd}%,
            #7c3aed ${fullTimeEnd}% ${partTimeEnd}%,
            #16a34a ${partTimeEnd}% ${contractEnd}%,
            #f59e0b ${contractEnd}% ${nationalServiceEnd}%,
            #06b6d4 ${nationalServiceEnd}% 100%
        )
    `;

}


// ========================================
// RECENT STAFF
// ========================================

function displayRecentStaff() {

    const recentStaffList =
        document.getElementById(
            "recentStaffList"
        );


    if (!recentStaffList) {
        return;
    }


    // ========================================
    // SORT STAFF BY DATE JOINED
    // ========================================

    const recentStaff =
        [...staffRecords]
            .sort(function (a, b) {

                return (
                    new Date(b.dateJoined) -
                    new Date(a.dateJoined)
                );

            })
            .slice(0, 4);


    // ========================================
    // CLEAR EXISTING CONTENT
    // ========================================

    recentStaffList.innerHTML = "";


    // ========================================
    // DISPLAY RECENT STAFF
    // ========================================

    recentStaff.forEach(function (staff) {

        const staffElement =
            document.createElement("div");


        staffElement.classList.add(
            "recent-staff"
        );


        staffElement.innerHTML = `

            <div class="staff-avatar">

                ${staff.fullName
                    .charAt(0)
                    .toUpperCase()}

            </div>


            <div class="staff-details">

                <strong>
                    ${staff.fullName}
                </strong>

                <span>
                    ${staff.position}
                </span>

            </div>


            <span class="staff-category">

                ${staff.category}

            </span>

        `;


        recentStaffList.appendChild(
            staffElement
        );

    });

}



// ========================================
// START DASHBOARD
// ========================================

updateDashboard();

displayRecentStaff();