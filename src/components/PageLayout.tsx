import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}