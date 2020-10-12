import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialLogoImgContainer,
  SocialLogoImg
} from './FooterElements'
import Logo from '../../images/brand/oweis.png'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Services</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Policies</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">YouTube</FooterLink>
              <FooterLink to="/">Reviews</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Seminals</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Links</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">LinkedIn</FooterLink>
              <FooterLink to="/">WhatsApp</FooterLink>
              <FooterLink to="/">Email</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Blog</FooterLinkTitle>
              <FooterLink to="/">Pricing</FooterLink>
              <FooterLink to="/">Services</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Benefits</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <SocialLogoImgContainer>
                <SocialLogoImg src={Logo} />
              </SocialLogoImgContainer>
            </SocialLogo>
            <WebsiteRights>Owei's Codes © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" title="Facebook" traget="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" title="Instagram" traget="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" title="YouTube" traget="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" title="Twitter" traget="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" title="LinkedIn" traget="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
