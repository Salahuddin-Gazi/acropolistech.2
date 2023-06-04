import ContactUsForm from "@/components/ContactUsSection/ContactUsForm";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import ToasterProvider from "@/components/ToastProvide";
import Layout from "@/components/layout/Layout";

interface indexProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

const index: React.FC<indexProps> = ({ publicKey, serviceId, templateId }) => {
  return (
    <Layout
      title="Acropolis Tech Contact Us Page | Contact Us"
      styles={[`contactus-page`]}
    >
      <ToasterProvider />
      <div className="max-w-[1250px] px-[25px] mx-auto flex flex-col lg:flex-row gap-[30px] lg:py-[30px] py-[75px]">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-[#fff]">
          <SectionHeading
            heading={`<h1>Contact Us</h1><p>Communication is at the heart of every successful relationship. Reach out, connect, and let your voice be heard. We're here to listen and ready to help.</p>`}
            styles={[`mb-[20px] mt-[-50px] lg:text-start text-center`]}
          />
          <SocialLinks />
        </div>
        <ContactUsForm
          publicKey={publicKey}
          serviceId={serviceId}
          templateId={templateId}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const publicKey = process.env.PUBLIC_KEY;
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;

  return {
    props: {
      publicKey,
      serviceId,
      templateId,
    },
  };
}

export default index;
