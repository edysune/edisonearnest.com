import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { getAllBlogs, searchBlogs } from "components/blogs/BlogSearchService.js";
import { getAllRecipes, searchRecipes } from "components/recipes/RecipeSearchService.js";
import SharedBlogCardRenderer from "pages/SharedBlogCardRenderer.js"
import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { styled as styledmui } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// const FilterContainer = tw.div`flex w-auto mx-8 float-right text-gray-500 text-4xl sm:text-5xl font-black tracking-wide text-center mt-10`;
const FilterContainer = tw.div`relative w-full mt-12`;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 whitespace-nowrap`;

let headingText = '';
let posts = [];

const Search = styledmui('div')(({ theme }) => ({
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

const SearchIconWrapper = styledmui('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styledmui(InputBase)(({ theme }) => ({
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

function getTags(items) {
  const tags = [];
  const tagsDict = {};
  if (items?.length && items.length > 0) {
    items.forEach(item => {
      if (item?.tags && item.tags.length > 0) {
        item.tags.forEach(tag => {
          if (!tagsDict[tag]) {
            tagsDict[tag] = true;
            tags.push({title: tag});
          }
        });
      }
    });
  }
  return tagSort(tags);
}

function tagSort(tags) {
  if (tags != [])
  {
    tags = tags.map((a) => a.title);
    tags = [...tags].sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
    tags = tags.map((a) => {
      return {title: a}
    });
  }
  return tags;
}

export default ({ //eslint-disable-line
  type = '',
}) => {
  const [allTags, setAllTags] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const [filterPhrases, setFilterPhrase] = useState('');

  const onTagChange = (newTags) => {
    newTags = tagSort(newTags);
    if (!newTags || newTags == [])
    {
      if (filterTags != []) {
        setFilterTags([]);
      }
    } else {
      if (JSON.stringify(newTags) !== JSON.stringify(filterTags)) {
        setFilterTags(newTags)
      }
    }
  }

  const onPhraseChange = (newText) => {
    if (newText !== filterPhrases) {
      setFilterPhrase(newText)
    }
  }

  if (type === 'blog') {
    headingText = "Blog Posts";
    posts = searchBlogs(filterPhrases, filterTags);
    if (JSON.stringify(getTags(posts)) !== JSON.stringify(allTags)) {
      setAllTags(getTags(posts))
    }
  } else if (type === 'recipes') {
    // todo: fix random issue with random pictures being random - probably just create a random number for the first time and then use that to generate the pictures?
    headingText = "My Recipes";
    posts = searchRecipes(filterPhrases, filterTags);
    if (JSON.stringify(getTags(posts)) !== JSON.stringify(allTags)) {
      setAllTags(getTags(posts))
    }
  }

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
            <FilterContainer>
              <AutoComplete
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={allTags}
                  getOptionLabel={(option) => option.title}
                  size="small"
                  onChange={(event, newValue) => {
                    onTagChange(newValue);
                  }}
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
                  onChange={(event) => {
                    onPhraseChange(event.target.value);
                  }}
                />
              </Search>
            </FilterContainer>
          </HeadingRow>
          <SharedBlogCardRenderer posts={posts}></SharedBlogCardRenderer>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
