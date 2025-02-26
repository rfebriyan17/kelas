"use client";
import { useState } from "react";

export default function StudentTable() {
  const students = [
    {
      no: 1,
      nim: "232505049",
      nama: "Rizki Febriyan",
      gender: "Laki-laki",
      prodi: "Sistem Informasi",
      kelas: "SI-4B",
      semester: 4,
      alamat: "Bandung",
      hobby: "Coding",
      citaCita: "Software Engineer",
    },
    {
      no: 2,
      nim: "2201002",
      nama: "Ujang Aisyah",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "TI-4B",
      semester: 4,
      alamat: "Jakarta",
      hobby: "Membaca",
      citaCita: "Data Analyst",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        📋 Data Mahasiswa
      </h2>

      {/* Tampilan Tabel untuk Desktop */}
      <div className="hidden md:block">
        <table className="w-full border border-gray-300 shadow-md rounded-lg text-sm md:text-base">
          <thead className="bg-blue-600 text-white">
            <tr>
              {[
                "No",
                "NIM",
                "Nama",
                "Gender",
                "Prodi",
                "Kelas",
                "Semester",
                "Alamat",
                "Hobby",
                "Cita-cita",
              ].map((header) => (
                <th key={header} className="px-3 py-2 border">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 text-gray-800">
            {students.map((student, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-all`}
              >
                <td className="px-3 py-2 border">{student.no}</td>
                <td className="px-3 py-2 border">{student.nim}</td>
                <td className="px-3 py-2 border">{student.nama}</td>
                <td className="px-3 py-2 border">{student.gender}</td>
                <td className="px-3 py-2 border">{student.prodi}</td>
                <td className="px-3 py-2 border">{student.kelas}</td>
                <td className="px-3 py-2 border">{student.semester}</td>
                <td className="px-3 py-2 border">{student.alamat}</td>
                <td className="px-3 py-2 border">{student.hobby}</td>
                <td className="px-3 py-2 border">{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Card untuk Mobile */}
      <div className="md:hidden">
        {students.map((student, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="font-bold text-lg text-blue-600">Mahasiswa {student.no}</p>
            <p className="text-gray-700"><strong>NIM:</strong> {student.nim}</p>
            <p className="text-gray-700"><strong>Nama:</strong> {student.nama}</p>
            <p className="text-gray-700"><strong>Gender:</strong> {student.gender}</p>
            <p className="text-gray-700"><strong>Prodi:</strong> {student.prodi}</p>
            <p className="text-gray-700"><strong>Kelas:</strong> {student.kelas}</p>
            <p className="text-gray-700"><strong>Semester:</strong> {student.semester}</p>
            <p className="text-gray-700"><strong>Alamat:</strong> {student.alamat}</p>
            <p className="text-gray-700"><strong>Hobby:</strong> {student.hobby}</p>
            <p className="text-gray-700"><strong>Cita-cita:</strong> {student.citaCita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
