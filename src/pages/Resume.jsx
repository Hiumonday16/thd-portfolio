export default function Resume() {
  return (
    <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Download Resume
          </a>
          <p className="mt-4 text-sm text-gray-500">
            (Note: Add your resume.pdf file to the public folder)
          </p>
        </div>
      </div>
    </div>
  );
}

