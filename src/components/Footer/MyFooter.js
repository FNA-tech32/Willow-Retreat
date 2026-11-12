import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import './MyFooter.css'

const MyFooter = () => {
    return (
        <div className='myFooter'>
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <Heading>Willow Retreat</Heading>
                            <FooterLink href="/about">Our Story</FooterLink>
                            <FooterLink href="/rooms">Luxury Suites</FooterLink>
                            <FooterLink href="/about">Spa & Wellness</FooterLink>
                            <FooterLink href="/about">Dining & Lounge</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="/rooms">Room Booking</FooterLink>
                            <FooterLink href="/about">24/7 Concierge</FooterLink>
                            <FooterLink href="/about">Private Events</FooterLink>
                            <FooterLink href="/about">Resort Activities</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="tel:+18005550199">Tel: +1 (800) 555-0199</FooterLink>
                            <FooterLink href="tel:+19705550142">Alt: +1 (970) 555-0142</FooterLink>
                            <FooterLink href="mailto:info@willowretreat.com">info@willowretreat.com</FooterLink>
                            <FooterLink href="mailto:reservations@willowretreat.com">reservations@willowretreat.com</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#" aria-label="Facebook">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#" aria-label="Instagram">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#" aria-label="Twitter">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#" aria-label="Youtube">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </div>
    )
}

export default MyFooter
