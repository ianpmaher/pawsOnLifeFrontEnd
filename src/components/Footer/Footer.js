import styled from "styled-components";
import './Footer.css'

const FooterContainer = styled.div`
    margin: 1rem auto auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 1;
`;

const FlexList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
`
const Social = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 1rem;
    border-radius: 50%;
`

const Footer = (props) => {
    return (
        <FooterContainer>
            <footer>
                <FlexList>
                    <li>
                        <a href="https://github.com/ianpmaher/pawsOnLifeFrontEnd" target="_blank" rel="noreferrer noopener">
                            <Social
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="github logo"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ianpmaher/pawsOnLifeBackEnd" target="_blank" rel="noreferrer noopener">
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