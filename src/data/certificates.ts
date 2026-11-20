export type Certificate = {
  title: string;
  issuer: string;
  link: string;
  date?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/EB8NWQWE",
  },
  {
    title: "Udemy PHP Laravel Build Real Estate Management System",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-25d41563-96bc-47e1-a9fc-ad3d3b482ad4/",
    date: "April 18, 2025",
  },
];
