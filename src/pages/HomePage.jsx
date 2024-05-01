import Categories from '../component/Categories';
import Navbar from '../component/Navbar';
import Slide from "../component/Slide";
import Listings from '../component/Listings';
import Footer from '../component/Footer';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  )
}

export default HomePage;
