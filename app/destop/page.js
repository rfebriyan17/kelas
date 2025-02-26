"use client";

import { useState, useEffect } from "react";

export default function StudentTable() {
  const students = [
    { no: 1, nim: "220101", nama: "Ahmad", gender: "Laki-laki", prodi: "Informatika", kelas: "TI-1A", semester: 2, alamat: "Jakarta", hobby: "Coding", citaCita: "Software Engineer" },
    { no: 2, nim: "220102", nama: "Budi", gender: "Laki-laki", prodi: "Sistem Informasi", kelas: "SI-2B", semester: 4, alamat: "Bandung", hobby: "Gaming", citaCita: "Game Developer" },
    { no: 3, nim: "220103", nama: "Cici", gender: "Perempuan", prodi: "Teknik Elektro", kelas: "TE-1C", semester: 2, alamat: "Surabaya", hobby: "Membaca", citaCita: "AI Researcher" },
    { no: 4, nim: "220104", nama: "Dini", gender: "Perempuan", prodi: "Manajemen", kelas: "MN-3D", semester: 6, alamat: "Yogyakarta", hobby: "Menulis", citaCita: "Entrepreneur" },
    { no: 5, nim: "220105", nama: "Erwin", gender: "Laki-laki", prodi: "Akuntansi", kelas: "AK-4E", semester: 8, alamat: "Medan", hobby: "Olahraga", citaCita: "Akuntan Publik" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(to bottom, #f0f4ff, #d9e6ff);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        h1 {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          color: #1d4ed8;
          margin-bottom: 20px;
        }
        p {
          text-align: center;
          color: #1e40af;
          margin-bottom: 20px;
        }
        .card {
          padding: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background-color: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        th, td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
          transition: background-color 0.3s;
        }
        th {
          background-color: #3b82f6;
          color: #fff;
        }
        tr:hover {
          background-color: #f0f4ff;
        }
        @media (max-width: 1024px) {
          .card {
            margin-bottom: 16px;
          }
        }
      `}</style>

      <div className="container">
        <h1>Data Mahasiswa</h1>
        <p>Latihan Dual UI dengan CSS Media Query. Jika 1024px atau lebih maka tampilan memakai tag table, jika tidak maka UI memakai grid system CSS.</p>

        {isMobile ? (
          <div className="grid">
            {students.map((student) => (
              <div key={student.no} className="card">
                <p><strong>No:</strong> {student.no}</p>
                <p><strong>NIM:</strong> {student.nim}</p>
                <p><strong>Nama:</strong> {student.nama}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Prodi:</strong> {student.prodi}</p>
                <p><strong>Kelas:</strong> {student.kelas}</p>
                <p><strong>Semester:</strong> {student.semester}</p>
                <p><strong>Alamat:</strong> {student.alamat}</p>
                <p><strong>Hobby:</strong> {student.hobby}</p>
                <p><strong>Cita-cita:</strong> {student.citaCita}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>NIM</th>
                  <th>Nama</th>
                  <th>Gender</th>
                  <th>Prodi</th>
                  <th>Kelas</th>
                  <th>Semester</th>
                  <th>Alamat</th>
                  <th>Hobby</th>
                  <th>Cita-cita</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.no}>
                    <td>{student.no}</td>
                    <td>{student.nim}</td>
                    <td>{student.nama}</td>
                    <td>{student.gender}</td>
                    <td>{student.prodi}</td>
                    <td>{student.kelas}</td>
                    <td>{student.semester}</td>
                    <td>{student.alamat}</td>
                    <td>{student.hobby}</td>
                    <td>{student.citaCita}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
