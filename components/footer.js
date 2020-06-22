const SOCIALS = [
  {
    href: "https://github.com/sdkayy",
    what: "GitHub"
  },
  {
    href: "https://linkedin.com/in/sdkayy",
    what: "LinkedIn"
  },
  {
    href: "https://angel.co/u/austin-quinn",
    what: "Angel"
  }
];

function Footer() {
  return (
    <footer className="m-4 bg-blue-500 shadow-lg rounded-xl">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        {SOCIALS.map((i) => {
          return (
            <li key={i.what}>
              <a href={i.href} target="_blank" className="font-thin">
                {i.what}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
