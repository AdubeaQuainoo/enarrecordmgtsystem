// ========================================
// DEFAULT STAFF RECORDS
// ========================================

const defaultStaffRecords = [

    {
        id: "AD001",
        fullName: "John Mensah",
        email: "john.mensah@enar.com",
        phone: "024 123 4567",
        department: "ADUBzTech Hub",
        position: "Software Developer",
        category: "Staff",
        employmentType: "Full-Time",
        status: "Active",
        dateJoined: "2023-01-15"
    },

    {
        id: "AD002",
        fullName: "Abena Owusu",
        email: "abena.owusu@enar.com",
        phone: "024 234 5678",
        department: "Human Resources",
        position: "HR Assistant",
        category: "Staff",
        employmentType: "Full-Time",
        status: "Active",
        dateJoined: "2023-03-20"
    },

    {
        id: "AD003",
        fullName: "Kwame Boateng",
        email: "kwame.boateng@enar.com",
        phone: "024 345 6789",
        department: "Data & Analytics",
        position: "Data Analyst",
        category: "Staff",
        employmentType: "Full-Time",
        status: "On Leave",
        dateJoined: "2024-02-10"
    },

    {
        id: "AD004",
        fullName: "Akosua Darko",
        email: "akosua.darko@enar.com",
        phone: "024 456 7890",
        department: "Finance",
        position: "Accountant",
        category: "Staff",
        employmentType: "Full-Time",
        status: "Active",
        dateJoined: "2024-04-12"
    },

    {
        id: "AD005",
        fullName: "Yaw Asare",
        email: "yaw.asare@enar.com",
        phone: "024 567 8901",
        department: "ADUBzTech Hub",
        position: "UI/UX Designer",
        category: "Staff",
        employmentType: "Part-Time",
        status: "Active",
        dateJoined: "2024-05-18"
    },

    {
        id: "AD006",
        fullName: "Efua Mensah",
        email: "efua.mensah@enar.com",
        phone: "024 678 9012",
        department: "Marketing",
        position: "Marketing Intern",
        category: "Intern",
        employmentType: "Full-Time",
        status: "Active",
        dateJoined: "2025-01-10"
    },

    {
        id: "AD007",
        fullName: "Kofi Annan",
        email: "kofi.annan@enar.com",
        phone: "024 789 0123",
        department: "Operations",
        position: "Operations Intern",
        category: "Intern",
        employmentType: "Full-Time",
        status: "Active",
        dateJoined: "2025-02-15"
    },

    {
        id: "AD008",
        fullName: "Ama Ofori",
        email: "ama.ofori@enar.com",
        phone: "024 890 1234",
        department: "Legal",
        position: "Legal Assistant",
        category: "Contract Personnel",
        employmentType: "Part-Time",
        status: "Active",
        dateJoined: "2025-03-01"
    }

];


// ========================================
// LOAD STAFF RECORDS
// ========================================

let staffRecords = JSON.parse(
    localStorage.getItem("staffRecords")
);


// ========================================
// IF NO SAVED RECORDS EXIST
// USE DEFAULT RECORDS
// ========================================

if (!Array.isArray(staffRecords)) {

    staffRecords = [...defaultStaffRecords];

    localStorage.setItem(
        "staffRecords",
        JSON.stringify(staffRecords)
    );

}