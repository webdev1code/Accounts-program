document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key"); // جميع أزرار الأرقام
    const deleteKey = document.querySelector(".delete"); // زر الحذف
    const enterBtn = document.querySelector(".enter-btn"); // زر الإدخال
    const usernameField = document.getElementById("username"); // حقل اسم المستخدم
    const passwordField = document.getElementById("password"); // حقل كلمة المرور

    // دالة إغلاق الصفحة
    function closePage() {
        window.close(); // يغلق النافذة الحالية
    }
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const activeField = document.activeElement; // الحقل النشط حاليًا

            if (activeField === usernameField) {
                usernameField.value += key.textContent; // إضافة الرقم لاسم المستخدم
            } else if (activeField === passwordField) {
                passwordField.value += key.textContent; // إضافة الرقم لكلمة المرور
            }
        });
    });

    deleteKey.addEventListener("click", () => {
        const activeField = document.activeElement; // الحقل النشط

        if (activeField === usernameField) {
            usernameField.value = usernameField.value.slice(0, -1); // حذف آخر حرف
        } else if (activeField === passwordField) {
            passwordField.value = passwordField.value.slice(0, -1); // حذف آخر حرف
        }
    });

    enterBtn.addEventListener("click", () => {
        const username = usernameField.value.trim(); // إزالة المسافات الزائدة
        const password = passwordField.value.trim();

        if (username === "admin" && password === "1234") {
            window.location.href = "dash.html"; // الانتقال للصفحة الرئيسية
        } else {
            alert("⚠️ خطأ في اسم المستخدم أو كلمة المرور!"); // تنبيه عند الإدخال الخطأ
        }
    });

    // السماح بالانتقال إلى حقل كلمة المرور عند امتلاء اسم المستخدم
    usernameField.addEventListener("input", () => {
        if (usernameField.value.length >= 10) {
            passwordField.focus(); // الانتقال إلى حقل الباسورد
        }
    });
});
document.getElementById("enter-btn").addEventListener("click", function() {
    window.location.href = "dash.html"; // يوجه المستخدم للصفحة المطلوبة
});