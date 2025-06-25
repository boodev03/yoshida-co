import CaseDetail from "@/modules/case/CaseDetail";

interface CaseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  return <CaseDetail caseId={params.id} />;
}
