import './globals.css';

export const metadata = {
  title: 'AESS ESSTHS',
  description: 'Aerospace society',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
