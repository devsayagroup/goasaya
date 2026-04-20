export interface EventType {
  id: number;
  title: string;
  slug: string;
  tracking?: string;
  metaTitle?: string;
  metaDescription?: string;
  image: string;
  date?: string;
  time?: string;
  content?: string | string[];
  desc?: string;
}