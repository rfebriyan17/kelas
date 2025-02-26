import ClassCard from "./components/ClassCard";

export default function KelasPage() {
  const dataKelas = [
    {
      className: "Kelas SI",
      friends: [
        { name: "Aldi", image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Budi", image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { name: "Dewi", image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { name: "Eko", image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Fajar", image: "https://randomuser.me/api/portraits/men/4.jpg" },
      ],
    },
    {
      className: "Kelas KA",
      friends: [
        { name: "Gio", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Indah", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Joko", image: "https://randomuser.me/api/portraits/men/6.jpg" },
        { name: "Kiki", image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { name: "Lina", image: "https://randomuser.me/api/portraits/women/4.jpg" },
      ],
    },
    {
      className: "Kelas BD",
      friends: [
        { name: "Maya", image: "https://randomuser.me/api/portraits/women/5.jpg" },
        { name: "Oka", image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Putri", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Rian", image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { name: "Siti", image: "https://randomuser.me/api/portraits/women/7.jpg" },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {dataKelas.map((kelas, index) => (
        <ClassCard key={index} className={kelas.className} friends={kelas.friends} />
      ))}
    </div>
  );
}
