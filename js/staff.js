// ========================================
// STAFF DIRECTORY
// ========================================


// ========================================
// GET HTML ELEMENTS
// ========================================

const staffTableBody =
    document.getElementById("staffTableBody");

const staffCount =
    document.getElementById("staffCount");

const searchInput =
    document.getElementById("searchInput");

const departmentFilter =
    document.getElementById("departmentFilter");

const categoryFilter =
    document.getElementById("categoryFilter");

const employmentTypeFilter =
    document.getElementById("employmentTypeFilter");

const statusFilter =
    document.getElementById("statusFilter");


// ========================================
// DISPLAY STAFF
// ========================================

function displayStaff(records) {

    staffTableBody.innerHTML = "";


    // No matching records
    if (records.length === 0) {

        staffTableBody.innerHTML = `
            <tr>
                <td colspan="8">
                    No staff records found.
                </td>
            </tr>
        `;

        staffCount.textContent = "0 records";

        return;
    }


    // Display each staff member
    records.forEach(function (staff) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${staff.id}
            </td>

            <td>
                ${staff.fullName}
            </td>

            <td>
                ${staff.department}
            </td>

            <td>
                ${staff.position}
            </td>

            <td>
                ${staff.category}
            </td>

            <td>
                ${staff.employmentType}
            </td>

            <td>
                ${staff.status}
            </td>

            <td>

                <a
                    href="staff-profile.html?id=${staff.id}"
                    class="view-button"
                >
                    View
                </a>

            </td>

        `;


        staffTableBody.appendChild(row);

    });


    // Update number of displayed records
    staffCount.textContent =
        `${records.length} records`;

}


// ========================================
// LOAD FILTER OPTIONS
// ========================================

function loadFilters() {


    // Departments
    const departments =
        [...new Set(
            staffRecords.map(
                staff => staff.department
            )
        )];


    departments.forEach(function (department) {

        const option =
            document.createElement("option");

        option.value = department;

        option.textContent = department;

        departmentFilter.appendChild(option);

    });


    // Categories
    const categories =
        [...new Set(
            staffRecords.map(
                staff => staff.category
            )
        )];


    categories.forEach(function (category) {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        categoryFilter.appendChild(option);

    });


    // Employment Types
    const employmentTypes =
        [...new Set(
            staffRecords.map(
                staff => staff.employmentType
            )
        )];


    employmentTypes.forEach(function (type) {

        const option =
            document.createElement("option");

        option.value = type;

        option.textContent = type;

        employmentTypeFilter.appendChild(option);

    });


    // Employment Statuses
    const statuses =
        [...new Set(
            staffRecords.map(
                staff => staff.status
            )
        )];


    statuses.forEach(function (status) {

        const option =
            document.createElement("option");

        option.value = status;

        option.textContent = status;

        statusFilter.appendChild(option);

    });

}


// ========================================
// FILTER STAFF
// ========================================

function filterStaff() {


    // Get search value
    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    // Get selected filters
    const selectedDepartment =
        departmentFilter.value;

    const selectedCategory =
        categoryFilter.value;

    const selectedEmploymentType =
        employmentTypeFilter.value;

    const selectedStatus =
        statusFilter.value;


    // Filter the records
    const filteredStaff =
        staffRecords.filter(function (staff) {


            // Search condition
            const matchesSearch =

                staff.fullName
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                staff.id
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                staff.position
                    .toLowerCase()
                    .includes(searchTerm);


            // Department condition
            const matchesDepartment =

                selectedDepartment === "" ||

                staff.department === selectedDepartment;


            // Category condition
            const matchesCategory =

                selectedCategory === "" ||

                staff.category === selectedCategory;


            // Employment type condition
            const matchesEmploymentType =

                selectedEmploymentType === "" ||

                staff.employmentType === selectedEmploymentType;


            // Status condition
            const matchesStatus =

                selectedStatus === "" ||

                staff.status === selectedStatus;


            // All conditions must be true
            return (

                matchesSearch &&

                matchesDepartment &&

                matchesCategory &&

                matchesEmploymentType &&

                matchesStatus

            );

        });


    // Display filtered records
    displayStaff(filteredStaff);

}


// ========================================
// SEARCH EVENT
// ========================================

searchInput.addEventListener(
    "input",
    filterStaff
);


// ========================================
// FILTER EVENTS
// ========================================

departmentFilter.addEventListener(
    "change",
    filterStaff
);


categoryFilter.addEventListener(
    "change",
    filterStaff
);


employmentTypeFilter.addEventListener(
    "change",
    filterStaff
);


statusFilter.addEventListener(
    "change",
    filterStaff
);




// ========================================
// START STAFF DIRECTORY
// ========================================

loadFilters();

displayStaff(staffRecords);

