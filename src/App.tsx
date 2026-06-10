'use client';

import Hero from '../public/components/Hero';
import ExperienceTabs from '../public/components/ExperienceTabs';
// import TechStack from '../public/components/TechStack';
import Contact from '../public/components/Contact';
import kaisar from '../src/assets/kaisar.jpg';
const PROFILE_DATA = {
  name: 'Kaisar Fauzan',
  title: 'Front-end & Back-end Developer',
  description:
    'Saya adalah seorang developer full-stack yang berpengalaman dengan React, Next.js, dan Laravel. Lulusan Universitas Pembangunan Nasional "Veteran" Jawa Timur dengan gelar Cumlaude. Mampu beradaptasi, bekerja sama dengan tim, dan bertanggung jawab dalam mengerjakan project kecil hingga menengah.',
  profileImage: kaisar,
};

const TRAININGS = [
  {
    id: '1',
    title: 'Cloud Computing Cohort Participant',
    company: 'Bangkit Academy',
    period: 'Feb 2023 - Jul 2023',
    description: [
      'Belajar menggunakan Google Cloud Platform untuk menghosting sebuah situs web',
      'Berpartisipasi dalam proyek akhir "Eco-Route", yang dianugerahi penghargaan Best Capstone Project dalam kategori lingkungan',
      'Menerima pendanaan sebesar 140 juta IDR dan mendirikan startup Green Innovation Indonesia',
    ],
  },
  {
    id: '2',
    title: 'Front-end Back-end Training',
    company: 'Dicoding Indonesia',
    period: 'Agu 2022 - Des 2022',
    description: [
      'Mempelajari pengembangan web front-end dan back-end menggunakan HTML, CSS, dan JavaScript',
      'Berpartisipasi dalam proyek akhir "ajari" dan mendapatkan proyek akhir terbaik dalam kategori pembelajaran inklusif',
    ],
  },
  
];

const INTERNSHIPS = [
  {
    id: '1',
    title: 'Front-end Intern',
    company: 'Peduly',
    period: 'Apr 2025 - Jul 2025',
    description: [
      'Mengembangkan situs web menggunakan React dengan 3 fitur utama, seperti autentikasi, operasi CRUD, dan pengiriman pesan ke email dan WhatsApp menggunakan Baileys WebSocket',
      'Melakukan Fixing Bug di alur broadcasting whatsapp dan email sehingga user bisa melakukan broadcasting tanpa kendala',
    ],
    technologies: ['React', 'Tailwind CSS', 'Baileys', 'WhatsApp API'],
  },
  {
    id: '2',
    title: 'Front-end Back-end Intern',
    company: 'ORDO',
    period: 'Nov 2024 - Apr 2025',
    description: [
      'Menerapkan desain web responsif menggunakan SCSS dan Bootstrap, serta mengintegrasikannya dengan backend untuk otentikasi dan operasi CRUD',
      'Membuat backoffice untuk akuntansi dengan 4 fitur utama, seperti otentikasi, operasi CRUD, ekspor dan impor data, serta pengiriman data ke email pengguna',
    ],
    technologies: ['React', 'Tailwind CSS', 'SCSS', 'Bootstrap'],
  },
  {
    id: '3',
    title: 'Mentor Front-end Back-end',
    company: 'Dicoding Indonesia',
    period: 'Feb 2024 - Jun 2024',
    description: [
      'Membimbing 25 mentee dalam pembelajaran front-end dan back-end, dan memastikan 100% mentee lulus dari program pembelajaran',
      'Secara proaktif memantau kemajuan individu dengan melakukan review mingguan dan memberikan umpan balik konstruktif',
      'Menyediakan sesi bantuan teknis untuk memecahkan masalah kode dan konsep yang sulit',
    ],
  },
  {
    id: '4',
    title: 'Web Developer Intern',
    company: 'Telkomsel',
    period: 'Feb 2023 - Apr 2023',
    description: [
      'Merancang ulang antarmuka pengguna (UI) dan pengalaman pengguna (UX) situs web menggunakan Figma, dengan fokus pada estetika modern dan navigasi yang intuitif',
      'Mengembangkan antarmuka pengguna (UI) yang responsif dan interaktif menggunakan Vue.js, terintegrasi dengan API RESTful yang dibangun menggunakan Express.js',
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Express.js', 'Figma'],
  },
  
];

const PROJECTS = [
  {
    id: '1',
    title: 'Cover Letter Generator',
    repo: 'https://github.com/KaisarF/cover-letter-generator',
    link: 'https://cover-letter-generator-kaisar.netlify.app/',
    period: 'April 2026',
    description: [
      'membuat cover letter dengan memasukkan nama perusahaan dan posisi yang dilamar. maka akan langsung terdownload file PDF yang berisi cover letter yang sudah di combine dengan pdf lainnya, yang dalam hal ini merupakan cv dan sertifikat',
    ],
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'To-do List App',
    repo: 'https://github.com/KaisarF/todo-list-app',
    link: 'https://todo-list-app-omega-olive.vercel.app/',
    period: 'October 2025',
    description: [
      'membuat todo list app dengan fitur CRUD, dimana user bisa menambahkan, mengedit, dan menghapus todo list yang sudah dibuat',
      'admin bisa melihat semua todo list yang sudah dibuat oleh user',
    ],
    technologies: ['Next.Js', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'News App',
    repo: 'https://github.com/KaisarF/news-web',
    link: 'https://peppy-moonbeam-3be3aa.netlify.app/',
    period: 'October 2025',
    description: [
      'membuat news app dengan menggunakan news API, dimana user bisa mencari berita berdasarkan keyword yang diinginkan',
    ],
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: '4',
    title: 'Article Web App',
    repo: 'https://article-web-fe-kaisar.netlify.app/login',
    link: 'https://peppy-moonbeam-3be3aa.netlify.app/',
    period: 'August 2025',
    description: [
      'membuat web app untuk membaca artikel dengan fitur CRUD, dimana user bisa menambahkan, mengedit, dan menghapus artikel yang sudah dibuat'
      ,'admin bisa melihat semua artikel yang sudah dibuat oleh user',
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: '5',
    title: 'Contact Zainzo',
    // repo: 'https://article-web-fe-kaisar.netlify.app/login',
    // link: 'https://peppy-moonbeam-3be3aa.netlify.app/',
    period: 'April 2025 - July 2025',
    description: [
      'membuat web broadcasting untuk mengirim pesan ke email dan whatsapp dengan menggunakan Baileys WebSocket, dimana user bisa melakukan broadcasting dengan mudah tanpa kendala',
    ],
    technologies: ['React', 'Laravel', 'Tailwind CSS'],
  },
  {
    id: '6',
    title: 'Contact Zainzo',
    company: 'Peduly',
    // repo: 'https://article-web-fe-kaisar.netlify.app/login',
    // link: 'https://peppy-moonbeam-3be3aa.netlify.app/',
    period: 'April 2025 - July 2025',
    description: [
      'membuat web broadcasting untuk mengirim pesan ke email dan whatsapp dengan menggunakan Baileys WebSocket, dimana user bisa melakukan broadcasting dengan mudah tanpa kendala',
    ],
    technologies: ['React', 'Laravel', 'Tailwind CSS'],
  },
  {
    id: '7',
    title: 'Web Accounting',
    company: 'ORDO',
    repo: 'https://github.com/KaisarF/accounting',
    // link: 'https://peppy-moonbeam-3be3aa.netlify.app/',
    period: 'November 2024 - April 2025',
    description: [
      'membuat web app untuk mengelola data akuntansi dengan fitur CRUD, dimana user bisa menambahkan, mengedit, dan menghapus data akuntansi yang sudah dibuat',
      "admin bisa melihat semua data akuntansi yang sudah dibuat oleh user, serta bisa melakukan ekspor dan impor data akuntansi dengan format excel",
    ],
    technologies: [ 'Laravel', 'Bootstrap', 'SCSS' ],
  },
  {
    id: '8',
    title: 'Hausjo',
    company: 'ORDO',
    repo: 'https://github.com/KaisarF/HausJo',
    link: 'https://hausjo.com/',
    period: 'November 2024 - April 2025',
    description: [
      'membuat company profile untuk perusahaan HAUSJO dengan menggunakan Laravel, dimana perusahaan bisa menampilkan profil perusahaan, produk, dan layanan yang ditawarkan',
    ],
    technologies: [ 'Laravel', 'Bootstrap', 'SCSS' ],
  },
  {
    id: '9',
    title: 'luxury app',
    company: 'ORDO',
    repo: 'https://github.com/KaisarF/luxury-app',
    
    period: 'November 2024 - April 2025',
    description: [
      'membuat company profile untuk perusahaan luxury dengan menggunakan Laravel, dimana perusahaan bisa menampilkan profil perusahaan, produk, dan layanan yang ditawarkan',
    ],
    technologies: [ 'Laravel', 'Bootstrap', 'SCSS' ],
  },
  {
    id: '10',
    title: 'green innovation indonesia web ',
    company: 'green innovation indonesia',
    repo: 'https://github.com/KaisarF/new-eco-route-web',
    link:'https://gi2-eco-route.netlify.app/',
    
    period: 'September 2023 - April 2024',
    description: [
      'membuat company profile untuk green innovation indonesia dengan menggunakan React, dimana perusahaan bisa menampilkan profil perusahaan, produk, dan layanan yang ditawarkan',
    ],
    technologies: [ 'React', 'Tailwind CSS' ],
  },
  {
    id: '11',
    title: 'eco-route web ',
    company: 'green innovation indonesia',
    repo: 'https://github.com/KaisarF/eco-route-web',
    link:'https://eco-route.netlify.app/',
    
    period: 'September 2023 - April 2024',
    description: [
      'membuat company profile untuk green innovation indonesia dengan menggunakan React, dimana perusahaan bisa menampilkan profil perusahaan, produk, dan layanan yang ditawarkan',
    ],
    technologies: [ 'React', 'Tailwind CSS' ],
  },
  {
    id: '12',
    title: 'Telkomsel Internal web ',
    company: 'Telkomsel',
    // repo: 'https://github.com/KaisarF/eco-route-web',
    // link:'https://eco-route.netlify.app/',
    
    period: 'february 2023 - april 2023',
    description: [
      'membuat web untuk internal telkomsel dengan menggunakan Vue.js, dimana user bisa melihat data yang sudah disediakan oleh backend, serta bisa melakukan operasi CRUD untuk mengelola data tersebut',
    ],
    technologies: [ 'Vue.js', 'Tailwind CSS', 'Express.js' ],
  },
  {
    id: '13',
    title: 'restaurant catalog web ',
    repo: 'https://github.com/KaisarF/Restaurant-catalogue',
    link:'https://kaisar-restaurant-catalogue.netlify.app/',
    
    period: 'august 2022 - december 2022',
    description: [
      'membuat web yang berisi daftar restaurant dan informasi mengenai masing-masing restaurant',
    ],
    technologies: [ 'node.js', 'HTML', 'CSS' ],
  },
  {
    id: '14',
    title: 'restaurant catalog web ',
    repo: 'https://github.com/KaisarF/web-kopi',
    link:'https://kedai-kaisar.netlify.app//',
    
    period: 'august 2022 - december 2022',
    description: [
      'membuat web yang berisi daftar restaurant dan informasi mengenai kedai kopi',
    ],
    technologies: [ 'node.js', 'HTML', 'CSS' ],
  },
];

// const TECHNOLOGIES = [
//   'React',
//   'Next.js',
//   'Vue.js',
//   'JavaScript', 
//   'TypeScript',
//   'Tailwind CSS',
//   'SCSS',
//   'Bootstrap',
//   'Laravel',
//   'Express.js',
//   'ElysiaJs',
//   'Node.js',
//   'PostgreSQL',
//   'Google Cloud',
//   'Firebase',
//   'Git',
// ];

const CONTACT_INFO = {
  email: 'kaisar0354@gmail.com',
  phone: '+6282132661900',
  linkedin: 'linkedin.com/in/kaisar-fauzan',
  location: 'Sidoarjo, Jawa Timur',
};

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero
        name={PROFILE_DATA.name}
        title={PROFILE_DATA.title}
        description={PROFILE_DATA.description}
        profileImage={PROFILE_DATA.profileImage}
      />
      <ExperienceTabs
        trainings={TRAININGS}
        internships={INTERNSHIPS}
        projects={PROJECTS}
      />
      {/* <TechStack technologies={TECHNOLOGIES} /> */}
      <Contact
        email={CONTACT_INFO.email}
        phone={CONTACT_INFO.phone}
        linkedin={CONTACT_INFO.linkedin}
        location={CONTACT_INFO.location}
      />
    </main>
  );
}
