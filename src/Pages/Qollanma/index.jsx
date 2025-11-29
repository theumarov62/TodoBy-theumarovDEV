import React from "react";
import { Link } from "react-router-dom";

function Qollanma() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Todo Qo‘llanma
        </h1>

        {/* Qanday ishlashi */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          1. Bu Todo qanday ishlaydi
        </h2>
        <p className="text-gray-700 mb-4">
          Bu Todo dasturi sizga vazifalaringizni qo‘shish, tahrirlash va
          o‘chirish imkonini beradi. Har bir todo brauzer localStorage ga
          saqlanadi, shuning uchun sahifani yangilashga ham ma’lumotlar
          yo‘qolmaydi.
        </p>

        {/* Kamchiliklari */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          2. Hozirgi kamchiliklar
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            Todo qo‘shish va tahrirlash qismi hali to‘liq optimallashtirilmagan.
          </li>
          <li>Edit modal logikasi ba’zi hollarda noto‘g‘ri ishlashi mumkin.</li>
          <li>
            Componentlar nomlari ba’zi joylarda kichik harf bilan boshlangan,
            React tavsiyalariga mos emas.
          </li>
          <li>
            LocalStorage ishlashi ba’zi xatoliklar berishi mumkin, ayniqsa
            noto‘g‘ri ma’lumot bilan saqlangan bo‘lsa.
          </li>
        </ul>

        {/* Telegram link */}
        <p className="text-gray-700 mb-6">
          Taklif va shikoyatlar bo‘lsa, Telegram orqali yozishingiz mumkin:{" "}
          <a
            href="https://t.me/theumarovmc"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-600"
          >
            @theumarovmc
          </a>
        </p>

        {/* Orqaga button */}
        <div className="flex justify-center mb-4">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-200"
          >
            Orqaga
          </Link>
        </div>

        {/* Version */}
        <p className="text-gray-500 text-center mt-4">
          Bu Todo 1-versiyasi. <br />
          Keyinchalik bu Todo 2-versiyasida Redux bilan to‘liq qilinadi.
        </p>
      </div>
    </div>
  );
}

export default Qollanma;
