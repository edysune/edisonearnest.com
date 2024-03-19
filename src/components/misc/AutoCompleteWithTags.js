import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

import tw from "twin.macro";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '3px',
    float: 'right',
    marginLeft: 0,
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderWidth: '1px',
    borderColor: 'rgba(180, 180, 180, .8)',
    borderRadius: '4px',
    '&:hover': {
      borderColor: 'black',
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    '& input::placeholder': {
      color: "black",
      opacity: '0.6'
    } 
  }));

  return (
    <FilterContainer>
        <AutoComplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={allPossibleBlogTags}
            getOptionLabel={(option) => option.title}
            size="small"
            renderInput={(params) => (
                <TextField {...params} label="tags" placeholder="" />
            )}
            sx={{ width: '300px' , float: 'right', marginLeft: '2rem', marginTop: '1rem'}}
        />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
    </FilterContainer>
  );
};

export default AutoCompleteWithTags;
