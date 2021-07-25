import { NavBar } from "components/General/NavBar";
import { Main } from "components/General/Main";
import { SideBar } from "components/General/SideBar";

const Home = () => {

    return (
        <>
            <NavBar />
            <Main>
                <SideBar />
            </Main>
        </>
    );

}

export default Home;