export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Trung Hieu Duong. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with React, Tailwind CSS, & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

