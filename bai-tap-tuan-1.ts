// -------------------------------------------------- Bài 1: 
// Tạo một hàm TypeScript nhận vào một mảng các số nguyên 
// và trả về tổng của chúng.
    // Để lấy tổng của một dãy số:
    // Sử dụng Array.reduce() phương thức này để lặp qua mảng.
    // Đặt giá trị ban đầu trong reduce phương thức thành 0.
    // Trên mỗi lần lặp, trả về tổng giá trị tích lũy và số hiện tại.
const arrNum: number[] = [1, 2, 3, 4, 5];
const sum: number = arrNum.reduce((total, num) => {
    return total + num;
}, 0);
console.log('Bài 1: sum: ' + sum); 

// -------------------------------------------------- Bài 2:
// Định nghĩa một interface Person có các trường 
// name (string), age (number), và email (string). 
// Sau đó, tạo một hàm nhận vào một đối tượng 
// thuộc interface Person và in ra thông tin của người đó.
interface Person{
    name: string
    age: number
    email: string
    sex?: string
}
let per: Person;
per = {name: "Henry", age: 31, email: "gianglx@onextdigital.com"};
console.log('Bài 2: Person: ' + JSON.stringify(per));


// -------------------------------------------------- Bài 3:
// Viết một hàm generic nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.
function getFirst<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}
const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = getFirst(numbers); // This will be of type number | undefined
console.log('Bài 3: First element number: ' + firstNumber);
const strings: string[] = ["BMW", "Honda", "Toyota"];
const firstString = getFirst(strings); // This will be of type string | undefined
console.log('Bài 3: First element number: ' + firstString);


// -------------------------------------------------- Bài 4:
// Định nghĩa một enum Color với các giá trị là RED, GREEN, và BLUE. 
// Tạo một hàm nhận vào một giá trị của enum và in ra tên của màu đó.
enum Colors {
    RED,
    BLUE,
    GREEN
}
function printColor(colorValue: number): void {
    const colorName: string = Colors[colorValue];
    if (colorName !== undefined) {
        console.log(`Bài 4: The name of the color is: ${colorName}`);
    } else {
        console.log('Invalid color value');
    }
}
const selectedColorValue: number = 0;
printColor(selectedColorValue); 


// -------------------------------------------------- Bài 5:
// Tạo một lớp Rectangle có các thuộc tính là chiều dài và chiều rộng. 
// Thêm một phương thức tính diện tích của hình chữ nhật. Sau đó tính diện tích của 1 hình chữ nhật bất kỳ
class Rectangle {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    dientichhcn(): number {
        return this.length * this.width;
    }
}
const myRectangle = new Rectangle(4, 5);
const area = myRectangle.dientichhcn();
console.log("Bài 5: Diện tích hình chữ nhật: ", area);



// -------------------------------------------------- Bài 6:
// Viết một decorator để log thông tin mỗi khi một phương thức của một lớp được gọi.
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      return result;
    };
  
    return descriptor;
}

class MyClass {
    logMethod
    myMethod(a: number, b: number) {
    return a + b;
    }
}

const instance = new MyClass();
instance.myMethod(4, 5); // log: "Calling method myMethod with arguments: [4,5]"
  

// -------------------------------------------------- Bài 7:
// Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. 
// (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu 
// HTTP. https://github.com/typicode/json-server)


// -------------------------------------------------- Bài 8:
// Tạo một module chia sẻ các hàm tiện ích như tính giai thừa, 
// kiểm tra số nguyên tố. Sau đó, sử dụng các hàm này trong một file TypeScript khác


// -------------------------------------------------- Bài 9:
// Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. 
// (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu 
// HTTP. https://github.com/typicode/json-server)


// -------------------------------------------------- Bài 10:
// Xây dựng ứng dụng game Tic Tac Toe bằng Typescript