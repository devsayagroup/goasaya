"use client";

const MenuPDF = () => {
  return (
     <main className="min-h-screen bg-white px-4 py-24 md:py-32 mx-auto">
      <div className="relative w-full aspect-[3/6] md:h-[100vh] rounded-xl overflow-hidden bg-black/40 backdrop-blur border border-white/10">
        <iframe
            src="/MENU_GOASAYA_2026.pdf" // Path relative to the public directory
          className="absolute inset-0 w-full h-full"

            title="PDF Viewer"
        />
      </div>
    </main>
  );
};

export default MenuPDF;