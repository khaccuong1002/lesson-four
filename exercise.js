/* Điểm trung bình môn */
var input_phy = prompt("Nhập điểm Lý:");
console.log(input_phy);
var input_che = prompt("Nhập điểm Hoá:");
console.log(input_che);
var input_bio = prompt("Nhập điểm Sinh:");
console.log(input_bio);

var physics = parseInt(input_phy);
var chemistry = parseInt(input_che);
var biology = parseInt(input_bio);

var total = (physics + chemistry + biology) / 3;
document.write("Tổng điểm trung bình: "+ total);


/* Chuyển đổi độ C sang F */
// var C = prompt("Nhập nhiệt độ C");
// var F = 9/5 * C + 32
// document.write("Độ F là: " + F);

/* Tính diện tích hình tròn */
// let Pi = 3.14;
// let R = prompt("Nhập diện tích: ");
// let S = R*R*Pi;
// alert("Diện tích hình tròn là: " + S);

/* Tính chu vi hình tròn */
    // let Pi = 3.14;
    // let D = prompt("Nhập đường kính hình tròn");
    // let C = D * Pi;
    // alert("Chu vi hình tròn là: " + C);



