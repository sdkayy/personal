import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="m-0 bg-purple-700 shadow-lg md:m-6 md:rounded-xl">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <h1 className="text-xl font-thin text-white">
            Austin Quinn | Software Engineer
          </h1>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "GitHub", route: "https://github.com/sdkayy" },
            { title: "Angel", route: "https://angel.co/u/austin-quinn" },
            { title: "LinkedIn", route: "https://linkedin.com/in/sdkayy" },
            { title: "Mail", route: "mailto:sdkay@sdkay.pw" }
          ].map((navigationItem) => (
            <a
              className="block p-4 mt-3 font-thin text-white rounded-full cursor-pointer md:mt-0 md:ml-6 hover:bg-white hover:text-black"
              key={navigationItem.title}
              href={navigationItem.route}
            >
              {navigationItem.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
