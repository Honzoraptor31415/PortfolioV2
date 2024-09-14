"use client"

import { DbProject } from "@/lib/types/db"
import Link from "next/link"

function Project({ id, date, imgUrl, githubUrl, linkUrl, tags, textCz, textEn, titleCz, titleEn,
  isWeb }: DbProject) {
  return (
    <div className="sec-bg-card project">
      <div className="project-side gap-2.5 flex flex-col">
        <img src={imgUrl} alt={titleEn} className="project-img" />
        <div className="flex flex-col gap-2.5">
          <i className="text-gray-400 text-sm">Tags</i>
          <div className="flex gap-2 flex-wrap">
            {tags.split(" ").map((tagName, i) => {
              return <span key={i} className={`project-tag ${tagName}-tag`}>{tagName}</span>
            })}
          </div>
        </div>
      </div>
      <div className="project-side gap-2.5 flex flex-col">
        <div className="flex justify-between">
          <h3>{titleEn}</h3>
          <div className="text-gray-400 text-sm">{date}</div>
        </div>
        <p>{textEn}</p>
        <div className="project-links items-center">
          <Link href={githubUrl} target="_blank" className="button gap-2.5 secondary-button flex items-center justify-center">
            GitHub
            <img src="socials/github.svg" className="max-h-5 no-select" alt="" />
          </Link>

          {isWeb && linkUrl ? <Link href={linkUrl} target="_blank" className="button gap-2.5 primary-button flex items-center justify-center">
            Website
            <img src="link.svg" className="max-h-5 no-select" alt="" />
          </Link> : (
            isWeb && !linkUrl && <p className="text-red-600">Not deployed yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project