import Container from "@/components/container";

const MainFeatures = () => {
  return (
    <Container features>
      <div
        id="about"
        className="mt-2 mb-20 w-full bg-[#042C54] px-10 py-10 mt-20"
      >
        <div className="w-[40px] h-[3px] bg-linear-1"></div>
        <div className="flex md:flex-col justify-between items-start mt-3">
          <p className="font-bold text-[24px]">What is Webcraft</p>
          <p className="max-w-[730px] text-[#81AFDD] font-medium">
          We, at Webcraft, a premium web design agency, are passionate about transparency, reliability, trust, and outstanding customer care – we aren’t happy with our creation until you are. We take tremendous care of your needs. We understand your business goals and deliver them according to your business values.
          </p>
        </div>

        <div className="mt-10 relative">
          <h1 className="max-w-[550px] sm:text-[28px] text-[34px] font-bold heading-clip">
          Create a Path for Consumer Experience Success​
          </h1>

          <div className="grid sm:grid-cols-1 sm:gap-y-10 grid-cols-3 gap-x-5 mt-10">
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
              Website Development
              </p>
              <p className=" text-[#81AFDD] font-medium">
              Your website is the front door to your company, and an essential building block for the success of your business. How it looks, what it says, and how it makes your viewers feel will go a long way towards determining whether they’re willing to stick around and explore, or move on to one of your competitors.
              </p>
            </div>
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
              Brand Strategy + Design
              </p>
              <p className=" text-[#81AFDD] font-medium">
              Your brand is what sets you apart in your landscape, for better or worse. Let’s aim for better. When it comes to existing brands, we gather facts in the form of thoughts, opinions, and feedback from your best clients and customers to create an image and message that truly resonates with them.
              </p>
            </div>
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
              Social Media
              </p>
              <p className=" text-[#81AFDD] font-medium">
              We craft killer, brand-building posts that’ll captivate your audience and make your brand stand out. Believe us, achieving that modern online presence has never been this effortless. For new brands, we tap into our startup experience and 3rd party data to craft a marketing brand strategy and image that’ll take them to the top.

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainFeatures;
