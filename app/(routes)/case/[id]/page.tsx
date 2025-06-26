import CaseDetail from "@/modules/case/CaseDetail";

interface CaseDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { id } = await params;
  return <CaseDetail caseId={id} />;
}
