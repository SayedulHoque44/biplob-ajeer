export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Right zone (RTL start): link columns */}
      <div className="footer-cols">
        <div className="col">
          <h4>أجير</h4>
          <a href="#">عن أجير</a>
          <a href="#">خدمات أجير</a>
        </div>

        <div className="col">
          <h4>الدعم</h4>
          <a href="#">الدعم و المساعدة</a>
          <a href="#">الأسئلة الشائعة</a>
        </div>

        <div className="col">
          <h4>الشروط و الخصوصية</h4>
          <a href="#">الشروط والأحكام</a>
          <a href="#">سياسة الخصوصية</a>
        </div>

        <div className="col">
          <h4>تواصل معنا</h4>
          <div className="social">
            <a href="tel:920011040" aria-label="Call 920011040">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="mailto:support@ajeer.com.sa" aria-label="Email Ajeer support">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.3 2.8 11.7c-1.1.4-1.1 1.6-.2 1.9l4.9 1.5 1.9 5.9c.2.6.9.8 1.4.3l2.7-2.4 4.9 3.6c.7.5 1.7.1 1.9-.7l3.3-15.6c.2-1-.7-1.8-1.6-1.4z" />
              </svg>
            </a>
            <a href="https://x.com/AjeerSA" target="_blank" rel="noopener noreferrer" aria-label="Ajeer on X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.9 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.1 3.9H5.2L17.7 20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Partner logos and the floating support button */}
      <div className="footer-left">
        <div className="footer-logos">
          <a className="logo-link" href="https://dga.gov.sa/ar" target="_blank" rel="noopener noreferrer" aria-label="Visit the Digital Government Authority"><img src="/assets/logos/dga_logo.png" alt="هيئة الحكومة الرقمية" className="footer-logo footer-logo-dga" /></a>
          <span className="footer-divider" aria-hidden="true" />
          <a className="logo-link" href="https://tamkeentech.sa/ar/" target="_blank" rel="noopener noreferrer" aria-label="Visit Tamkeen Technologies"><img src="/assets/logos/tamkeen_logo.png" alt="تمكين التقنيات" className="footer-logo footer-logo-tamkeen" /></a>
          <a className="logo-link" href="https://takamolholding.com/ar" target="_blank" rel="noopener noreferrer" aria-label="Visit Takamol Holding"><img src="/assets/logos/takamol_logo.png" alt="تكامل" className="footer-logo footer-logo-takamol" /></a>
          <a className="logo-link" href="https://www.hrsd.gov.sa/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Ministry of Human Resources and Social Development website"><img src="/assets/logos/hrsd_logo.png" alt="وزارة الموارد البشرية والتنمية الاجتماعية" className="footer-logo footer-logo-hrsd" /></a>
        </div>

        <div className="support-btn" aria-label="الدعم">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.5 3.5h-7A5.5 5.5 0 0 0 2 9v3a5.5 5.5 0 0 0 5.5 5.5H9l3.5 3v-3h2A5.5 5.5 0 0 0 20 12v-2"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 7h4A5.5 5.5 0 0 1 22 12.5v2a5.5 5.5 0 0 1-5.5 5.5H16l-3 2v-2"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}






