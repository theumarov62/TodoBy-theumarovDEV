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
            <strong>Edit modal logikasi hali mukammal emas:</strong> bir nechta
            todo elementni bir vaqtda tahrirlashda xatolik yuz berishi mumkin.
            Mobil ekranlarda layout buzilishi ehtimoli bor.
          </li>
          <li>
            <strong>
              O‘chirish (Delete) funksiyasi ba’zi holatlarda noto‘g‘ri ishlashi:
            </strong>{" "}
            ID filtrlashda xatoliklar paydo bo‘lishi mumkin.
          </li>
          <li>
            <strong>LocalStorage bilan ishlashda cheklovlar:</strong> noto‘g‘ri
            saqlangan ma’lumotlar yoki katta hajmdagi todo elementlar bilan
            xatolik yuz berishi mumkin.
          </li>
          <li>
            <strong>Input validatsiyasi minimal:</strong> title yoki description
            bo‘sh bo‘lsa, foydalanuvchiga batafsil xatolik xabari
            ko‘rsatilmaydi.
          </li>
          <li>
            <strong>Responsivlik:</strong> Katta todo ro‘yxatida scroll va modal
            kichik ekranlarda to‘liq ko‘rinmasligi muammo tug‘dirishi mumkin.
          </li>
          <li>
            <strong>Visual inconsistency:</strong> ba’zi tugmalar gradient,
            ba’zilari plain color; UI bir hil emas.
          </li>
          <li>
            <strong>Texnik kamchiliklar:</strong> Filter va earch funksiyalari
            yo‘q.
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
            className="px-6 py-3
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
    text-white font-semibold
    rounded-xl
    shadow-lg shadow-blue-500/40
    hover:shadow-blue-600/60
    hover:scale-105
    active:scale-95
    transition-all duration-300
    z-50"
          >
            Orqaga
          </Link>
        </div>

        {/* Version */}
        <div className="text-gray-500 text-center mt-4">
          Bu Todo 2-versiyasi. <br />
          Keyinchalik bu Todo 3-versiyasida quyidagi funksiyalar qo‘shilishi
          rejalashtirilgan:
          <ul className="list-disc list-inside mt-2 text-gray-500">
            <li>Todo filtr va qidiruv funksiyalari</li>
            <li>Drag & Drop bilan tartiblash imkoniyati</li>
            <li>Fayllar yoki rasm qo‘shish funksiyasi</li>
            <li>Yangi UI/UX yaxshilanishlari</li>
            <li>Push notification / reminder funksiyasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qollanma;
