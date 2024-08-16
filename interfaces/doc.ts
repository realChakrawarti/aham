export interface BasicDocumentProps {
  date: string;
  slug: string;
  content?: string;
  title: string;
  excerpt: string;
  tags?: string[];
  type: string;
}

export interface ArticleLinksProps {
  tag: string[];
  link: string;
  label: string;
}
