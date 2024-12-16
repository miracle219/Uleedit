
import "./css/style.css";

import { Metadata } from "@/types";
import { BASE_DESCRIPTION, BASE_TITLE } from "@/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-gray-50 tracking-tight text-gray-900 antialiased`}>
        <ToastContainer />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
