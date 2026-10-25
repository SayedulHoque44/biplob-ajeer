export type PermitRecord = {
  status: string;
  isActive: boolean;
  permitNumber: string;
  permitType: string;
  startDate: string;
  endDate: string;
  workerName: string;
  idNumber: string;
  nationality: string;
  profession: string;
  gender: string;
  birthDate: string;
  establishmentName: string;
  establishmentNumber: string;
};

type EmployeePermitApiRecord = {
  permitNumber: string;
  permitType: string;
  permitStartDate: string;
  permitExpiryDate: string;
  userId: string;
  employeeName: string;
  nationality: string;
  profession: string;
  gender: string;
  dateOfBirth: string;
  establishmentNumber: string;
  establishmentName: string;
};
type ApiResponse<T> = { success: boolean; data: T };
const serverUrl = (process.env.EMPLOYEE_PERMIT_API_URL || "https://eservicealriyadhserver.vercel.app").replace(/\/+$/, "");

const statusFor = (start: string, end: string) => {
  const now = new Date();
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T23:59:59`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return { status: "ساري / فعال", isActive: true };
  if (now < startDate) return { status: "لم يبدأ", isActive: false };
  if (now > endDate) return { status: "منتهي", isActive: false };
  return { status: "ساري / فعال", isActive: true };
};

export async function getRecord(id: string): Promise<PermitRecord | undefined> {
  const response = await fetch(`${serverUrl}/api/public/employee-permits/${encodeURIComponent(id)}`, { cache: "no-store" });
  if (response.status === 404) return undefined;
  if (!response.ok) throw new Error(`Employee permit API returned ${response.status}`);
  const payload = (await response.json()) as ApiResponse<EmployeePermitApiRecord>;
  if (!payload.success || !payload.data) return undefined;
  const permit = payload.data;
  const { status, isActive } = statusFor(permit.permitStartDate, permit.permitExpiryDate);
  return {
    status, isActive,
    permitNumber: permit.permitNumber,
    permitType: permit.permitType,
    startDate: permit.permitStartDate,
    endDate: permit.permitExpiryDate,
    workerName: permit.employeeName,
    idNumber: permit.userId,
    nationality: permit.nationality,
    profession: permit.profession,
    gender: permit.gender,
    birthDate: permit.dateOfBirth || "-",
    establishmentName: permit.establishmentName,
    establishmentNumber: permit.establishmentNumber,
  };
}

