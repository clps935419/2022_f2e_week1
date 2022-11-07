import { useEffect } from "react";
import { gsap } from "gsap";

function Section3({isLoading}){
  
  useEffect(() => {
    if(isLoading){
      return;
    }
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3_layer3-bg", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 80%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    },
  });  
  tl.to(".section3-wrapper", {
    backgroundColor: "#CC4F36",
    duration: 5,
  })
    .to(".section3_layer1-bg", {
      top: "25%",
      duration: 5,
    })
    .to(
      ".section3_layer3-bg",
      {
        top: "30%",
        duration: 20,
      },
      "<"
    )
    .to(
      ".section3_layer4-bg",
      {
        top: "33%",
        duration: 20,
      },
      "<"
    )
    .to(".section3-wrapper", {
      backgroundColor: "#FFB3A4",
      duration: 5,
    })
    .to(".section3_layer2-bg", {
      top: "33%",
      duration: 5,
    })
    .to(".section3_layer1-bg", {
      top: "25%",
      duration: 5,
    })
    .to(
      ".section3_layer1-bg > div:first-child",
      {
        color: "white",
        borderColor: "white",
        duration: 5,
      },
      "<"
    )
    .to(
      ".section3_layer1-bg > div:nth-child(2)",
      {
        opacity: 1,
        duration: 5,
      },
      "<"
    )
    .to(
      ".section3_layer3-bg",
      {
        top: "85%",
        translateY: "-85%",
        duration: 20,
      },
      "<"
    )
    .to(
      ".section3_layer4-bg",
      {
        top: "100%",
        translateY: "-100%",
        duration: 20,
      },
      "<"
    );

  }, [isLoading]);
  return (
    <>
      <div className="section3-wrapper">
        <div className="section3_layer1-bg">
          <div>互動式網頁設計</div>
          <div>
            UI、前端接力合作，一同產出完整作品。
          </div>
        </div>
        <div className="section3_layer2-bg"></div>
        <div className="section3_layer3-bg"></div>
        <div className="section3_layer4-bg"></div>
        <div className="section3_layer5-bg"></div>
      </div>
    </>
  );
}
export default Section3;