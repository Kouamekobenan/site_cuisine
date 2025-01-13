import Banniere from "./components/Banniere";
import Blog from "./components/Blog";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Informaton from "./components/Informaton";
import Videos from "./components/Videos";


export default function Home() {
  return (
      <div className="container md:border-8  p-4">
        <Banniere/>
        <Videos/>
        <Blog/>
        <Informaton/>
        <Customers/>
        <Footer/>
      </div>
    
    
    
  );
}
