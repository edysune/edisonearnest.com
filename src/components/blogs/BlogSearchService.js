import missing404Image1 from "images/codes/missing404_1.jpg";
import missing404Image2 from "images/codes/missing404_2.jpg";

import Rolly1 from "images/blogs/rolly_01.jpeg";
import Rolly2 from "images/blogs/rolly_02.jpeg";
import Rolly3 from "images/blogs/rolly_03.jpg";
import Rolly4 from "images/blogs/rolly_04.jpg";
import Rolly5 from "images/blogs/rolly_05.jpg";
import RollyCats1 from "images/blogs/rolly_cat_01.jpg";
import RollySnow1 from "images/blogs/rolly_snow_01.jpg";
import RollySnow2 from "images/blogs/rolly_snow_02.jpg";
import RollyStanding1 from "images/blogs/rolly_standing_01.jpg";
import RollyStanding2 from "images/blogs/rolly_standing_02.jpg";


import Consciousness1 from "images/blogs/consciousness_1.jpg";
import Consciousness2 from "images/blogs/consciousness_2.jpg";
// import Consciousness3 from "images/blogs/consciousness_3.jpg";
// import Consciousness4 from "images/blogs/consciousness_4.jpg";

import MeetRollyBlogContent from "components/blogs/blogPages/meet-rolly.txt";
import AIContent1 from "components/blogs/blogPages/ai-demo-1.txt";

export const isReadonly = true;

export const IBlogs = {
  Unknown: 'Unknown',
  AIDemo01: 'AIDemo01',
  MeetRolly: 'MeetRolly'
};

const blogList = {
  MeetRolly: {
    featured: true,
    hidden: false,
    type: IBlogs.MeetRolly,
    url: "/blog/meet-rolly",
    title: "Meet Rolly!",
    description: "This is Rolly! That's pronounced like 'roll-ie'. We were told that when we adopted him, that his name was supposed to match his brother 'Polly'.",
    tags: ["pets", "rolly"],
    author: "Edison Earnest",
    date: "02/21/2024",
    source: "N/A",
    overviewInfo: [],
    blogContent: MeetRollyBlogContent,
  },
  AIDemo01: {
    hidden: true,
    type: IBlogs.AIDemo01,
    url: "/blog/ai-demo-01",
    title: "AI Demo - Part 1 - Image Generation with DALLE-3",
    description: "This is the first entry in my tech blog series that goes over AI software. This entry covers Microsoft Copilot and DALLE-3 image generation, and how to create your own images.",
    tags: ["tech", "ai", "DALLE-3", "ChatGPT"],
    author: "Edison Earnest",
    date: "02/27/2024",
    source: "N/A",
    overviewInfo: [],
    blogContent: AIContent1,
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

export function fetchBlogContent(blog) {
  // temporary - just grabs the related html file as long as it's declared above in the blogPages section
  console.log(`FETCHING ${blog['blogContent']}`);
  return fetch(blog['blogContent'])
    .then(r => r.text());
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
    case "rolly3":
      return Rolly3;
    case "rolly4":
      return Rolly4;
    case "rolly5":
      return Rolly5;
    case "rollycat1":
      return RollyCats1;
    case "rollysnow1":
      return RollySnow1;
    case "rollysnow2":
      return RollySnow2;
    case "rollystanding1":
      return RollyStanding1;
    case "rollystanding2":
      return RollyStanding2;
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
