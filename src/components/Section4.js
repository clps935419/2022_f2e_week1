import { useEffect } from "react";
import { gsap } from "gsap";

function Section4({ isLoading }) {
    useEffect(() => {
      if (isLoading) {
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section4-wrapper", // 決定scrolltrigger要以哪一個元素作為觸發基準點
          markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
          // start: "top 10%", // 決定動畫開始點的位置
          // end: "top 1%", // 決定動畫結束點的位置
          scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
          pin: true,
        },
      });
      tl.to(".section4__layer.one", {
        left: "-100%",
        duration: 30,
      }).to(".section4__layer.two", {
        left: "-100%",
        duration: 30,
      });
    }, [isLoading]);
  return (
    <>
      <div className="section4-wrapper">
        <div className="section4__tank"></div>
        <div className="section4__flag"></div>
        <a className="section4__btn">查看關卡細節</a>
        <hr className="section4__dot"></hr>

        <div className="section4__layer one">
          <div className="section4__word-box">
            <div>WEEK 1</div>
            <div>The F2E 活動網站設計</div>
            <div>視差滾動</div>
            <div>#版塊設計</div>
          </div>
        </div>
        <div className="section4__layer two">
          <div className="section4__word-box">
            <div>WEEK 2</div>
            <div>今晚，我想來點點簽</div>
            <div>canvas</div>
            <div>#凱鈿行動科技</div>
          </div>
        </div>
        <div className="section4__layer three">
          <div className="section4__word-box">
            <div>WEEK 3</div>
            <div>Scrum 新手村</div>g<div>JS draggable</div>
            <div>#鈦坦科技</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section4;
