import { defaultContentType, aboutusContentType } from "@/types/defaultTypes";
import Layout from "@/components/layout/Layout";

import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import ToolsSection from "@/components/ToolsSection/ToolsSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";

import getHeroContent from "@/lib/getHeroContent";
import getServicesContent from "@/lib/getServicesContent";
import getToolsContent from "@/lib/getToolsContent";
import getClientsContent from "@/lib/getClientsContent";
import getAboutUsContent from "@/lib/getAboutusContent";

interface HomeProps {
  heroContent: defaultContentType;
  servicesContent: defaultContentType[];
  toolsContent: defaultContentType[];
  clientsContent: defaultContentType[];
  aboutusContent: aboutusContentType[];
}

const Home: React.FC<HomeProps> = ({
  heroContent,
  servicesContent,
  toolsContent,
  clientsContent,
  aboutusContent,
}) => {
  // console.log(toolsContent);
  return (
    <Layout>
      <HeroSection heroContent={heroContent} />
      <ServiceSection servicesContent={servicesContent} />
      <ToolsSection toolsContent={toolsContent} />
      <ClientsSection clientsContent={clientsContent} />
      <AboutUsSection aboutusContent={aboutusContent} />
    </Layout>
  );
};

export async function getStaticProps() {
  const heroContent = getHeroContent();
  const servicesContent = getServicesContent();
  const toolsContent = getToolsContent();
  const clientsContent = getClientsContent();
  const aboutusContent = getAboutUsContent();

  return {
    props: {
      heroContent,
      servicesContent,
      toolsContent,
      clientsContent,
      aboutusContent,
    },
  };
}

export default Home;
