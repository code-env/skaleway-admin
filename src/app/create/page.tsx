import CreateForm from "@/components/CreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create portfolio",
  description: "creating a new portfolio page skaleway",
};

const Create = () => {
  return <CreateForm />;
};

export default Create;
