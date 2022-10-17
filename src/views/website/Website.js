import Header from '../../components/header';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import Slider from '../../components/slider';

const Website = () => {
    return (
        <div>
            <Header title={'Website'}/>
            <Slider />
            <Contact />
            <Footer />
        </div>
    )
}

export default Website;