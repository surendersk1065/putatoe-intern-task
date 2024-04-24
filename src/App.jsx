import Category from "./components/Category"
import Dairy from "./components/Dairy"
import Fixed from "./components/Fixed"
import Footer from "./components/Footer"
import Fruits from "./components/Fruits"
import Grocery from "./components/Grocery"
import Header from "./components/Header"
import ImageSlider from "./components/ImageSlider"
import Products from "./components/Products"
import Sellers from "./components/Sellers"
import Service from "./components/Service"
import Smallnav from "./components/Smallnav"
import Vegetables from "./components/Vegetables"



function App() {


  return (
    <>
      <Header />
      <ImageSlider />
      <Smallnav />
      <Products />
      <Dairy />
      <Fruits />
      <Grocery />
      <Vegetables />
      <Category />
      <Sellers />
      <Service />
      <Fixed />
      <Footer />
    </>
  )
}

export default App
