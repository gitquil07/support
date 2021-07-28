import HomeBg from "assets/images/home-bg.svg";
import styled from "styled-components";

const Home = () => {

    return (
        <CenteredImg src={HomeBg} alt="programmer" />
    );

}

const CenteredImg = styled.img`
    display: block;
    margin: 0 auto;
`;

export default Home;