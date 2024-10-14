export interface skill {
  type: "frontend" | "backend" | "game" | "tool" | "language" | "native";
  id: string;
}

export interface social {
  iconUrl: string;
  linkUrl: string;
}
