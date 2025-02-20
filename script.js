// JavaScript لمعالجة رفع الملفات وعرضها
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <h3>${file.name}</h3>
                <p>تم الرفع بنجاح!</p>
                <a href="${e.target.result}" download>تنزيل الملف</a>
            `;
            document.getElementById('projects-list').appendChild(projectItem);
        };
        reader.readAsDataURL(file);
    } else {
        alert('يرجى اختيار ملف أولاً!');
    }
});