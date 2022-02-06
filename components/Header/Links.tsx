import Link from "next/link";
import DarkMode from "../modules/DarkMode";

const Links = () => {
  return (
    <>
      <div className="hidden items-center md:flex space-x-16">
        <div className="space-x-6">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/">
            <a>Terms and Condition</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" passHref>
            <button>Login</button>
          </Link>
          <Link href="/" passHref>
            <button>Sign Up</button>
          </Link>
          <DarkMode />
        </div>
      </div>
    </>
  );
};

export default Links;
