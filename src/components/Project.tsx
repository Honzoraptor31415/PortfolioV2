"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HiddenMenu from "./HiddenMenu";
import { MenuElement } from "@/lib/types/app";

interface props {
  date: string;
  imgUrl: string;
  githubUrl: string;
  link: string;
  tags: string[];
  isWeb: boolean;
  text: string;
  title: string;
  id: string;
}

async function clipboardWrite(url: string) {
  const type = "text/plain";
  const blob = new Blob([url], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}

function Project({
  date,
  imgUrl,
  githubUrl,
  link,
  tags,
  isWeb,
  text,
  title,
  id
}: props) {
  const [copied, setCopied] = useState(false);

  const projectOptions: MenuElement[] = [
    {
      text: "Copy link",
      type: "button",
      onClick: () => {
        clipboardWrite(`https://honzoraptor.vercel.app/projects#${title.replaceAll(" ", "-")}`)
      }
    }
  ]

  return (
    <div
      className="project"
      id={title.replaceAll(" ", "-")}
    >
      <div className="project-side btn-gap project-side-wimg justify-center">
        <a
          target="_blank"
          href={githubUrl}
          className="project-img-link flex-center-all"
        >
          <img src={imgUrl} className="border-radius-18 project-image" />
        </a>
        <div className="tags-wrp desktop">
          <p>Tags:</p>
          <div className="tags">
            {tags.map((v: any, i: any) => {
              return (
                <p key={i} className={`tag ${v}-tag`}>
                  {v}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="project-side project-side-content">
        <div className="project-text-info">
          <div className="project-top">
            <h3>{title}</h3>
            <p className="date">
              {date.split(".")[0].length < 2
                ? `0${date.split(".")[0]}`
                : date.split(".")[0]}
              .
              {date.split(".")[1].length < 2
                ? `0${date.split(".")[1]}`
                : date.split(".")[1]}
              . {date.split(".")[2].slice(1)}
            </p>
          </div>
          <p>{text}</p>
          <div className="flex-between align-center">
            <div className="tags-wrp mobile">
              <p>Tags:</p>
              <div className="tags">
                {tags.map((v: any, i: any) => {
                  return (
                    <p key={i} className={`tag ${v}-tag`}>
                      {v}
                    </p>
                  );
                })}
              </div>
            </div>
            <HiddenMenu menuIconUrl="/three-dots-vertical.svg" iconClass="image-height-20" btnClass="project-menu rounded" wrpClass="mobile" options={projectOptions} />
          </div>
        </div>
        <div className="align-center">
          <div className="project-links flex-between align-center">
            <div className="project-button-links">
              <Link
                target="_blank"
                href={link}
                className="primary-btn align-center btn-gap project-link"
              >
                View demo
                <img src="/link-away.svg" className="image-height-20" />
              </Link>
              <Link
                href={githubUrl}
                className="outline-btn align-center btn-gap project-link"
              >
                View github
                <img className="image-height-20" src="/github.svg" />
              </Link>
            </div>
            <HiddenMenu menuIconUrl="/three-dots-vertical.svg" iconClass="image-height-20" btnClass="project-menu rounded" wrpClass="desktop" options={projectOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
