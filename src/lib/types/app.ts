export interface skill {
  type: "frontend" | "backend" | "game" | "tool" | "language";
  id: string;
}

export interface social {
  iconUrl: string;
  linkUrl: string;
}
