import Footer from "@/modules/recruite/Footer";
import Relation from "@/modules/recruite/Relation";

export default function RecruiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Relation />
      <Footer />
    </>
  );
}
