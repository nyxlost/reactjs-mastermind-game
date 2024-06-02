import React from 'react'

function Answer() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-200 flex flex-col items-center justify-center p-6">
  <div className="mt-16 bg-white rounded-lg shadow-md p-6 max-w-3xl space-y-6">
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Event Loop</h2>
      <p className="text-gray-700">
        Event loop ใน JavaScript คือการทำงานในเบื้องหลังการทำงานต่าง ๆ โดย JavaScript จะรันเป็น Single theard คือมันจะรันงานได้แค่ task เดียว โดยใน JavaScript จะมี task อยู่ 2 อย่างคือ Marcotask และ Microtask โดย Marcotask จะมี task พวกที่ทำงานใน main thread เช่น การ render, for-loop, settimeout ส่วน Mircrotask ก็จะเป็น task ที่จัดการกับ promise และ eventhandles ที่เกี่ยวข้องกับ DOM โดยทั่วไปแล้ว macro tasks จะถูกเรียกใช้งานก่อน micro tasks โดย macro tasks จะถูกเรียกใช้งานในทุก ๆ รอบของ Event Loop ในขณะที่ micro tasks อาจถูกเรียกใช้งานหลังจาก microtask ว่าง โดยมักจะถูกเรียกใช้งานหลังจาก microtask ก่อนหน้านั้นได้เสร็จสิ้นแล้ว
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Async & Await</h2>
      <p className="text-gray-700">
        Async & Await เป็นรูปแบบการเขียนโค้ดที่มาช่วยแก้ไขการเขียน Promise Hell โดยการทำงานคือเขียน Async ไว้หน้าฟังก์ชันและเขียน await ไว้หน้า promise โดย await จะมีรูปแบบทำงานคือเมื่อทำงานเสร็จก็จะไปทำงาน await ตัวต่อไปตามลำดับ
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Blocking I/O & Non blocking I/O</h2>
      <p className="text-gray-700">
        Blocking ใน JavaScript คือการทำงานของโค้ดที่มีการทำงานต่อเนื่องกัน ถ้ายังทำงานคำสั่งก่อนหน้าไม่สำเร็จ คำสั่งต่อไปก็จะยังไม่ทำงาน รอจนกว่าคำสั่งข้างหน้าสำเร็จถึงจะทำงาน ยกตัวอย่าง ถ้าเราใส่ค่าตัวเลขเพื่อเข้าไปคำนวนหลาย ๆ เงื่อนไข โค้ดจะต้องทำงานตามลำดับก่อนส่ง Output ออกมา
      </p>
      <p className="text-gray-700">
        ส่วน Non blocking โค้ดจะทำงานไม่พร้อมกัน หากมีเงื่อนไขไหนทำงานได้ก่อนก็จะทำงานเลยโดยไม่ต้องรอคำสั่งก่อนหน้าทำงานเสร็จ และงานไหนต้องใช้เวลาในการทำงานก็จะทำงานไปพร้อมกับคำสั่งอื่น ๆ
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Different between ReactJS and NextJS</h2>
      <p className="text-gray-700">
        ความแตกต่างของ React และ Next คือ React เป็นไลบรารี ที่ทำงานในส่วน Client side ไม่มี router ของตัวเอง และในการทำ SEO จำเป็นต้องใช้ตัวช่วยเนื่องจาก react ทำงานฝั่ง Client ส่วน Next เป็น framework ของ react มีรูปแบบเหมือน react แต่มีการจัดการ route ของตัวเองและทำงานใน server side ทำให้จัดการ SEO ได้ดีกว่าเพราะข้อมูลถูก render แล้วก่อนส่งไปยังหน้าเว็บ และทำได้ทั้ง Client และ Server สามารถสร้าง api routes ได้และมีประสิทธิภาพการทำงานดีกว่า react เพราะ render จาก server side
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Pros and Cons</h2>
      <h3 className="text-xl font-semibold">React.js</h3>
      <p className="text-gray-700">
        ข้อดีของ react คือการที่มีคอนเซ็บเป็น component base ทำให้การทำงานพัฒนาเว็บไซต์สามารถแยกส่วนต่าง ๆ ของ UI ได้และสามารถนำไปใช้ซ้ำได้ ทำให้ลดการเขียนโค้ดที่ไม่จำเป็น และเวลามีการเปลี่ยนแปลงหน้าเว็บจะ render แค่ส่วนที่เปลี่ยนแปลง ทำให้ไม่ต้องโหลดข้อมูลส่วนอื่นบ่อย ๆ และมีการส่งข้อมูลผ่าน props ไปยัง component อื่นที่เกี่ยวข้องได้เท่านั้น ทำให้ลดความซับซ้อนในการจัดการข้อมูล มีกลุ่มนักพัฒนาเยอะทำให้ศึกษาข้อมูลและมีเครื่องมือให้ใช้เยอะ
      </p>
      <p className="text-gray-700">
        ข้อเสีย react เมื่อเว็บไซต์มีขนาดใหญ่ทำให้จัดการ state ยากต้องใช้เครื่องอื่นช่วยในการจัดการ รวมถึงเรื่อง route ที่ต้องลงเครื่องมืออื่นเพิ่มเติมและถ้าหากเครื่องมือที่นำมาใช้เกิดปัญหาหรือมีการอัพเดตอาจจะทำให้โปรเจ็คใช้งานไม่ได้
      </p>
      <h3 className="text-xl font-semibold">Next.js</h3>
      <p className="text-gray-700">
        ข้อดีของ next ถ้าใช้ react เป็นจะเรียนรู้ง่าย และมีการเพิ่มส่วนต่าง ๆ ที่ขาดไปของ react เข้ามาเช่น ทำ route เองได้ และ render ฝั่ง server ได้ทำให้ทำ SEO ได้ง่ายกว่า react มีการ optimize ที่ดีขึ้นทำ api route ได้ และรองรับการพัฒนาแบบ Full-Stack
      </p>
      <p className="text-gray-700">
        ข้อเสีย เนื่องจากการทำงานเปลี่ยนไปเป็น server side ทำให้ต้องศึกษาและออกแบบโปรเจ็คต่างจาก react รวมถึงเรียนรู้การทำ api route และการออกแบบให้กลับมาปรับปรุงได้ง่าย
      </p>
    </div>
  </div>
</div>


  )
}

export default Answer