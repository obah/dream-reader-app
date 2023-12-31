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
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  imageLinks?: {
    thumbnail: string;
  };
  image?: string;
  previewLink: string;
}

export interface ReadingListData {
  id: string;
  title: string;
  authors: string[];
  image?: string;
  previewLink: string;
}
