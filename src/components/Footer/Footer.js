import styled from "styled-components";
import './Footer.css'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FlexList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
`
const Social = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 2rem;
`

const Footer = (props) => {
    return (
        <FooterContainer>
            <footer>
                <FlexList>
                    <li>
                        <a href="https://github.com/ianpmaher/pawsOnLifeFrontEnd">
                            <Social
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="github logo"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ianpmaher/pawsOnLifeBackEnd">
                            <Social
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="github logo"
                            />
                        </a>
                    </li>
                </FlexList>
            </footer>
        </FooterContainer>
    );
};

export default Footer;