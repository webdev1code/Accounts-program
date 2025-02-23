// فتح المودال عند الضغط على زر "أضف"
function sectionsTable() {
    document.getElementById("sectionModal").style.display = "flex";
}

// إغلاق المودال
function closeModal() {
    document.getElementById("sectionModal").style.display = "none";
}

// حفظ القسم الجديد وإضافته إلى الجدول
function saveSection() {
    let name = document.getElementById("sectionName").value;
    let group = document.getElementById("sectionGroup").value;

    if (name.trim() === "" || group.trim() === "") {
        alert("يرجى إدخال جميع البيانات");
        return;
    }

    let table = document.getElementById("sectionsTable");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    let rowCount = table.rows.length;
    cell1.textContent = rowCount;
    cell2.textContent = name;
    cell3.textContent = group;
    
    // إضافة أزرار الإجراءات
    cell4.innerHTML = `
        <button class="btn btn-infoo btn-sm" onclick="viewsections(this)"><i class="fas fa-eye"></i> عرض</button>
        <button class="btn btn-info btn-sm" onclick="editsections(this)"><i class="fas fa-edit"></i> تعديل</button>
        <button class="btn btn-danger btn-sm" onclick="deletesections(this)"><i class="fas fa-trash"></i> حذف</button>
    `;

    // إغلاق المودال بعد الحفظ
    closeModal();
}