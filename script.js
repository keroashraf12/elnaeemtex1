// يمكنك إضافة تفاعلات بسيطة هنا
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال الرسالة بنجاح!');
});