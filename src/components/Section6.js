import { useEffect } from "react";
import { gsap } from "gsap";
import flag1 from "@/assets/img/section5_flag1.png";
import flag2 from "@/assets/img/section5_flag2.png";
import flag3 from "@/assets/img/section5_flag3.png";
import flag4 from "@/assets/img/section5_flag4.png";

function Section6({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section6-wrapper", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 50%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    tl.to(".section6__text", {
      text: "區區修煉已經無法滿足了嗎？ 還有比賽等著你！",
      duration: 15,
    });
    
  }, [isLoading]);
  return (
    <>
      <div className="section6-wrapper">
        <div className="section6__text">
          
        </div>
      </div>
    </>
  );
}
export default Section6;
