'use client';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to My Portfolio
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Explore my work experience, projects, and learn more about my journey in software engineering, AI, music, and media.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}