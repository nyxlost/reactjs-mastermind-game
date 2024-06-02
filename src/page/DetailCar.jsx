import React from "react";
import Car1 from "../image/component1.png";
import Car2 from "../image/component2.png";

function DetailCar() {
  return (
    <>
      <div className="flex my-14 font-sans">
        <div className="bg-neutral-800 w-screen">
          <div className="mx-16 my-16 text-right">
            <p className="my-6 text-white text-2xl font-sans">Auman EST A</p>
            <div className="flex justify-end">
              <img src={Car1} alt="image" />
            </div>
          </div>
        </div>
        <div className="bg-blue-800 w-screen">
          <div className="mx-16 my-16">
            <p className="my-6 text-white text-2xl ">Auman EST 400</p>
            <div className="flex justify-start">
              <img src={Car2} alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-sans">
        <div className="flex w-6/12">
          <div className="w-screen grid grid-cols-2">
            <div className="ml-16 text-xl font-bold">
              <p>Engine</p>
            </div>
            <div className="mb-6 text-lg">
              <p>FOTON CUMMINS</p>
              <p>SGe3-430 (11,800 cc.)</p>
              <p className="font-bold">Common rail 6 cylinder</p>
              <p>428.28PS /315kw @ 1,900 rpm.</p>
              <p>2000Nm.@ 1,000-1,400 rpm.</p>
            </div>
            <div className="ml-16 text-xl font-bold">
              <p>Transmission</p>
            </div>
            <div className="mb-6 text-lg">
              <p>Traxon ZF-12TX2420TD</p>
              <p>12 forward and 4 reverse</p>
            </div>
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Brake system</p>
            </div>
            <div className="mb-6 text-lg">
              <p>12 forward and 4 reverse</p>
            </div>
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Cab Suspension</p>
            </div>
            <div className="mb-6 text-lg">
              <p>Air bellow sping</p>
            </div>
          </div>
          <div className="w-screen grid grid-cols-2">
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Engine</p>
            </div>
            <div className="text-lg">
              <p>FOTON CUMMINS</p>
              <p>SGe3-400 (11,800 cc.)</p>
              <p className="font-bold">Common rail 6 cylinder</p>
              <p>398.36PS/293kw @ 1,900 rpm.</p>
              <p>2000Nm.@ 1,000-1,400 rpm.</p>
            </div>
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Transmission</p>
            </div>
            <div className="text-lg">
              <p>Traxon ZF-12TX2420TD</p>
              <p>12 forward and 4 reverse</p>
            </div>
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Brake system</p>
            </div>
            <div className="text-lg">
              <p>Full Air Brake</p>
            </div>
            <div className="ml-16 flex justify-center text-xl font-bold place-self-start">
              <p>Cab Suspension</p>
            </div>
            <div className="text-lg">
              <p>Air bellow sping</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-sans">
        <div className="flex w-9/12">
          <div className="mb-10 bg-neutral-200 w-screen flex justify-center">
            <div className="mx-16 my-16 text-right">
              <button className="mx-6 bg-blue-900 hover:bg-blue-500 text-white font-sans py-4 px-12 rounded-full">
                รายละเอียดเพิ่มเติม
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-500 text-white font-sans py-4 px-12 rounded-full">
                ติดต่อตัวแทนจำหน่าย
              </button>
            </div>
          </div>
          <div className="mb-10 bg-neutral-300 w-screen flex justify-center">
            <div className="mx-16 my-16 text-right">
              <button className="mx-6 bg-blue-900 hover:bg-blue-500 text-white font-sans py-4 px-12 rounded-full">
                รายละเอียดเพิ่มเติม
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-500 text-white font-sans py-4 px-12 rounded-full">
                ติดต่อตัวแทนจำหน่าย
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCar;
