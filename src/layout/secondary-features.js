import Container from "@/components/container";

const SecondaryFeautes = () => {
  return (
    <Container>
      <div className="mb-20 flex md:flex-col  item-start justify-between">
        <div>
          <h1 className="max-w-[500px] text-[42px] font-bold heading-clip">
          Strategize, build, and design transformative, human-centric experiences.
          </h1>
          <p className="mt-5text-[#FF8A71]">
          Work with us
          </p>
        </div>

        <div className="md:mt-10">
          <div className="flex sm:flex-col items-start justify-between mb-10">
            <div className="max-w-[180px]">
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="text-[18px] font-bold mt-1">
                Saves your time and effort
              </p>
            </div>
            <p className="max-w-[330px] text-[14px] text-[#81AFDD]">
              With Volute.AI's customized writing samples and assistance,
              students can save time and reduce stress on completing assignments
              and IAs.
            </p>
          </div>
          <div className="flex sm:flex-col items-start mb-10">
            <div className="mr-20 max-w-[180px]">
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="text-[18px] font-bold mt-1">
                Improve your Writing Skills
              </p>
            </div>
            <p className="max-w-[330px] w-full text-[14px] text-[#81AFDD]">
              Volute.AI provides personalized feedback and writing resources,
              which can help students improve their writing skills and become
              better writers over time.
            </p>
          </div>
          <div className="flex sm:flex-col items-start mb-10">
            <div className="mr-20 max-w-[180px]">
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="text-[18px] font-bold mt-1">
                Reduce Academic Pressure
              </p>
            </div>
            <p className="max-w-[330px] text-[14px] text-[#81AFDD]">
              By providing guidance and support, Volute.AI helps students to
              manage academic pressure and succeed in their studies.
            </p>
          </div>
          <div className="flex sm:flex-col items-start mb-10">
            <div className="mr-20 max-w-[180px] w-full">
              <div className="w-[40px] h-[3px] bg-linear-1"></div>
              <p className="text-[18px] font-bold mt-1">
                Clear Doubts Instantly
              </p>
            </div>
            <p className="max-w-[330px] w-full text-[14px] text-[#81AFDD]">
              Volute.AI's chatbot feature allows students to receive instant
              responses to their subject-related doubts.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SecondaryFeautes;
