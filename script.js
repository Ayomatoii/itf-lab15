'use strict';

// แต่ละ object เก็บข้อมูลของเมนูเดียวกันไว้ด้วยกัน
const foods = [
  { name: 'พิซซ่ากุ้งและมะกอก', description: 'แป้งพิซซ่าอบหอม โรยชีส กุ้ง มะกอกดำ และผักร็อกเก็ต อิ่มอร่อยแบบเต็มคำ', price: 189, image: 'images/pizza.jpg' },
  { name: 'เบอร์เกอร์ชีส', description: 'ขนมปังงาเนื้อนุ่ม ประกบไส้เบอร์เกอร์ ชีส เบคอน และผักสด จานอิ่มสำหรับวันที่หิวเป็นพิเศษ', price: 159, image: 'images/burger.jpg' },
  { name: 'พาสต้ามะเขือเทศและผัก', description: 'เส้นพาสต้าคลุกมะเขือเทศและผักใบเขียว เติมชีสให้หอมมัน เป็นมื้อเรียบง่ายที่กินได้ไม่เบื่อ', price: 139, image: 'images/pasta.jpg' },
  { name: 'สลัดผักรวมและชีส', description: 'ผักสดหลากสีพร้อมชีสและเมล็ดธัญพืช เพิ่มความกรุบกรอบให้มื้อเบา ๆ ที่ยังอร่อยเต็มชาม', price: 99, image: 'images/salad.jpg' },
  { name: 'แพนเค้กผลไม้', description: 'แพนเค้กนุ่มซ้อนชั้น เสิร์ฟพร้อมผลไม้และซอสหวานหอม เติมความสดใสให้วันธรรมดา', price: 119, image: 'images/pancakes.jpg' }
];

const image = document.getElementById('food-image');
const nameElement = document.getElementById('food-name');
const description = document.getElementById('food-description');
const price = document.getElementById('food-price');
const number = document.getElementById('menu-number');
const imageError = document.getElementById('image-error');
const button = document.getElementById('random-btn');
let currentIndex = 0;

function showFood(index) {
  const food = foods[index];
  currentIndex = index;
  imageError.hidden = true;
  image.alt = food.name;
  image.src = food.image;
  nameElement.textContent = food.name;
  description.textContent = food.description;
  price.textContent = `${food.price} บาท`;
  number.textContent = `เมนูที่ ${String(index + 1).padStart(2, '0')} / ${String(foods.length).padStart(2, '0')}`;
}

function randomFood() {
  // สุ่มระยะขยับ 1 ถึงจำนวนเมนู - 1 จึงไม่มีทางได้ตำแหน่งเดิม
  const offset = 1 + Math.floor(Math.random() * (foods.length - 1));
  showFood((currentIndex + offset) % foods.length);
}

image.addEventListener('error', () => { imageError.hidden = false; });
image.addEventListener('load', () => { imageError.hidden = true; });
button.addEventListener('click', randomFood);
// ปุ่ม HTML รองรับ Enter และ Space โดยไม่ต้องเพิ่ม keydown ซ้ำ
showFood(currentIndex);