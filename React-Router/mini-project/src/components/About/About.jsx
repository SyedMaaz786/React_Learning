import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Being a React developer means understanding how to build fast, interactive web applications, and React Router plays a major role in that process. It allows developers to create smooth, client-side navigation without reloading the page, giving users a seamless experience.
                      </p>
                      <p className="mt-4 text-gray-600">
                          With react-router-dom, a React developer can manage nested routes, dynamic URLs, protected pages, and layout-based routing while keeping the code organized and maintainable. Mastering React Router is essential for structuring modern single-page applications and delivering intuitive, efficient navigation across the entire app.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}