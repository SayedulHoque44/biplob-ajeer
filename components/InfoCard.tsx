import type { PermitRecord } from "@/lib/data";

export default function InfoCard({ record }: { record: PermitRecord }) {
  return (
    <div className="card">
     <div className="table-box">
      {/* Top strip: logos (right) | title | status (left) */}
      <div className="card-top">
        <div className="logo-cell">
          {/* Swap these two files in /public/assets with your own logos */}
          <img src="/assets/logos/ajeer_logo.png" alt="أجير" className="card-logo card-logo-ajeer" />
          <a href="https://www.hrsd.gov.sa/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Ministry of Human Resources and Social Development website"><img src="/assets/logos/hrsd_logo.png" alt="وزارة الموارد البشرية والتنمية الاجتماعية" className="card-logo card-logo-hrsd" /></a>
        </div>
        <div className="title">التحقق من تصريح أجير</div>
        <div className={`status ${record.isActive ? "" : "inactive"}`}>
          {record.status}
        </div>
      </div>

      <div className="success-banner">تم التحقق من التصريح بنجاح</div>

      {/* Permit data */}
      <div className="section-title">بيانات التصريح</div>
      <div className="info-grid">
        <div className="cell label">رقم التصريح</div>
        <div className="cell value">{record.permitNumber}</div>
        <div className="cell label">نوع التصريح</div>
        <div className="cell value">{record.permitType}</div>

        <div className="cell label">تاريخ بداية التصريح</div>
        <div className="cell value">{record.startDate}</div>
        <div className="cell label">تاريخ نهاية التصريح</div>
        <div className="cell value">{record.endDate}</div>
      </div>

      {/* Worker data */}
      <div className="section-title">بيانات العامل</div>
      <div className="info-grid">
        <div className="cell label">اسم العامل</div>
        <div className="cell value">{record.workerName}</div>
        <div className="cell label">رقم الهوية / الإقامة</div>
        <div className="cell value">{record.idNumber}</div>

        <div className="cell label">الجنسية</div>
        <div className="cell value">{record.nationality}</div>
        <div className="cell label">المهنة</div>
        <div className="cell value">{record.profession}</div>

        <div className="cell label">الجنس</div>
        <div className="cell value">{record.gender}</div>
        <div className="cell label">تاريخ الميلاد</div>
        <div className="cell value">{record.birthDate}</div>
      </div>

      {/* Establishment data */}
      <div className="section-title">بيانات المنشأة</div>
      <div className="info-grid">
        <div className="cell label">رقم المنشأة</div>
        <div className="cell value">{record.establishmentNumber}</div>
        <div className="cell label">اسم المنشأة</div>
        <div className="cell value">{record.establishmentName}</div>
      </div>
     </div>
    </div>
  );
}



