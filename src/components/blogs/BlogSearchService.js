import missing404Image1 from "images/codes/missing404_1.jpg";
import missing404Image2 from "images/codes/missing404_2.jpg";

import Rolly1 from "images/blogs/rolly_1.jpeg";
// import Rolly2 from "images/blogs/rolly_2.jpeg";

import Consciousness1 from "images/blogs/consciousness_1.jpg";
// import Consciousness2 from "images/blogs/consciousness_2.jpg";
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
    type: IBlogs.MeetRolly,
    url: "/blog/meet-rolly",
    title: "Meet Rolly!",
    description: "This is Rolly! That's pronounced like 'roll-ie'. We were told that when we adopted him, that his name was supposed to match his brother 'Polly'.",
    tags: ["pets", "rolly"],
    author: "Edison Earnest",
    date: "12/27/2023",
    source: "N/A",
    overviewInfo: [
    ],
    blog: [

    ]
  },
  AIDemo01: {
    type: IBlogs.AIDemo01,
    url: "/blog/ai-demo-01",
    title: "AI Demo - Part 1 - Image Generation",
    description: "",
    tags: ["tech", "ai", "image generation"],
    author: "Edison Earnest",
    date: "12/27/2023",
    source: "N/A",
    overviewInfo: [
    ],
    blog: [

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
  console.log(blogsResult)
  let blog = UnknownBlog;
  Object.keys(blogsResult).forEach(key => {
    if (!!blogsResult[key]?.url  && blogsResult[key].url === url) {
      blog = blogsResult[key];
    }
  });
  return blog;
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
