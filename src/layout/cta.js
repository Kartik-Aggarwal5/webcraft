import Container from "@/components/container";
import useApp from "@/context/app";

const Cta = () => {
  const { openForm } = useApp();
  return (
    <Container>
      <div className="flex sm:flex-col sm:text-center w-full items-center justify-between py-10 px-10 bg-linear-2 rounded-lg text-black">
        <div>
          <p className="text-[12px] font-medium">
          Ready to get started?
          </p>
          <p className="text-[24px] font-bold">
          Request a consultation with us, today.
          </p>
        </div>

        <button
          onClick={openForm}
          className="bg-black py-5 sm:mt-5 sm:py-3 rounded-full text-white px-10"
        >
          Get Started
        </button>
      </div>
    </Container>
  );
};

export default Cta;
