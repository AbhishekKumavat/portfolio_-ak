import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-3 pb-3  text-sm text-neutral-400 c-space">
      <div className="mb-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors border border-white/5"
            >
              <img src={social.icon} className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" alt={social.name} />
            </a>
          ))}
        </div>

        <p>© 2026 Abhishek Kumavat. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
