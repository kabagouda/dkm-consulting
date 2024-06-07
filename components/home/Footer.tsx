export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-semibold text-lg">DKM consulting</span>
        </div>

        <p className="text-sm mt-4 md:mt-0">
          © 2024 DKM Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
