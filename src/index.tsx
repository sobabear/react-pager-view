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

interface ImagePagerProps {
  pages: {
    src: string,
    text: string,
  }[],
  dotDisplay: boolean,
  isInfinite: boolean
}

const ImagePager = ({
  pages,
  dotDisplay = true,
  isInfinite = false,
}: ImagePagerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(false);

  const onClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const { type } = e.target as HTMLAnchorElement;
    if (type === 'prev') {
      if (isInfinite || activeIndex !== 0) {
        setActiveIndex(activeIndex => (activeIndex === 0 ? pages.length - 1 : activeIndex - 1));
      }
    } else if (type === 'next') {
      if (isInfinite || activeIndex !== pages.length - 1) {
        setActiveIndex(activeIndex => (activeIndex === pages.length - 1 ? 0 : activeIndex + 1));
      }
    }
  }, [pages, activeIndex, setActiveIndex, isInfinite]);

  const onMouseEnter = useCallback(() => {
    setActiveButton(true);
  }, [setActiveButton]);

  const onMouseLeave = useCallback(() => {
    setActiveButton(false);
  }, [setActiveButton]);

  return (
    <>
      <Container
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {pages.map((img, idx) => (
          <Page
            key={`${img.src}_${idx}`}
            active={activeIndex === idx}
          >
            <Img src={img.src} />
            {img.text && <Text>{img.text}</Text>}
          </Page>
        ))}
        {activeButton && (
          <>
            <PrevNext type={'prev'} onClick={onClick}>
              &#10094;
            </PrevNext>
            <PrevNext type={'next'} onClick={onClick}>
              &#10095;
            </PrevNext>
          </>
        )}
      </Container>
      {dotDisplay && (
        <DotContainer>
          {pages.map((img, idx) => (
            <Dot key={`${img.src}_${idx}`} active={activeIndex === idx} />
          ))}
        </DotContainer>
      )}
    </>
  );
};

export default ImagePager;