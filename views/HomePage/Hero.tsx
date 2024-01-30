import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import Image from "next/legacy/image"

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Plus que de la musique, des émotions ! </CustomOverTitle>
        <Heading>Deezer Banger</Heading>
        <Description>        
          Bienvenue sur Deezer Banger, le site qui vous permet de découvrir les meilleurs sons du moment.
        </Description>
        <CustomButtonGroup>
          
          <NextLink href="blog" passHref legacyBehavior>
            <TransparentButton transparent>
              Découvrir notre blog <span>&rarr;</span>
            </TransparentButton>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <CustomImage src="/illustrations/hero.jpg" alt="hero" width={800} height={800} />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 3.5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%; /* Set the width to 50% of the hero section */

  // svg {
  //   max-width: 45rem;
  // }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    width: 100%; /* Adjust the width to 100% on smaller screens */

    // svg {
    //   max-width: 80%;
    // }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const CustomImage = styled(Image)`
  object-fit: contain;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const OutlinedButton = styled(Button)`
border: 2px solid rgb(var(--secondBackground));
border-radius: 0.75rem;
box-shadow: 4px 4px 0px 0px rgb(var(--secondBackground));
color: rgb(var(--secondBackground));
&:hover {
  transform: translateX(3px) translateY(3px);
  box-shadow: none;
}
`;


const TransparentButton = styled(Button)`
border: 2px solid rgb(var(--secondBackground));
border-radius: 0.75rem;
// box-shadow: 4px 4px 0px 0px rgb(var(--secondBackground));

&:hover {
  transform: translateX(3px) translateY(3px);
  box-shadow: none;
}
`;