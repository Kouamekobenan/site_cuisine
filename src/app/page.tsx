import Banniere from "./components/Banniere";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Informaton from "./components/Informaton";
import Videos from "./components/Videos";


export default function Home() {
  return (
      <div className="container border-8 border-green-600 p-4">
        <Header/>
        <Banniere/>
        <Videos/>
        <Blog/>
        <Informaton/>
      </div>
    
    
    
  );
}
