import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ui/theme-provider';

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}