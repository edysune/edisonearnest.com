import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"; //eslint-disable-line
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import tw from "twin.macro";
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-5 lg:py-10 text-center items-center`;

const ImageCarousel = (
  images = []
) => {
  console.log("images", images.images)

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const Image = styled.img(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
    tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:h-1/3 sm:rounded-t-none sm:rounded-l-lg`
  ]);
  //foreachImage

  // <ImageColumn>
  // </ImageColumn>

  return (
    <SingleColumn>
      <Slider {...settings}>
        {images.images.map((image, index) => (
          <ImageColumn>
            <Image src={image}/>
          </ImageColumn>
        ))}
      </Slider>
    </SingleColumn>
  );
};

export default ImageCarousel;
