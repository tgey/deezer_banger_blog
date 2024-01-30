import NextLink from 'next/link';
import { LinkedinIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Assistance',
    items: [
      { title: 'Centre d\'aide', href: '/contact' },
      // { title: 'FAQ', href: '/faq' },
      { title: 'Termes & Conditions ', href: '/terms-of-service'},
      { title: 'Politique de confidentialité', href: '/privacy-policy' },
      { title: 'Gestion des cookies', href: '/cookies-policy' },
    ],
  },
  {
    title: 'A propos',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },

    ],
  },
  // {
  //   title: 'Entreprise',
  //   items: [
  //     // { title: 'Notre Equipe', href: '/team' },
  //     { title: 'Qui Sommes-nous ?', href: '/company' },
  //     // { title: 'Offres d\'emploi', href: '/jobs' },
  //     // { title: 'Partenaires', href: '/partners' },
  //   ],
  // },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            {/* <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink> */}

            <NextLink href="https://www.linkedin.com/in/thomas-g-7895b1133/" legacyBehavior passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2023 Thomas Gey</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref legacyBehavior>
        {title}
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondBackground));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
