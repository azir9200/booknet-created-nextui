import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export default interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}

export type TPost = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export type TComment = {
  postId: string;
  comment: string;
};
