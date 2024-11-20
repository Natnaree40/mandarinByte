const button1 = document.querySelector(".vocab-title")
const vocab = document.querySelector(".vocab-list")
button1.addEventListener("click", function() {
    if(vocab.style.display === 'none') {
        vocab.style.display = 'block'
        button1.textContent = 'ซ่อนคำศัพท์สำคัญ'
    } else {
        vocab.style.display = 'none'
        button1.textContent = 'แสดงคำศัพท์สำคัญ'
    }
})

//เลือกปุ่มและ div ที่จะซ่อน
const button2 = document.querySelector(".show-translate")
const translation = document.querySelector(".thai-translate")
//เพิ่ม Event Listener ให้กับปุ่ม
button2.addEventListener("click", function() {
    //เช็คว่า div ซ่อนอยู่หรือไม่
    if(translation.style.display === 'none') {
        //หากซ่อนอยู่ ให้แสดง div
        translation.style.display = 'block'
        button2.textContent = 'ซ่อนคำแปล' //เปลี่ยนข้อความบนปุ่ม
    } else {
        //หากแสดงอยู่ ให้ซ่อน div
        translation.style.display = 'none';
        button2.textContent = 'แสดงคำแปล'; //เปลี่ยนข้อความบนปุ่ม
    }
})