import { supabase } from './supabase.js';

// رفع الملفات
document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const filePath = `projects/${file.name}`;

        const { data, error } = await supabase.storage
            .from('projects')
            .upload(filePath, file);

        if (error) {
            console.error('Error uploading file:', error);
            alert('حدث خطأ أثناء رفع الملف!');
        } else {
            console.log('File uploaded successfully:', data);
            const { data: urlData } = supabase.storage
                .from('projects')
                .getPublicUrl(filePath);
            displayProject(file.name, urlData.publicUrl);
            alert('تم رفع الملف بنجاح!');
        }
    } else {
        alert('يرجى اختيار ملف أولاً!');
    }
});

// عرض المشاريع
function displayProject(name, url) {
    const projectsList = document.getElementById('projects-list');
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
        <h3>${name}</h3>
        <a href="${url}" target="_blank">عرض الملف</a>
    `;
    projectsList.appendChild(projectItem);
}