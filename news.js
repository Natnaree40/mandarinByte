//เลือกปุ่มและ div ที่จะซ่อน
const button = document.querySelector(".show-translate")
const translation = document.querySelector(".thai-translate")
//เพิ่ม Event Listener ให้กับปุ่ม
button.addEventListener("click", function() {
    //เช็คว่า div ซ่อนอยู่หรือไม่
    if(translation.style.display === 'none') {
        //หากซ่อนอยู่ ให้แสดง div
        translation.style.display = 'block'
        button.textContent = 'ซ่อนคำแปล' //เปลี่ยนข้อความบนปุ่ม
    } else {
        //หากแสดงอยู่ ให้ซ่อน div
        translation.style.display = 'none';
        button.textContent = 'แสดงคำแปล'; //เปลี่ยนข้อความบนปุ่ม
    }
})