export type skill = {
  id: string;
  name: string;
  description: React.JSX.Element;
};

export type contact = {
  id: string;
  name: string;
  username: string;
  url: string;
  elementClass: string;
};

export type MenuElement = {
  type: string;
  text: string;
  href?: string;
  onClick?: any;
  className?: string;
};
