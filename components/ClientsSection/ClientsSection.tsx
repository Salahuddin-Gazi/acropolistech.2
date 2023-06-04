import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import SectionHeading from "../SectionHeading/SectionHeading";
import Clients from "./Clients";

interface ClientsSectionProps {
  clientsContent: defaultContentType[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ clientsContent }) => {
  console.log(clientsContent);

  const headingContent = clientsContent.find(
    ({ frontmatter }) => Object.keys(frontmatter).length == 0
  );

  const heading = marked(headingContent?.content as string);

  const clients = clientsContent
    .filter(({ frontmatter }) => Object.keys(frontmatter).length != 0)
    .sort((a, b): number => {
      if (a.frontmatter.id && b.frontmatter.id) {
        return +a.frontmatter.id - +b.frontmatter.id;
      } else {
        return 0;
      }
    });

  return (
    // <div className="bg-[url('/images/clients/clients-bg.jpg')] py-[50px]">
    <div
      className="max-w-[1250px] pt-[60px] px-[25px] mx-auto text-center"
      id="clients"
    >
      <SectionHeading heading={heading} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[3rem]">
        {clients.map((client, idx) => (
          <Clients client={client} key={idx} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ClientsSection;
