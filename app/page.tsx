import styles from '../styles/Profil.module.css';
import Image from 'next/image';

export default function Profil() {
  const produk = [
    { id: 1, nama: 'Bumbu Dapur Toples', harga: 'Rp18.000', gambar: '/image/g1.png' },
    { id: 2, nama: 'Bumbu Pedas', harga: 'Rp12.000', gambar: '/image/g2.png' },
    { id: 3, nama: 'Bumbu Dapur', harga: 'Rp15.000', gambar: '/image/g3.png' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>MAKANANKITA - Perusahaan Makanan</h1>
        <p>
          Produsen makanan terpercaya sejak 2023, menghadirkan cita rasa dan kualitas terbaik untuk keluarga Indonesia.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Visi & Misi</h2>
        <div className={styles.visionMission}>
          <div className={styles.box}>
            <h3>Visi</h3>
            <p>Menjadi produsen makanan lokal yang mendunia dan dicintai masyarakat.</p>
          </div>
          <div className={styles.box}>
            <h3>Misi</h3>
            <ul>
              <li>Berinovasi dalam produk makanan sehat & lezat.</li>
              <li>Menjaga kualitas bahan baku lokal terbaik.</li>
              <li>Memberdayakan tenaga kerja lokal.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Produk Unggulan</h2>
        <div className={styles.grid}>
          {produk.map((item) => (
            <div key={item.id} className={styles.card}>
              <Image src={item.gambar} alt={item.nama} width={200} height={120} className={styles.image} />
              <h4>{item.nama}</h4>
              <p className={styles.harga}>{item.harga}</p>
              <button className={styles.button}>Lihat Detail</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Galeri Kantor & Produksi</h2>
        <div className={styles.gallery}>
          <Image src='/image/g4.png' alt='Kantor 1' width={250} height={160} />
          <Image src='/image/g5.png' alt='Kantor 2' width={250} height={160} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Testimoni Pelanggan</h2>
        <div className={styles.testimoni}>
          <div className={styles.testiCard}>
            <Image
              src='/image/g6.png'
              alt='Pelanggan 1'
              width={80}
              height={80}
              className={styles.testiImage}
            />
            <p>Produk MAKANANKITA selalu jadi stok wajib di rumah. Enak dan bergizi</p>
            <strong>- Ibu Tri, Jakarta</strong>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Informasi Perusahaan</h2>
        <table className={styles.table}>
          <tbody>
            <tr><td>Nama</td><td>MAKANANKITA</td></tr>
            <tr><td>Bidang</td><td>Manufaktur Makanan</td></tr>
            <tr><td>Tahun Berdiri</td><td>2023</td></tr>
            <tr><td>Alamat</td><td>Jl. Sehat No. 88, Jakarta</td></tr>
            <tr><td>Email</td><td>info@makanankita.co.id</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
