"use client"

import { DbProject } from "@/lib/types/db"

function Project({ id, date, imgUrl, githubUrl, linkUrl, tags, textCz, textEn, titleCz, titleEn,
  isWeb }: DbProject) {
  return (
    <div className="sec-bg-card project">
      <div className="project-side gap-10 flex-column">
        <img src={imgUrl} alt={titleEn} className="project-img" />
        <div className="flex-wrp gap-5">
          {tags.split(" ").map((tagName, i) => {
            return <span key={i} className={`project-tag ${tagName}-tag`}>{tagName}</span>
          })}
        </div>
      </div>
      <div className="project-side gap-10 flex-column">
        <h2>{titleEn}</h2>
        <p>{textEn}</p>
      </div>
    </div>
  )
}

export default Project