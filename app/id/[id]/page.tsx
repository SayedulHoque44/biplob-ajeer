import InfoCard from "@/components/InfoCard";
import { getRecord } from "@/lib/data";
import MissingPermit from "@/components/MissingPermit";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = { params: { id: string } };

export default async function IdPage({ params }: PageProps) {
  const record = await getRecord(params.id);
  return (
    <div className="container">
      {record ? <InfoCard record={record} /> : (
        <MissingPermit />
      )}
    </div>
  );
}

