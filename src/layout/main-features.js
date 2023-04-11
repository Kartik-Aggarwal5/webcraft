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
            Unleash Your Writing Potential with Volute.AI's Dynamic Features
          </h1>

          <div className="grid sm:grid-cols-1 sm:gap-y-10 grid-cols-3 gap-x-5 mt-10">
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
                Personalized Writing Assistance
              </p>
              <p className=" text-[#81AFDD] font-medium">
                Volute.AI's 24/7 chatbot provides personalized writing
                assistance for a variety of academic tasks, including writing
                sample IAs, TOK exhibitions, subject notes and more.
              </p>
            </div>
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
                Dedicated Prompts and Datasets
              </p>
              <p className=" text-[#81AFDD] font-medium">
                Volute.AI's platform includes dedicated prompts and datasets for
                each subject, ensuring the reliability and accuracy of the
                platform's writing assistance.
              </p>
            </div>
            <div>
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="mt-5 text-[20px] font-bold mb-14">
                Multiple Subject Support
              </p>
              <p className=" text-[#81AFDD] font-medium">
                Volute.AI offers support for a range of subjects, including
                physics, chemistry, biology, english, TOK and more enabling
                students to streamline their academic success in multiple
                subject areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainFeatures;
