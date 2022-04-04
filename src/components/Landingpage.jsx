import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';



const items = [
  {
    src: 'https://imagizer.imageshack.com/img923/5311/XKtlqM.jpg',
    altText: 'Slide 1',
    caption: 'Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas. Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu. Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar. Mereka dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.',
    header: 'Welcome to Open Library'
  },
  {
    src: 'https://imagizer.imageshack.com/img924/8656/oKNpFL.jpg',
    altText: 'Slide 2',
    caption: 'Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas. Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu. Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar. Mereka dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.',
    header: 'Welcome to Open Library'
  },
  {
    src: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?cs=srgb&dl=pexels-janko-ferlic-590493.jpg&fm=jpg',
    altText: 'Slide 2',
    caption: 'Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas. Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu. Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar. Mereka dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.',
    header: 'Welcome to Open Library'
  }
];

const Landingpage = () => <UncontrolledCarousel items={items} />;

export default Landingpage;