import Header from '../../components/header';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import Products from '../../components/products';
import Landing from '../../components/landing';

const Website = () => {
    return (
        <div>
            <Header title={'Main Page'}/>
            <Landing />
            <Products />
            <Contact />
            <Footer />
        </div>
    )
}

export default Website;