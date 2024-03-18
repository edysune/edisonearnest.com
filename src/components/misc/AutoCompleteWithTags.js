import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';

import tw from "twin.macro";

// const FilterContainer = tw.div`flex w-auto mx-8 float-right text-gray-500 text-4xl sm:text-5xl font-black tracking-wide text-center mt-10`;
const FilterContainer = tw.div`relative w-full mt-12`;

// import './LoadingSpinner.css';

const AutoCompleteWithTags = () => {
  const [isLoading] = useState(true);

  const allPossibleBlogTags = [
    { title: 'rolly'},
    { title: 'pets'},
    { title: 'ai'},
    { title: 'tech'},
    { title: 'ChatGPT'},
    { title: 'DALLE-3'},
  ]

  return (
    <FilterContainer>
        <AutoComplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={allPossibleBlogTags}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} label="tags" placeholder="" />
            )}
            sx={{ width: '300px' , float: 'right'}}
        />
    </FilterContainer>
  );
};

export default AutoCompleteWithTags;
