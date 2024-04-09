import React, { useState, useCallback } from 'react';
import {
  Container,
  Page,
  Img,
  Text,
  PrevNext,
  DotContainer,
  Dot
} from './styles'

interface ImagePaginationProps {
  pages: {
    src: string,
    text: string,
  }[],
  dotDisplay: boolean,
  isInfinite: boolean
}

const ImagePagination = ({
  pages,
  dotDisplay = true,
  isInfinite = false,
}: ImagePaginationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(false);

  const onClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const { type } = e.target as HTMLAnchorElement;
    if (type === 'prev' && activeIndex !== 0) {
      setActiveIndex(activeIndex => activeIndex - 1);
    } else if (type === 'next' && activeIndex !== pages.length - 1) {
      setActiveIndex(activeIndex => activeIndex + 1);
    }
  }, [pages, activeIndex, setActiveIndex]);
  const onMouseEnter = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setActiveButton(true);
  }, [activeButton, setActiveButton]);
  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setActiveButton(false);
  }, [activeButton, setActiveButton]);

  return (
    <>
      <Container
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {
          pages.map((img, idx) => (
            <Page
              key={`${img.src}_${idx}`}
              active={activeIndex === idx}
            >
              <Img src={img.src} />
              {img.text && <Text>{img.text}</Text>}
            </Page>
          ))
        }
        {
          activeButton && <>
            <PrevNext type={'prev'} onClick={onClick}>&#10094;</PrevNext>
            <PrevNext type={'next'} onClick={onClick}>&#10095;</PrevNext>
          </>
        }
      </Container>
      {
        dotDisplay && <DotContainer>
          {pages.map((img, idx) => (
            <Dot key={`${img.src}_${idx}`} active={activeIndex === idx} />
          ))}
        </DotContainer>
      }
    </>
  );
};

export default ImagePagination;