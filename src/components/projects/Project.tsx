"use client"

import { DbProject } from "@/lib/types/db"

function Project({ id, date, imgUrl, githubUrl, linkUrl, tags, textCz, textEn, titleCz, titleEn,
  isWeb }: DbProject) {
  return (
    <div className="sec-bg-card project">
      <div className="project-side gap-15 flex-column">
        <img src={imgUrl} alt={titleEn} className="project-img" />
        <div className="flex-column gap-10">
          <i className="grey small">Tags</i>
          <div className="flex-wrp gap-5">
            {tags.split(" ").map((tagName, i) => {
              return <span key={i} className={`project-tag ${tagName}-tag`}>{tagName}</span>
            })}
          </div>
        </div>
      </div>
      <div className="project-side gap-15 flex-column">
        <div className="flex-between">
          <h3>{titleEn}</h3>
          <div className="grey small">{date}</div>
        </div>
        <p>{textEn}</p>
        <div className="project-links">
          <a href={githubUrl} target="_blank" className="button gap-10 secondary-button flex-center-all">
            GitHub
            <img src="socials/github.svg" className="max-height-20 no-select" alt="" />
          </a>

          {isWeb && linkUrl ? <a href={linkUrl} target="_blank" className="button gap-10 primary-button flex-center-all">
            Website
            <img src="link.svg" className="max-height-20 no-select" alt="" />
          </a> : (
            isWeb && !linkUrl && <p className="red">Not deployed yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project