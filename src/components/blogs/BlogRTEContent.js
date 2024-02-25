import React, { useState } from "react";
import tw from "twin.macro";
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './BlogRTEContent.css';
import { fetchBlogContent } from "components/blogs/BlogSearchService.js";
import ImageResize from 'quill-image-resize-module-react';
import { saveAs } from 'file-saver';

// QUILL SETTINGS
const Font = Quill.import("formats/font");
Font.whitelist = ["Arial","times"];
Quill.register(Font, true);

Quill.register('modules/imageResize', ImageResize);

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-5 lg:py-10`;
const Divider = tw.hr`mb-6`;

const modules = {
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: [ 'Resize', 'DisplaySize' ]
    },
    toolbar: [
        [{ font: ['Arial','times','Raleway', 'interSystemUi']}],
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

// HELPER FUNCTION FOR CREATING CONTENT
function WriteFile(data, blog) {
    const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(file, blog.type + '.txt');
}

// GENERATE CONTENT
const BlogRTEContent = (blog = null) => {
    let blogContent = !!blog.blog?.blogContent ? blog.blog.blogContent : "";
    let isReadonly = !!blog.blog?.readonly ? blog.blog.readonly : "";

    const [value, setValue] = useState("");

    if (blogContent !== '') {
        // search for blog content
        fetchBlogContent(blog.blog).then(blogText => {
            setValue(blogText);
            blogContent = blogText;
        })
    }

    function printButtonEventHandler() {
        console.log(blogContent);
        WriteFile(blogContent, blog.blog);
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
                <Divider></Divider>
                {printQuillContent()}
                <ReactQuill
                    className={`${isReadonly ? 'hide-toolbar' : 'show-toolbar'}`}
                    readOnly={isReadonly}
                    modules={modules}
                    theme= {"snow"}
                    value={value}
                    id="editor"
                    onChange={(newValue, delta, source) => {
                        if (source === 'user') {
                            blogContent = newValue;
                        }
                    }}
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
