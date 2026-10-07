import "./globals.css";

export const metadata = {
  title: "Bhavishya | Computer Science Student",
  description: "Student portfolio of Bhavishya, a second-year computer science engineering student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
