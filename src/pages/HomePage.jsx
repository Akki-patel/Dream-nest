import Categories from '../component/Categories';
import Navbar from '../component/Navbar';
import Slide from "../component/Slide";
import Listings from '../component/Listings';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
    </>
  )
}

export default HomePage;
