import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  },[]);

  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <Section1 isLoading={isLoading} />
      <Section2 isLoading={isLoading} />
      <Section3 isLoading={isLoading} />
      <div style={{height:"500px"}}></div>
    </div>
  );
}

export default App;
