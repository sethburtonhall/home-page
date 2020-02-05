import React from 'react';

const Project = ({ title, src, meta, url, srcUrl, app }) => {
  return (
    <div className="project-card">
      <img src={src} alt="Project" />
      <div className="project-card-info">
        <h5 className="project-card-title">{title}</h5>
        <div className="project-card-meta">{meta}</div>
        <div className="project-card-footer">
          {url && (
            <div className="site">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {app === true ? "App" : "Site"}
              </a>
            </div>
          )}
          {srcUrl && (
            <div className="source">
              <a href={srcUrl} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project