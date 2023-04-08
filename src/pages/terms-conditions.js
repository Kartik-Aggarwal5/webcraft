import Container from "@/components/container";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="w-screen text-white min-h-screen">
      <Header />
      <Head>
        <title>Volute.AI - Terms and Conditions</title>
      </Head>

      <Container>
        <div className="max-w-[1000px] w-full">
          <h1 className="text-[52px] sm:text-[42px] xs:text-[36px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Terms and Conditions
          </h1>
          <p className="text-[18px] mt-5">Last updated: 17th Feb 2023</p>
          <p className="text-[18px] mt-10">
            By accessing and using the Volute.AI website, you agree to be bound
            by the following terms and conditions:
          </p>
          <p className="text-[18px] mt-5 ">
            Use of the Service: Volute.AI provides a platform for academic
            writing assistance. You may use the service to receive sample
            essays, assignments, and other academic writing material. You may
            not use the service to plagiarize or cheat in any way.
          </p>
          <p className="text-[18px] mt-5 ">
            Eligibility: You must be at least 13 years of age to use the
            Service. If you are under 18 years of age, you must have the consent
            of a parent or guardian to use the Service.
          </p>
          <p className="text-[18px] mt-5 ">
            Account Creation: To access some features of the Service, you may be
            required to create an account. You must provide accurate and
            complete information when creating your account. You are responsible
            for maintaining the security of your account and for all activities
            that occur under your account.
          </p>
          <p className="text-[18px] mt-5 ">
            Intellectual Property: All content on the Volute.AI website,
            including but not limited to text, graphics, logos, images, and
            software, is the property of Volute.AI or its licensors and is
            protected by intellectual property laws.
          </p>
          <p className="text-[18px] mt-5 ">
            Prohibited Conduct: You may not use the Service for any illegal or
            unauthorized purpose. You may not transmit any viruses or other
            malicious code. You may not harass, abuse, or harm another person,
            or engage in any other activity that is harmful or disruptive to the
            Service or its users.
          </p>
          <p className="text-[18px] mt-5 ">
            Limitation of Liability: Volute.AI is not liable for any damages
            resulting from the use or inability to use the Service, including
            but not limited to direct, indirect, incidental, punitive, and
            consequential damages.
          </p>
          <p className="text-[18px] mt-5 ">
            Indemnification: You agree to indemnify and hold harmless Volute.AI
            and its affiliates, officers, agents, and employees from any claim
            or demand, including reasonable attorneys' fees, made by any third
            party due to or arising out of your use of the Service, your
            violation of these Terms and Conditions, or your violation of any
            rights of another.
          </p>
          <p className="text-[18px] mt-5 ">
            Modification of Terms: Volute.AI reserves the right to modify these
            Terms and Conditions at any time. Your continued use of the Service
            after such modifications will constitute your acceptance of the new
            terms.
          </p>
          <p className="text-[18px] mt-5 ">
            Governing Law: These Terms and Conditions shall be governed by and
            construed in accordance with the laws of the jurisdiction in which
            Volute.AI is located.
          </p>{" "}
          <p className="text-[18px] mt-5 ">
            Entire Agreement: These Terms and Conditions constitute the entire
            agreement between you and Volute.AI regarding the use of the
            Service. If any provision of these Terms and Conditions is held to
            be invalid or unenforceable, the remaining provisions shall remain
            in full force and effect.
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
