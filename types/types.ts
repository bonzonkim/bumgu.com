import { StaticImageData } from 'next/image';

// careers Type
export type CareerParagraphTypes = {
  korean: string;
  english: string;
};


// projects Type
type GridItemProps = {
  title: string;
  thumbnail: StaticImageData;
  description: string;
};

export type WorkGridItemProps = GridItemProps & {
  gitRepo: string | null;
  skills: string[]
};

export type CareerGridItemProps = GridItemProps & {
};
