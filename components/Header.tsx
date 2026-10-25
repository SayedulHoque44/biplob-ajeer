export default function Header() {
  return (
    <header className="site-header">
      <div className="brand-right">
        <img src="/assets/logos/ajeer_logo.png" alt="أجير" className="brand-logo brand-logo-ajeer" />
      </div>
      <div className="brand-left">
        <a href="https://www.hrsd.gov.sa/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Ministry of Human Resources and Social Development website"><img src="/assets/logos/hrsd_logo.png" alt="وزارة الموارد البشرية والتنمية الاجتماعية" className="brand-logo brand-logo-hrsd" /></a>
      </div>
    </header>
  );
}

