"use client";

import { useEffect, useState } from "react";

interface props {
  date: string;
  imgUrl: string;
  githubUrl: string;
  link: string;
  tags: string[];
  isWeb: boolean;
  text: string;
  title: string;
  index: number;
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
  index,
}: props) {
  const [data, setData] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);
  const [currentLocationHash, setCurrentLocationHash] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setCurrentLocationHash(location.hash);
  }, []);

  return (
    <div
      className={`project ${
        currentLocationHash.slice(1) === title.replaceAll(" ", "-")
          ? "project-target"
          : ""
      }`}
      id={title.replaceAll(" ", "-")}
    >
      <div className="project-side">
        <a target="_blank" href={githubUrl}>
          <img src={imgUrl} className="rounded project-image" />
        </a>
      </div>
      <div className="project-side">
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
        <div className="project-links">
          {!isWeb ? (
            <a target="_blank" href={githubUrl} className="before-bg-anim">
              <img src="/github.svg" className="no-select" />
            </a>
          ) : (
            ""
          )}

          {isWeb && link !== "no xD" ? (
            <>
              <a target="_blank" href={githubUrl} className="before-bg-anim">
                <img src="/github.svg" className="no-select" />
              </a>
              <a target="_blank" href={link} className="before-bg-anim">
                <img src="/link-away.svg" className="no-select" />
              </a>
            </>
          ) : (
            <>
              {isWeb && (
                <>
                  <a
                    target="_blank"
                    href={githubUrl}
                    className="before-bg-anim"
                  >
                    <img src="/github.svg" className="no-select" />
                  </a>
                  <p className="no-demo">App is not deployed yet</p>
                </>
              )}
            </>
          )}
        </div>
        <div className="project-bottom-wrp">
          <div className="tags-wrp">
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
          <div className="popover-wrp">
            <button
              id={`btn-${index}`}
              className="three-dots-btn popover-btn before-bg-anim"
            >
              <img
                className="three-dots-vertical"
                src="/three-dots-vertical.svg"
                alt=""
              />
              <div id={`popover-${index}`} className="popover">
                <a
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                      document.getElementById(`btn-${index}`)?.blur();
                    }, 1000);
                    clipboardWrite(
                      `https://honzoraptor.vercel.app/projects#${title.replaceAll(
                        " ",
                        "-"
                      )}`
                    );
                  }}
                  className="popover-link"
                >
                  <span className={copied ? "success-text" : ""}>
                    {copied ? "Link copied!" : "Copy link"}
                  </span>
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
