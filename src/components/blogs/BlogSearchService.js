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


export const IBlogs = {
  Unknown: 'Unknown',
  AIDemo01: 'AIDemo01',
  MeetRolly: 'MeetRolly'
};

// . His love is unconditional, his loyalty unwavering.

const blogList = {
  MeetRolly: {
    featured: true,
    hidden: false,
    readonly: false,
    type: IBlogs.MeetRolly,
    url: "/blog/meet-rolly",
    title: "Meet Rolly!",
    description: "This is Rolly! That's pronounced like 'roll-ie'. We were told that when we adopted him, that his name was supposed to match his brother 'Polly'.",
    tags: ["pets", "rolly"],
    author: "Edison Earnest",
    date: "01/01/2024",
    source: "N/A",
    overviewInfo: [],
    blogContent: MeetRollyBlogContent,
    blogs: [
      {
        type: "text",
        text: "Meet Rolly, a Labradoodle with a heart as golden as his hair. Rolly is not just any dog; he's a bundle of joy, energy, and love, wrapped in a straightend coat of gold." + 
        " Born on April 21st 2021, he's currently about 2.5 years old as of this post. He loves meeting new people and has been super friendly and fun since we first met (July of 2022). We instantly fell in love with him and his excited and curious nature." + 
        " From the moment he set his paws in our home, he's filled it with happiness and laughter."
      },
      {
        type: "right-picture",
        title: "Unconditional Love",
        pictures: ["rolly3"],
        text: "Rolly has an uncanny ability to sense emotions. He's there with a wagging tail when you're happy, and he's there with a comforting nuzzle when you're down." + 
        " His love is unconditional, and I find myself becoming more and more attatched to this cute fuzzball. " + 
        " While life may be boring with my daily remote work, at least we have each other."
      },
      {
        type: "left-picture",
        title: "Energy Unlimited",
        pictures: ["rolly2"],
        text: "Labradoodles are known for their energy, and Rolly is no exception! We go on at least 4 walks per day, mostly so we search for more kitties." + 
        " He loves his walks, but also loves his toys. That doesn't stop him from ripping his favorites into tiny pieces though!." +
        " The one things Rolly is really passionate about though, is rolling. It doesn't matter if it's snow, grass mud puddles, or dirt mounds... he just loves to roll in it!"
      },
      {
        type: "right-picture",
        title: "The Dog Park",
        pictures: ["rollysnow1", "rollysnow2"],
        text: "Rolly's favorite place is certainly the dog park. It's a place to meet friends, but more importantly.. to make enemies. While Rolly would never hurt anyone, that doesn't stop Rolly from 'vocalizing' his concerns to other dogs about personal boundaries." +
        " Some dogs just get too close and personal for Rolly's liking, but that doesn't stop him from enjoying the rest of the park!"
      },
      {
        type: "left-picture",
        title: "A New Life",
        pictures: ["rollystanding1", "rollystanding2"],
        text: "Life with Rolly has taught me lots of valuable lessons, whether it's finding joy in the simple things, to live in the moment, or to love unconditionally. He's not just a pet; he's family." +
        " In the end, Rolly, our golden Labradoodle, with his boundless energy and unconditional love, has a heart of gold. " +
        " Thanks for joining us on this blog post, we'll see you again!"
      },
      // {
      //   type: "pictures",
      //   pictures: ["rolly1", "rolly2"],
      //   text: "Paragraph 1",
      // }
    ]
  },
  AIDemo01: {
    hidden: true,
    readonly: false,
    type: IBlogs.AIDemo01,
    url: "/blog/ai-demo-01",
    title: "AI Demo - Part 1 - Image Generation",
    description: "",
    tags: ["tech", "ai", "image generation"],
    author: "Edison Earnest",
    date: "12/27/2023",
    source: "N/A",
    overviewInfo: [],
    blogContent: AIContent1,
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
