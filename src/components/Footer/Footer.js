import styled from "styled-components";
import ModalFun from "../ModalFun/ModalFun";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const FooterContainer = styled.div`
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        margin: 5rem auto auto auto;
    }
`;

const FlexList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;
const Social = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 1rem;
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

const Footer = (props) => {
    const aboutContent = (
        // <div style={{display: "flex", flexFlow: "column wrap", justifyContent: "center", alignItems: "center", maxWidth: "80%", margin: "0 auto"}}>
        <FooterContainer style={{margin: "0 auto", flexFlow: "row wrap", textAlign: "center", maxWidth: "80%"}}>
            <p>
                PawsOn.Life is a collaborative effort to support healthy lifestyles, connecting our love of the great
                outdoors with our passion for web development.{" "}
            </p>
            <p>
                We hope to foster a community of like-minded pet lovers. Register your account now to find, rate, and
                share your favorite pet-friendly hiking trails.
            </p>
            <Card sx={{ maxWidth: 230, borderRadius: 5 }}>
                <CardMedia
                    sx={{ height: { xs: 300, md: 400 } }}
                    image="/doggo-hiking-phone.png"
                    title="Dog Hiking"
                    component="img"
                />
                <CardContent>
                    <p>Connecting humans and their animal companions with the natural world</p>
                </CardContent>
            </Card>
        </FooterContainer>
    );
    return (
        <FooterContainer>
            <FlexList>
                <li style={{ textAlign: "center", background: "transparent" }}>
                    <ModalFun id="about-us" title="About Us" content={aboutContent} />
                </li>
                <li style={{ background: "transparent" }}>
                    <a href="https://github.com/ianpmaher/pawsOnLifeFrontEnd" target="_blank" rel="noreferrer noopener">
                        <Social
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="github logo"
                        />
                    </a>
                </li>
                <li style={{ background: "transparent" }}>
                    <a href="https://github.com/ianpmaher/pawsOnLifeBackEnd" target="_blank" rel="noreferrer noopener">
                        <Social
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="github logo"
                        />
                    </a>
                </li>
            </FlexList>
        </FooterContainer>
    );
};

export default Footer;
