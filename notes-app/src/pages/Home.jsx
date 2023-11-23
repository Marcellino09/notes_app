import React from "react";
import NoteCard from "../components/NoteList";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Badminton",
      description:
        "suatu olahraga yang menggunakan alat yang berbentuk bulat dengan memiliki rongga-rongga di bagian pemukulnya. Dan memiliki gagang. Alat ini dikenal dengan nama raket yang dimainkan oleh dua orang (untuk tunggal) atau dua pasangan (untuk ganda) yang saling berlawanan!",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Basket",
      description:
        " olahraga bola berkelompok yang terdiri atas dua tim beranggotakan masing-masing lima orang yang saling bertanding mencetak poin dengan memasukkan bola ke dalam keranjang lawan!",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Futsal",
      description:
        "sebuah permainan bola yang dimainkan oleh dua tim, yang masing-masing timnya memiliki jumlah anggota yakni lima orang. Tujuan dari permainan adalah untuk memasukkan bola ke gawang lawan sebanyak, dengan memanipulasi bola dengan kaki!",
      createdAt: new Date(),
    },
  ];
  return (
    <div className="bg-white py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-6xl font-copperplate">NoteBook</h2>
        </div>
        <div className="mx-auto pt-5 mb-3 xl:w-96">
          <input
            type="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-outline"
            id="searchNote"
            placeholder="Search Note"
          />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-amber pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((item) => (
            <NoteCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
