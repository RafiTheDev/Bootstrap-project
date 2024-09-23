import Banner from "../../Components/Banner/Banner"
import Products from "../../Components/Products/Products"
import Navigation from "../../Shared/Navbar/Navbar"

const Home = () => {
  return (
    <div>
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
    </div>
  )
}

export default Home