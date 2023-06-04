import Button from "@/components/Button";
import Layout from "@/components/layout/Layout";
import { NEXT_URL } from "@/config";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <div className="max-w-[1250px] px-[25px] py-[30px] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-[4rem] font-[700] z-[10] relative">
          404
        </h1>
        <div className="max-w-[1024px] mx-auto lg:mt-[-50px] mt-[-30px]">
          <img
            alt="404 - Not Found"
            src={`/images/error/error404.gif`}
            className="w-[100%] object-cover"
          />
        </div>
        <p className="mb-[10px]">Looks like you are lost!</p>
        <div className="flex gap-[25px]">
          <Link href={`${NEXT_URL}`}>
            <Button title="Go Home" />
          </Link>
          <Link href={`${NEXT_URL}/blogs`}>
            <Button title="Visit Blogs" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default index;
