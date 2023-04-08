import Container from "@/components/container";
import useApp from "@/context/app";
import NextLink from "next/link";

const Footer = () => {
  const { openForm } = useApp();

  return (
    <div
      id="footer"
      className="bg-[#031B34] w-full pt-[200px] sm:pt-[100px]  pb-5 mt-20"
    >
      <div className="w-full px-5 flex flex-col items-center justify-center text-center">
        <p className="text-[52px] sm:text-[42px] xs:text-[36px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
          Ready to Transform Your Writing Experience with Volute.AI?
        </p>
        <button onClick={openForm} className="border mt-5 px-5 py-5">
          Request Early Access
        </button>
      </div>
      <div className="w-full mt-32">
        <Container>
          <div className="flex sm:flex-col justify-between flex-start">
            <h1 className="text-[32px] font-bold">Volute.AI</h1>

            <div className="font-gilroy sm:flex-col w-full justify-evenly flex">
              <div className="sm:mt-5">
                <p className="font-bold">Links</p>

                <NextLink href="/">
                  <p className="text-[12px] cursor-pointer  mt-5 mb-5">Home</p>
                </NextLink>
                <NextLink href="/#about">
                  <p className="text-[12px] cursor-pointer mb-5">
                    What is Volute?
                  </p>
                </NextLink>
                <NextLink href="/#about">
                  <p className="text-[12px]">Features</p>
                </NextLink>
              </div>
              <div className="sm:mt-10">
                <p className="font-bold">Company</p>
                <NextLink href="/terms-conditions">
                  <p className="text-[12px] cursor-pointer mt-5 mb-5">
                    Terms and Conditions
                  </p>
                </NextLink>
                <NextLink href="/privacy-policy">
                  <p className="text-[12px] cursor-pointer mb-5">
                    Privacy Policy
                  </p>
                </NextLink>
              </div>
              <div className="sm:mt-10">
                <p className="font-bold">Get in Touch</p>
                <p className="text-[12px] cursor-pointer mt-5 mb-5">
                  volute.ai@gmail.com
                </p>
                <p className="text-[12px] cursor-pointer mb-5">+919680480916</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full text-center mt-10 font-gilroy font-medium">
        <p>© Volute.AI, 2023</p>
      </div>
    </div>
  );
};

export default Footer;
