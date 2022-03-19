type Project = {
  id: string;
  title: string;
  logo: string;
  link: string;
  blurHash: string;
  desc: string;
  technologies: string[];
  business: string[];
};

type Article = {
  title: string;
  desc: string;
  link: string;
  views: string;
  published: string;
  tags: string[];
  github_url: string;
};

interface MetaData {
  title: string;
  meta: {
    description: string;
    keywords: string[];
  };
}
