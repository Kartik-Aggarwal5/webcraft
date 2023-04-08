import Container from "@/components/container";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-screen text-white min-h-screen">
      <Head>
        <title>Volute.AI - Privacy Policy</title>
      </Head>
      <Header />

      <Container>
        <div className="max-w-[1000px] w-full">
          <h1 className="text-[52px] sm:text-[42px] xs:text-[36px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Privacy Policy
          </h1>
          <p className="text-[18px] mt-5">Last updated: 17th Feb 2023</p>
          <h1 className="text-[32px] sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Introduction
          </h1>
          <p className="text-[18px] mt-5 ">
            At Volute.AI, we take the privacy of our users seriously. This
            privacy policy explains how we collect, use, and protect your
            personal information when you use our website or services. By using
            Volute.AI, you consent to the practices described in this policy.
          </p>
          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            What information do we collect?
          </h1>
          <p className="text-[18px] mt-5 ">
            When you use Volute.AI, we may collect the following types of
            information:
          </p>
          <p className="text-[18px] mt-5 ">
            Personal information: When you sign up for our services, we may
            collect personal information such as your name, email address, and
            other contact details. This information is used to create your
            account and to provide you with support and services.
          </p>
          <p className="text-[18px] mt-5 ">
            Usage information: We may collect information about your usage of
            our website and services, such as the pages you visit, the features
            you use, and the time and date of your access. This information is
            used to improve our services and provide a better user experience.
          </p>
          <p className="text-[18px] mt-5 ">
            Device information: We may collect information about the devices you
            use to access Volute.AI, such as the type of device, operating
            system, and browser. This information is used to optimize our
            website and services for your device.
          </p>
          <p className="text-[18px] mt-5 ">
            Cookies and tracking technologies: We use cookies and similar
            tracking technologies to collect information about your usage of our
            website and services. This information is used to personalize your
            experience and to provide targeted advertising.
          </p>

          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            How We Use Your Information
          </h1>
          <p className="text-[18px] mt-5 ">
            We use the information we collect from you for the following
            purposes:
          </p>
          <p className="text-[18px] mt-5 ">
            To provide and improve our services: We use your information to
            provide our services to you and to improve our website and services.
          </p>
          <p className="text-[18px] mt-5 ">
            To communicate with you: We use your contact information to
            communicate with you about our services and to respond to your
            inquiries.
          </p>
          <p className="text-[18px] mt-5 ">
            To personalize your experience: We use your information to
            personalize your experience and to provide targeted advertising.
          </p>
          <p className="text-[18px] mt-5 ">
            To comply with legal requirements: We may use your information to
            comply with legal requirements and to protect our rights and the
            rights of our users.
          </p>

          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            How We Protect Your Information
          </h1>
          <p className="text-[18px] mt-5 ">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or method of electronic storage is
            100% secure. Therefore, we cannot guarantee the absolute security of
            your personal information.
          </p>
          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Your Rights
          </h1>
          <p className="text-[18px] mt-5 ">
            You have the right to access, correct, or delete your personal
            information at any time. To do so, please contact us at
            volute.ai@gmail.com. We will respond to your request within a
            reasonable timeframe.
          </p>
          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Updates to This Policy
          </h1>
          <p className="text-[18px] mt-5 ">
            We may update this privacy policy from time to time. If we make
            significant changes, we will notify you by email or by posting a
            notice on our website.
          </p>
          <h1 className="text-[32px] mt-10 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
            Contact Us
          </h1>
          <p className="text-[18px] mt-5 ">
            If you have any questions or concerns about this privacy policy or
            our practices, please contact us at [insert contact information].
          </p>
        </div>
      </Container>
      {/* <div className="flex w-full flex-col items-center relative z-20">
        <div className="max-w-[1400px] text-center w-full px-10 sm:px-5">
          <div className=" w-full">
            <h1 className="text-[52px] sm:text-[42px] xs:text-[36px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
              Privacy Policy
            </h1>
            <p className="text-[18px] mt-5">Last updated: 2021-09-10</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-20">
            <h1 className="text-[32px] sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
              Introduction
            </h1>
            <p className="text-[18px] mt-5 ">
              At Volute.AI, we take the privacy of our users seriously. This
              privacy policy explains how we collect, use, and protect your
              personal information when you use our website or services. By
              using Volute.AI, you consent to the practices described in this
              policy.
            </p>
            <h1 className="text-[32px] mt-5 sm:text-[24px] xs:text-[18px] sm:leading-tight font-bold max-w-[900px] heading-clip leading-[75px]">
              Information We Collect
            </h1>
            <p>
              When you use Volute.AI, we may collect the following types of
              information: <br /> Personal information: When you sign up for our
              services, we may collect personal information such as your name,
              email address, and other contact details. This information is used
              to create your account and to provide you with support and
              services. Usage information: We may collect information about your
              usage of our website and services, such as the pages you visit,
              the features you use, and the time and date of your access. This
              information is used to improve our services and provide a better
              user experience.
              <br /> Device information: We may collect information about the
              devices you use to access Volute.AI, such as the type of device,
              operating system, and browser. This information is used to
              optimize our website and services for your device.
              <br /> Cookies and tracking technologies: We use cookies and
              similar tracking technologies to collect information about your
              usage of our website and services. This information is used to
              personalize your experience and to provide targeted advertising.
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
