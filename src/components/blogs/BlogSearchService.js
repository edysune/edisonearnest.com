import missing404Image1 from "images/codes/missing404_1.jpg";
import missing404Image2 from "images/codes/missing404_2.jpg";

import Rolly1 from "images/blogs/rolly_1.jpeg";
import Rolly2 from "images/blogs/rolly_2.jpeg";

import Consciousness1 from "images/blogs/consciousness_1.jpg";
import Consciousness2 from "images/blogs/consciousness_2.jpg";
// import Consciousness3 from "images/blogs/consciousness_3.jpg";
// import Consciousness4 from "images/blogs/consciousness_4.jpg";

export const IBlogs = {
  Unknown: 'Unknown',
  AIDemo01: 'AIDemo01',
  MeetRolly: 'MeetRolly'
};

const blogList = {
  MeetRolly: {
    featured: true,
    hidden: true,
    type: IBlogs.MeetRolly,
    url: "/blog/meet-rolly",
    title: "Meet Rolly!",
    description: "This is Rolly! That's pronounced like 'roll-ie'. We were told that when we adopted him, that his name was supposed to match his brother 'Polly'.",
    tags: ["pets", "rolly"],
    author: "Edison Earnest",
    date: "12/27/2023",
    source: "N/A",
    overviewInfo: [],
    blogs: [
      {
        type: "text",
        text: "Paragraph 1"
      },
      {
        type: "left-picture",
        pictures: ["rolly1"],
        text: "Paragraph 2"
      },
      {
        type: "right-picture",
        pictures: ["rolly2"],
        text: "Paragraph 3"
      },
      {
        type: "pictures",
        pictures: ["rolly1", "rolly2"],
        text: "Paragraph 1",
      }
    ]
  },
  AIDemo01: {
    hidden: true,
    type: IBlogs.AIDemo01,
    url: "/blog/ai-demo-01",
    title: "AI Demo - Part 1 - Image Generation",
    description: "",
    tags: ["tech", "ai", "image generation"],
    author: "Edison Earnest",
    date: "12/27/2023",
    source: "N/A",
    overviewInfo: [],
    blogs: [
      {
        type: "text",
        text: "Paragraph 1"
      },
      {
        type: "left-picture",
        pictures: ["ai1"],
        text: "Paragraph 2"
      },
      {
        title: "some title example",
        subheading: "some subheading example",
        type: "right-picture",
        pictures: ["ai2"],
        text: "Paragraph 3"
      },
      {
        type: "pictures",
        pictures: ["ai1", "ai2"],
        text: "Paragraph 1",
      }
    ]
  }
}

const UnknownBlog = {
  type: IBlogs.Unknown,
  title: "404 - Unknown Blog :(",
  tags: ["404"],
  url: "/blog/error",
}

function getBlogList() {
  return blogList;
}

export function getAllBlogs() {
  const allBlogs = getBlogList();
  let blogsResult = [];

  Object.keys(allBlogs).forEach(blogKey => {
    const blogItem = JSON.parse(JSON.stringify(allBlogs[blogKey]));
    blogItem["imageSrc"] = searchForBlogImage(blogItem);
    blogsResult.push(blogItem);
  });

  return blogsResult;
}

export function searchForBlog(blog) {
  const blogsResult = getBlogList();
  return !!blogsResult[blog] ? blogsResult[blog] : UnknownBlog;
}

export function getBlogFromUrl(url) {
  const blogsResult = getBlogList();
  let blog = UnknownBlog;
  Object.keys(blogsResult).forEach(key => {
    if (!!blogsResult[key]?.url  && blogsResult[key].url === url) {
      blog = blogsResult[key];
    }
  });
  return blog;
}

export function getRandomBlogImage(blog) {
  let resultImages = searchForAllBlogImages(blog);
  return getRandomItemFromList(resultImages);
}

export function searchForAllBlogImages(blog) {
  if (!blog?.pictures || blog.pictures.length === 0) {
    return [ missing404Image1 ];
  }

  let resultImages = [];

  blog.pictures.forEach(picture => {
    resultImages.push(searchForImageFromImageName(picture));
  });

  return resultImages;
}

export function searchForImageFromImageName(blogImageName) {
  if (!blogImageName) {
    return missing404Image1;
  }

  switch (blogImageName) {
    case "ai1":
      return Consciousness1;
    case "ai2":
      return Consciousness2;
    case "rolly1":
      return Rolly1;
    case "rolly2":
      return Rolly2;
    default:
      return missing404Image1;
    }
}

export function searchForBlogImage(blog) {
  if (!blog?.type) {
    return missing404Image1;
  }

  let resultImage;

  switch (blog.type) {
    case IBlogs.Unknown:
      resultImage = getRandomItemFromList([missing404Image1, missing404Image2]);
      break;
    case IBlogs.AIDemo01:
      resultImage = getRandomItemFromList([Consciousness1]);
      break;
    case IBlogs.MeetRolly:
      resultImage = getRandomItemFromList([Rolly1]);
      break;
    default:
      resultImage = missing404Image1
  }

  return resultImage;
}

const getRandomItemFromList = (imageList) => {
  return imageList[Math.floor(Math.random()*imageList.length)];
}
