import "./globals.css";
import Header from '@/Components/Header'
import Input from '@/Components/Input'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Input />
    </>
  );
}
