export interface INavItems {
  name: string;
  href: string;
  current?: boolean;
}

export type InputRef = string | undefined;

export interface GoogleBooksResponse {
  kind: string;
  id: string;
  etag: string;
  selflink: string;
  volumeInfo: BookData;
}

export interface BookData {
  title: string;
  subtitle?: string;
  authors: string[];
}
