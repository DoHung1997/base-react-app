import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    );
}

export default DefaultLayout;
