import Container from "@/components/container";
import useApp from "@/context/app";
import { Link } from "react-scroll";
import NextLink from "next/link";

const Header = () => {
  const { openForm } = useApp();

  return (
    <Container>
      <div id="home" className="py-10 flex items-center justify-between">
        <div className="flex items-center">
          <NextLink href="/">
            <h3 className="font-extrabold text-2xl">Webcraft</h3>
          </NextLink>
          <div className="flex items-center ml-14 md:hidden">
            <NextLink href="/">
              <p className="cursor-pointer">Home</p>
            </NextLink>

            <Link to="about" smooth={true} offset={-70} duration={500}>
              <p className="mx-8 cursor-pointer">About Webcraft</p>
            </Link>
            <Link to="about" smooth={true} offset={-70} duration={500}>
              <p className="cursor-pointer">Features</p>
            </Link>
            <Link to="footer" smooth={true} offset={-70} duration={500}>
              <p className="mx-8 cursor-pointer">Contact</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={openForm}
            className="bg-[#FF4820] sm:px-5 sm:py-3 xs:text-[12px] px-8 py-4 font-medium rounded"
          >
            Request Early Access
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
