function printForm() {
    window.print();
}

function submitForm() {
    const form = document.getElementById('registrationForm');
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycby5W9t7WUlZfP6YYJBQ24i7D00jzg98YMcvZa6L3JDri6A7lTx8o4jK054PIEKnSsXV/exec', { // استبدل 'YOUR_GOOGLE_APPS_SCRIPT_URL' بالرابط الذي حصلت عليه
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        window.print(); // استدعاء وظيفة الطباعة بعد نجاح التسجيل
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء التسجيل.');
    });
}
