import React, { useState } from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import tw from "twin.macro";
import { searchForAllBlogImages, getRandomBlogImage } from "components/blogs/BlogSearchService.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import styled from "styled-components"; //eslint-disable-line
import ImageCarousel from 'components/blogs/ImageCarousel.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogRTEContent.css';
import { fetchBlogContent } from "components/blogs/BlogSearchService.js";

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-5 lg:py-10`;

const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const BlogRTEContent = (blog = null) => {

    // console.log(blog);
    // console.log(blog.blog?.blogContent);
    // console.log(blog.blog?.readonly);

    let blogContent = !!blog.blog?.blogContent ? blog.blog.blogContent : "";
    let isReadonly = !!blog.blog?.readonly ? blog.blog.readonly : "";

    const [value, setValue] = useState("");

    if (blogContent !== '') {
        fetchBlogContent(blog.blog).then(blogText => {
            setValue(blogText);
        })
    }

    function printButtonEventHandler() {
        console.log(value);
        alert(value);
    }

    function printQuillContent() {
        if (!isReadonly)
        {
            return <button onClick={printButtonEventHandler}>Press Me!</button>;
        }
        return;
    }

    function GenerateBlog() {
        if (value === "") {
            return (<SingleColumn>
                <p>Still loading...</p>
            </SingleColumn>);
        } else {
            return (<SingleColumn>
                {printQuillContent()}
                <ReactQuill
                    className={`${isReadonly ? 'hide-toolbar' : 'show-toolbar'}`}
                    readOnly={isReadonly}
                    modules={modules}
                    theme= {"snow"}
                    value={value}
                    onChange={setValue}
                    // placeholder="Content goes here..."
                />
            </SingleColumn>);
        }
    }

    if (!blog) {
        return;
    } else {
        return GenerateBlog();
    }
};

export default BlogRTEContent;
