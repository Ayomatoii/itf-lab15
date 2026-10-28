# วันนี้กินอะไรดี — ITF Lab 15

โปรเจกต์: itf-it69070090
ผู้จัดทำ: ธิติภาส ตั้งวิญญู (69070090)
เว็บไซต์ static ภาษาไทย ใช้ HTML/CSS/JavaScript ปกติ ไม่มี framework, dependency หรือ build
ยังไม่ได้สร้าง repository ภายนอกหรือ Deploy และไม่มี URL ที่ยืนยันแล้ว

## ไฟล์
- index.html: Navbar การ์ดอาหาร เมนูเริ่มต้น และปุ่มสุ่ม
- styles.css: โทนครีม–ส้ม รองรับมือถือและคอมพิวเตอร์
- script.js: ข้อมูลอาหาร 5 รายการและฟังก์ชันสุ่มโดยไม่ซ้ำติดกัน
- images/: รูปอาหารจริง 5 ภาพ เก็บในเครื่อง ไม่พึ่ง CDN ขณะเปิดเว็บ
- image-sources.txt: ที่มาภาพและเงื่อนไขสิทธิ์การใช้
- TEST-RESULTS.md: ผลการตรวจและรายการที่ต้องตรวจต่อ

## เปิดด้วย Live Server
1. เปิด VS Code > File > Open Folder เลือก D:\KMITL\ITF\itf-it69070090
2. ติดตั้งส่วนเสริม Live Server ของ Ritwick Dey ถ้ายังไม่มี
3. คลิกขวา index.html > Open with Live Server
4. ทดสอบปุ่มสุ่ม หรือกด Tab ไปที่ปุ่มแล้วใช้ Enter/Space
5. หยุด Live Server เมื่อเลิกใช้

สามารถดับเบิลคลิก index.html เปิดโดยตรงได้ด้วย เพราะไม่ได้ใช้ fetch หรือ JavaScript module

## โค้ดทำงานอย่างไร
foods เป็น array ที่เก็บ object ของเมนู แต่ละเมนูมี name, description, price และ image
showFood() อัปเดตข้อมูลทั้งสี่ส่วน รวมถึง alt ของรูปด้วยข้อมูลจาก object เดียวกัน
randomFood() สุ่ม offset จาก 1 ถึง 4 แล้วใช้ modulo วนใน 5 เมนู จึงไม่กลับมาเมนูเดิมติดกัน
ใช้ textContent สำหรับข้อความ และใช้ปุ่ม button จริงเพื่อรองรับคีย์บอร์ด
ราคาเป็นข้อมูลตัวอย่างเพื่อการเรียน ไม่ใช่ราคาจำหน่ายจริง

## นำขึ้น GitHub (ทำหลังตรวจเว็บ)
1. ลงชื่อเข้า GitHub แล้วสร้าง repository ชื่อ itf-it69070090 เลือกการมองเห็นตามเกณฑ์อาจารย์
2. ใช้ Add file > Upload files แล้วลากไฟล์ทั้งหมดและโฟลเดอร์ images เข้าไป
3. ให้ index.html อยู่ที่ราก repository ไม่ซ้อนอยู่ใต้โฟลเดอร์ itf-it69070090 อีกชั้น
4. ตรวจว่ามีภาพครบ 5 ภาพ แล้ว Commit changes
5. ไม่ต้องอัปโหลด node_modules และไม่ต้องมี package.json

## Import เข้า Vercel
1. ลงชื่อเข้า Vercel แล้วเลือก Add New > Project
2. เชื่อม GitHub และ Import repository itf-it69070090
3. Project Name: itf-it69070090 (ถ้าชื่อนี้ใช้ไม่ได้ ให้ตรวจสิทธิ์/ชื่อที่ Vercel แจ้ง)
4. Framework Preset: Other
5. Root Directory: โฟลเดอร์ที่มี index.html (ราก repository หากอัปโหลดตามข้างบน)
6. Build Command: เปิด Override และปล่อยว่าง เพราะไม่มี build
7. Output Directory: Override เป็น . (จุดเดียว) เพื่อใช้ไฟล์จากรากโปรเจกต์
8. Install Command: ปล่อยว่าง ไม่ต้องติดตั้งแพ็กเกจ
9. กด Deploy ด้วยตนเองหลังตรวจการตั้งค่าแล้ว
10. เมื่อสถานะ Ready ให้เปิด URL ที่ Vercel คืนมาจริง ตรวจภาพ การสุ่ม และมือถืออีกครั้ง
11. คัดลอก URL นั้นส่งงานตามเกณฑ์อาจารย์ หากต้องส่ง url.txt ให้สร้างหลังเปิดตรวจ URL จริงสำเร็จเท่านั้น

อ้างอิงการตั้งค่า: https://vercel.com/docs/builds/configure-a-build

## ก่อนส่งงาน
- ตรวจปุ่มสุ่มหลายครั้งว่ารูป ชื่อ คำอธิบาย ราคา และ alt ตรงกันและไม่ซ้ำติดกัน
- ลอง Tab, Enter, Space และตรวจขอบโฟกัส
- ตรวจหน้าจอมือถือ 320–390px และคอมพิวเตอร์ โดยไม่มีการเลื่อนแนวนอน
- ตรวจภาพครบหลัง Deploy เพราะชื่อไฟล์บนโฮสต์แยกตัวพิมพ์เล็ก–ใหญ่
- ส่ง repository URL, URL เว็บจริง และหลักฐานภาพหน้าจอตามที่อาจารย์กำหนด