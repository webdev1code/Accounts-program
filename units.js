

// عرض منتج
function viewProduct(button) {
    let row = button.parentNode.parentNode;
    let details = "";

    row.querySelectorAll("td").forEach((td, index) => {
        if (index > 0 && index < 12) {
            details += `${td.innerText}\n`;
        }
    });

    alert(details);
}



// دالة لفتح المودال
function openModal() {
    document.getElementById("modalOverlay").style.display = "flex";
}

// دالة لإغلاق المودال
function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

// دالة لحفظ البيانات (تضيف صفًا جديدًا للجدول)
function saveUnit() {
    let unitName = document.getElementById("unitName").value;
    let unitType = document.getElementById("unitType").value;

    if (unitName === "" || unitType === "") {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    let table = document.getElementById("unitsTable");
    let row = table.insertRow();
    
    row.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${unitName}</td>
        <td>${unitType}</td>
        <td>
            <button class="btn btn-infoo btn-sm" onclick="viewunits(this)"><i class="fas fa-eye"></i> عرض</button>
            <button class="btn btn-info btn-sm" onclick="editunits(this)"><i class="fas fa-edit"></i> تعديل</button>
            <button class="btn btn-danger btn-sm" onclick="deleteunits(this)"><i class="fas fa-trash"></i> حذف</button>
        </td>
    `;

    closeModal(); // إغلاق المودال بعد الحفظ
}
