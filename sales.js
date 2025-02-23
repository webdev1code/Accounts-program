document.addEventListener('DOMContentLoaded', function() {
    // زر حفظ
    const saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', function() {
        alert('تم حفظ البيانات!');
        // يمكنك هنا إضافة وظيفة حفظ حقيقية مثل تخزين البيانات في قاعدة بيانات
    });

    // زر جديد
    const newButton = document.querySelector('.new');
    newButton.addEventListener('click', function() {
        document.getElementById('search').value = '';
        document.getElementById('invoiceDate').value = '';
        document.getElementById('deliveryDate').value = '';
        document.getElementById('sellerName').value = '';
        document.getElementById('branch').value = '';
        document.getElementById('storage').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('representativeName').value = '';
        document.getElementById('customerCode').value = '';
        document.getElementById('customerName').value = '';
        document.getElementById('priceType').value = '';
        document.getElementById('itemCode').value = '';
        document.getElementById('itemType').value = '';
        document.getElementById('itemName').value = '';
        document.getElementById('unitPrice').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('bonus').checked = false;
    });

    // زر حذف
    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            row.querySelector('.btn.delete').addEventListener('click', function() {
                row.remove();
                alert('تم حذف السطر!');
            });
        });
    });

    // زر بحث
    const searchButton = document.querySelector('.search');
    searchButton.addEventListener('click', function() {
        const searchValue = document.getElementById('search').value;
        alert('تم البحث عن: ' + searchValue);
        // يمكنك إضافة وظيفة بحث فعلية هنا.
    });

    // زر استعلام عن سعر الصنف
    const queryButton = document.querySelector('.query');
    queryButton.addEventListener('click', function() {
        const itemCode = document.getElementById('itemCode').value;
        alert('تم استعلام سعر الصنف كود: ' + itemCode);
        // هنا يمكنك إضافة وظيفة استعلام عن السعر من قاعدة بيانات أو API
    });

    // زر طباعة
    const fingerButton = document.querySelector('.finger');
    fingerButton.addEventListener('click', function() {
        window.print();  // هذه الوظيفة تقوم بطباعة الصفحة
    });

    // زر إضافة صف جديد إلى الجدول
    const addRowButton = document.querySelector('.add-row');
    addRowButton.addEventListener('click', function() {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>
                <button class="btn edit">✏️</button>
                <button class="btn delete">❌</button>
            </td>
            <td>2</td>
            <td>234</td>
            <td>نيو صنف</td>
            <td>60.00</td>
            <td>2</td>
            <td>120.00</td>
            <td>1</td>
            <td>0.00</td>
            <td>60.00</td>
            <td>
                <input type="checkbox" class="bonus-checkbox">
            </td>
        `;
        tableBody.appendChild(newRow);

        // إضافة حدث حذف لكل زر حذف في الصفوف الجديدة
        const deleteButtons = document.querySelectorAll('.btn.delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                button.closest('tr').remove();
                alert('تم حذف السطر!');
            });
        });
    });
});

function searchCustomer() {
    let customerCode = document.getElementById("customerCode").value;
    if (customerCode) {
        alert("تم البحث عن العميل برقم: " + customerCode);
        // هنا يمكنك استبدال alert بأي كود لتنفيذ البحث الفعلي
    } else {
        alert("الرجاء إدخال كود العميل أولاً");
    }
}
function closeContent() {
    document.querySelector('.content').style.display = 'none';
}