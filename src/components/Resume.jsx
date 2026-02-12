import { useState } from 'react'
import './Resume.css'

function Resume() {
  const [viewMode, setViewMode] = useState('download')

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        <div className="resume-controls">
          <button
            className={`resume-btn ${viewMode === 'download' ? 'active' : ''}`}
            onClick={() => setViewMode('download')}
          >
            Download
          </button>
          <button
            className={`resume-btn ${viewMode === 'view' ? 'active' : ''}`}
            onClick={() => setViewMode('view')}
          >
            View Online
          </button>
        </div>

        <div className="resume-content">
          {viewMode === 'download' ? (
            <div className="resume-download">
              <div className="download-card">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <polyline points="9 15 12 18 15 15"/>
                </svg>
                <h3>Ryan Li - Resume</h3>
                <p>Download my resume in PDF format</p>
                <a href="/Resume_cur.pdf" download className="btn btn-primary">
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <div className="resume-viewer">
              <iframe
                src="/Resume_cur.pdf"
                title="Ryan Li Resume"
                className="resume-iframe"
              />
              <p className="resume-fallback">
                Can't see the resume? <a href="/Resume_cur.pdf" download>Download it here</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resume
