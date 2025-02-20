// استيراد الوحدات اللازمة من Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// تهيئة Firebase
const firebaseConfig = {
    apiKey: "AizaSyBjZLQBp3Dpi3nvG902Fr6iqS5lZcFR1x8",
    authDomain: "eng22-974f3.firebaseapp.com",
    projectId: "eng22-974f3",
    storageBucket: "eng22-974f3.appspot.com",
    messagingSenderId: "910411844599",
    appId: "1:910411844599:web:f987ad7133fe5d1f5f7cf2",
    measurementId: "C-17H0EGX0QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// رفع الملفات
document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const storageRef = ref(storage, 'projects/' + file.name);

        try {
            // رفع الملف إلى Firebase Storage
            const snapshot = await uploadBytes(storageRef, file);
            
            // الحصول على رابط التنزيل
            const downloadURL = await getDownloadURL(snapshot.ref);
            
            // عرض المشروع في الصفحة
            displayProject(file.name, downloadURL);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('حدث خطأ أثناء رفع الملف!');
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