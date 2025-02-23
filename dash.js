document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-container button");
    const images = {
        "خدمات الصيانة": "service.png",
        "أقسام الصيانة": "maintenance.png",
        "المنتجات": "products.png",
        "الأقسام": "departments.png",
        "الموظفين": "employees.png",
        "الموردين": "suppliers.png",
        "العملاء": "clients.png",
        "المشرفين": "reports.png"
    };

    buttons.forEach(button => {
        const title = button.innerText.trim();
        if (images[title]) {
            button.style.backgroundImage = `url(${images[title]})`;
            button.style.backgroundSize = "cover";
        }
    });

    // تحميل البيانات عند فتح الصفحة
    loadEmployees();
});

// تعريف متغيرات لتخزين بيانات الموظفين
let employees = [];

// تحميل بيانات الموظفين من localStorage عند بدء الصفحة
function loadEmployees() {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
        updateEmployeeTable();
    }
}

// حفظ بيانات الموظفين إلى localStorage
function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function openEmployeeModal(mode, index = null) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
        <div class="modal-box">
            <h2>${mode === "add" ? "إضافة موظف" : mode === "edit" ? "تعديل موظف" : "عرض موظف"}</h2>
            <label>الاسم:</label>
            <input type="text" id="empName" ${mode === "view" ? "disabled" : ""}>
            <label>رقم التليفون:</label>
            <input type="text" id="empPhone" ${mode === "view" ? "disabled" : ""}>
            <label>الوظيفة:</label>
            <input type="text" id="empJob" ${mode === "view" ? "disabled" : ""}>
            <div class="modal-buttons">
                ${mode !== "view" ? `<button id="saveBtn" class="save-btn">حفظ</button>` : ""}
                <button id="closeBtn" class="close-btn">إغلاق</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // تحميل بيانات الموظف عند التعديل أو العرض
    if (mode !== "add" && index !== null) {
        document.getElementById("empName").value = employees[index].name;
        document.getElementById("empPhone").value = employees[index].phone;
        document.getElementById("empJob").value = employees[index].job;
    }

    // ربط أزرار الحفظ والإغلاق بعد إنشاء النافذة
    if (mode !== "view") {
        document.getElementById("saveBtn").addEventListener("click", function () {
            saveEmployee(mode, index);
        });
    }
    document.getElementById("closeBtn").addEventListener("click", closeModal);
}

function saveEmployee(mode, index) {
    const name = document.getElementById("empName").value.trim();
    const phone = document.getElementById("empPhone").value.trim();
    const job = document.getElementById("empJob").value.trim();

    // التأكد من عدم ترك الحقول فارغة
    if (!name || !phone || !job) {
        alert("الرجاء ملء جميع الحقول!");
        return;
    }

    if (mode === "add") {
        employees.push({ name, phone, job });
    } else if (mode === "edit" && index !== null && index !== undefined) {
        employees[index] = { name, phone, job };
    }

    saveToLocalStorage(); // حفظ البيانات
    closeModal();
    updateEmployeeTable();
}

// دالة لإغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.querySelector(".modal-overlay");
    if (modal) {
        modal.remove();
    }
}

// دالة لحذف الموظف بعد التأكيد
function deleteEmployee(index) {
    if (confirm("هل تريد الحذف؟")) {
        employees.splice(index, 1);
        saveToLocalStorage(); // تحديث البيانات في localStorage
        updateEmployeeTable();
    }
}

// تحديث الجدول بعد أي عملية
function updateEmployeeTable() {
    const tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.phone}</td>
        <td>${emp.job}</td>
        <td>
            <button class="view-btn" onclick="openEmployeeModal('view', ${index})">عرض</button>
            <button class="edit-btn" onclick="openEmployeeModal('edit', ${index})">تعديل</button>
            <button class="delete-btn" onclick="deleteEmployee(${index})">حذف</button>
        </td>
    `;
        tableBody.appendChild(row);
    });
}

// تفعيل زر الإضافة
function addEmployee() {
    openEmployeeModal('add');
}

// تفعيل زر التعديل
function editEmployee(index) {
    openEmployeeModal('edit', index);
}

