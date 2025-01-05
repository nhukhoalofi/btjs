// Lấy các phần tử từ DOM
const inputCode1 = document.querySelector("#inputcode1");
const inputCode2 = document.querySelector("#inputcode2");
const inputCode3 = document.querySelector("#inputcode3");
const joinCode = document.querySelector("#join");
const result = document.querySelector("#result");

// Hàm vẽ hình chữ nhật với các thuộc tính nhập vào
function draw(inputCode1, inputCode2, inputCode3) {
    // Lấy giá trị từ các input
    let color = inputCode1.value;
    let width = inputCode2.value;
    let height = inputCode3.value;

    // Kiểm tra và áp dụng các giá trị nhập vào
    if (color && width && height) {
        // Đổi màu nền cho result
        result.style.backgroundColor = color; // Áp dụng màu nền cho result
        result.style.width = width + 'px'; // Chiều rộng của result
        result.style.height = height + 'px'; // Chiều cao của result

        // Đảm bảo phần tử result được hiển thị
        result.style.display = 'block';
    } else {
        alert("Vui lòng nhập đủ dữ liệu.");
    }
}

// Thêm sự kiện cho nút "Submit"
if (joinCode) {
    joinCode.addEventListener("click", function() {
        draw(inputCode1, inputCode2, inputCode3);
    });
}
if (result){
    result.addEventListener("click",function(){
        inputCode1.value = ''; // Xóa mã màu
        inputCode2.value = ''; // Xóa chiều rộng
        inputCode3.value = ''; 
         result.style.display = 'none'
    })
}