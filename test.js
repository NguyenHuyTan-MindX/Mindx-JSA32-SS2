let a = 1;
var b = 2;
const Pi = 3.14;
/// Note: Nên sử dụng "let" thay vì "var"

{
    {
      let vung2 = "Đây là vùng 2";
      {
        console.log(vung2); /// in ra
        var vung3 = "Đây là vùng 3"
      }
    }
    // console.log(vung2); /// Không in ra gì và lỗi
  }
  
  console.log(vung3);// In ra gì?

  /*
Ưu tiên dùng let vì:
- Var: Thường gây nên lỗi liên quan tới phạm vi khai báo biến
- let: không gặp vấn đề như vậy và nó bảo đảm tính cục bộ của biến
*/

/////// Câu điều kiện: 
/*
if(điều kiện){
/// Câu lệnh bên trong if
}
else{
  /// Câu lệnh bên trong else (khi kết quả điều kiện trả về là false)
}
*/
// if (7 > 10) { // false
//   console.log("Điều kiện này đúng");
// }
// else {
//   console.log("Điều kiện này sai");
// }

/*
Bài toán if else như sau:
Đứng vai trò là người tuyển dụng học sinh tại trường cấp 3 thì trường phân loại tuyển học sinh như sau:
- Điểm học sinh: 8-10 => "Học sinh loại Giỏi"
- Điểm học sinh: 6.5 - 8 => "Học sinh loại Khá"
- Điểm học sinh: 5 - 6.5 => "Học sinh loại Trung Bình"
- Điểm học sinh: 0 -> 5 => "Học sinh loại Kém"
Xây dựng trương trình kiểm tra đầu vào học sinh và in ra kết quả tương tự. Sử dụng if - else if - else
*/



/*
let diem = Number(prompt("Mời học sinh nhập vào số điểm"));
 console.log("diem: ", diem);
if (diem >= 8) {
   alert("Học sinh đạt loại Giỏi")
 }
  else if (diem < 8 && diem >= 6.5) {
   alert("Học sinh đạt loại Khá")
 }
 else if (diem < 6.5 && diem >= 5) {
   alert("Học sinh đạt loại Trung binh")
 }
 else {
   alert("Học sinh đạt loại Kém")
 }
 */











    /*
Vòng lặp: 3 vòng lặp cơ bản (while, do - while, for)
- While: cú pháp
while(điều kiện){
  // Câu lệnh lập trình
}
do{
  Câu lệnh
}
while(điều kiện);
for(box1 ;box2; box3){
  Câu lệnh
}
Giải thích:
- Box1: Câu lệnh chạy đầu tiên và duy nhất 1 lần trong vòng lặp for
- Box2: Điều kiện
- Box3: Câu lệnh thực hiện cuối cùng của mỗi lần lặp.
*/
// vong lap while

 //In ra cac so tu 1->10;
 /*
 let i = 1;
 while (i <= 10) {
   console.log(i);
   i = i + 1; // Sau mỗi lần lặp thì i tăng lên 1 đơn vị.
 }
 */
 

 //Với do while

 /*
 let i = 1;
 do {
   console.log(i > 11);
   i = i + 1;// tăng i lên 1 đơn vị
 }
 while (i <= 10);
*/

/*
 //Với for
 for (let i = 1; i <= 10; i = i + 1) {
   console.log(i); // 1, 2, .. 10
 }
/// Kết quả sau vòng lặp: i đang là 11
*/