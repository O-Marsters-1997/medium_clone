import fs from "fs";
import path from "path";
import matter from "gray-matter";

type MetaData = {
  id: string;
  [key: string]: any;
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const readMDXFile = (filePath: fs.PathOrFileDescriptor) => {
  return matter(fs.readFileSync(filePath, "utf-8"));
};

export const getPostsData = () => {
  const dir = path.join(process.cwd(), "src", "app", "blog", "contents");

  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(dir, file));
    const { id: articleId } = metadata;

    if (!articleId) {
      throw new Error("Article ID is missing");
    }

    return { content, metadata };
  });
};
