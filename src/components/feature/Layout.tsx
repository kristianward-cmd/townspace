
import Header from './Header';
import Footer from './Footer';
import SalesNotificationWidget from './SalesNotificationWidget';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SalesNotificationWidget />
    </div>
  );
}
