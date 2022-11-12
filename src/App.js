import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";

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
      <Section4 isLoading={isLoading} />
      <Section5 isLoading={isLoading} />
      <Section6 isLoading={isLoading} />
      <Section7 isLoading={isLoading} />
      <Section8 isLoading={isLoading} />
      <Section9 isLoading={isLoading} />
    </div>
  );
}

export default App;
