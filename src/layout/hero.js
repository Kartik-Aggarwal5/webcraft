import profilepic from "@/assets/images/profiles.svg";
import Container from "@/components/container";
import useApp from "@/context/app";

const Hero = () => {
  const { openForm, email, setEmail } = useApp();

  return (
    <Container>
      <div className="mt-10 flex flex-col items-center text-center">
        <div className="max-w-[950px] w-full flex flex-col items-center">
          <h1 className="text-[62px] sm:text-[48px] xs:text-[36px] xs:leading-tight font-extrabold leading-[75px] heading-clip">
          We Craft Exceptional Digital Experiences
          </h1>
          <p className="text-[#81AFDD] sm:text-[18px] xs:text-[14px] max-w-[660px] text-[20px] mt-5">
          Webcraft is a collective of designers, developers, strategists, and content creators from UC Berkeley. We create websites for those who demand nothing less than world-class design.
          </p>

          <form
            onSubmit={openForm}
            className="max-w-[650px] w-full mt-8 flex items-center"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="bg-[#052D56] py-5 px-5 outline-none w-full border-l-rounded-lg"
              type="email"
            />
            <button
              onClick={openForm}
              type="submit"
              className="py-5 w-[50%] bg-[#FF4820] font-medium"
            >
              Get Started
            </button>
          </form>

          <div className="mt-5 flex items-center">
            <img src={profilepic.src} className="w-[180px]" />
            <p className="ml-3 text-[12px]">
              More than 50 people have requested access in last few hours
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
