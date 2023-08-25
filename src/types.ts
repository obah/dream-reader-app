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

// interface ImageLinks{
//   smallThumbnail:string;
//   thumbnail:string;
// }
export interface BookData {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  imageLinks?: {
    thumbnail: string;
  };
  image?: string;
}
