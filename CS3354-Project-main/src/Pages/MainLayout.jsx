import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import Content from "../Components/Content.jsx";
import { AppProvider } from "../Data/AppProvider.jsx";

const MainLayout = () => {
  return (
    <>
      <AppProvider>
        <Header></Header>
        <Content></Content>
      </AppProvider>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
