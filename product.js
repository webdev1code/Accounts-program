let productIndex = 1;

// حفظ المنتج وإضافته للجدول
function saveProduct() {
    let productCode = document.getElementById("productCode").value;
    let productName = document.getElementById("productName").value;
    let category = document.getElementById("category").value;
    let unit = document.getElementById("unit").value;
    let costPrice = document.getElementById("costPrice").value;
    let wholesalePrice = document.getElementById("wholesalePrice").value;
    let semiWholesalePrice = document.getElementById("semiWholesalePrice").value;
    let retailPrice = document.getElementById("retailPrice").value;
    let orderLimit = document.getElementById("orderLimit").value;
    let barcode = document.getElementById("barcode").value;

    if (!productCode || !productName || !category || !retailPrice) {
        alert("الرجاء إدخال جميع البيانات المطلوبة!");
        return;
    }

    let table = document.getElementById("productTable");
    let row = table.insertRow();
    row.innerHTML = `
        <td>${productIndex++}</td>
        <td>${productCode}</td>
        <td>${productName}</td>
        <td>${category}</td>
        <td>${unit}</td>
        <td>${costPrice}</td>
        <td>${wholesalePrice}</td>
        <td>${semiWholesalePrice}</td>
        <td>${retailPrice}</td>
        <td>${orderLimit}</td>
        <td>${barcode}</td>
        <td>
            <button class="btn btn-info btn-sm" onclick="editProduct(this)"><i class="fas fa-edit"></i> تعديل</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(this)"><i class="fas fa-trash"></i> حذف</button>
        </td>
    `;

    closeCard(); // إغلاق الفورم بعد الإضافة
}

// حذف المنتج
function deleteProduct(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}

// تعديل المنتج
function editProduct(btn) {
    let row = btn.parentNode.parentNode;
    
    document.getElementById("productCode").value = row.cells[1].innerText;
    document.getElementById("productName").value = row.cells[2].innerText;
    document.getElementById("category").value = row.cells[3].innerText;
    document.getElementById("unit").value = row.cells[4].innerText;
    document.getElementById("costPrice").value = row.cells[5].innerText;
    document.getElementById("wholesalePrice").value = row.cells[6].innerText;
    document.getElementById("semiWholesalePrice").value = row.cells[7].innerText;
    document.getElementById("retailPrice").value = row.cells[8].innerText;
    document.getElementById("orderLimit").value = row.cells[9].innerText;
    document.getElementById("barcode").value = row.cells[10].innerText;

    openCard(); // فتح الفورم لتعديل المنتج
    row.remove(); // حذف الصف القديم وانتظار الحفظ
}



// فتح كارت الصنف
function openCard() {
    document.getElementById("productCard").classList.remove("d-none");
}

// إغلاق كارت الصنف
function closeCard() {
    document.getElementById("productCard").classList.add("d-none");
}

// عرض الصورة عند التحميل
function previewFile() {
    var preview = document.getElementById("previewImage");
    var file = document.getElementById("imageUpload").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        localStorage.setItem("productImage", reader.result); // حفظ الصورة في التخزين المحلي
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

// عند تحميل الصفحة، استرجع الصورة من التخزين المحلي
window.onload = function () {
    var savedImage = localStorage.getItem("productImage");
    if (savedImage) {
        document.getElementById("previewImage").src = savedImage;
    }
};

// تفعيل زر الحفظ عند إدخال البيانات
function enableSave() {
    document.getElementById("saveBtn").disabled = false;
}




