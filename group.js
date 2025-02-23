 // إظهار الفورم
 function showAddForm() {
    document.getElementById("addForm").style.display = "block";
}

// إخفاء الفورم
function hideAddForm() {
    document.getElementById("addForm").style.display = "none";
}

// إضافة المجموعة إلى الجدول
function addGroup() {
    let table = document.getElementById("groupTable");
    let groupName = document.getElementById("groupName").value;

    if (groupName.trim() === "") {
        alert("يرجى إدخال اسم المجموعة!");
        return;
    }

    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = table.rows.length; // الرقم التسلسلي
    cell2.innerHTML = groupName;
    cell3.innerHTML = `
        <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i> عرض</button>
        <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i> تعديل</button>
        <button class="btn btn-danger btn-sm" onclick="deleteRow(this)"><i class="fas fa-trash"></i> حذف</button>
    `;

    document.getElementById("groupName").value = ""; // تصفير الحقل
    hideAddForm(); // إخفاء الفورم بعد الحفظ
}

// حذف الصف
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}