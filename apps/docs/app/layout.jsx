import './globals.css';

export const metadata = {
  title: 'UI Component Library - Documentation',
  description: 'Documentation for our React UI component library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}
