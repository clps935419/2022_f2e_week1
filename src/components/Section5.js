import { useEffect } from "react";
import { gsap } from "gsap";
import flag1 from "@/assets/img/section5_flag1.png";
import flag2 from "@/assets/img/section5_flag2.png";
import flag3 from "@/assets/img/section5_flag3.png";
import flag4 from "@/assets/img/section5_flag4.png";

function Section5({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5-wrapper", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        // start: "top 10%", // 決定動畫開始點的位置
        // end: "top 1%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        pin: true,
      },
    });
    tl.to("#section__flag1", {
      opacity: 1,
      duration: 5,
    })
      .to(".section5__layer.one", {
        left: "40%",
        translateX: "-40%",
        duration: 15,
      })

      .to(".section5__layer.two", {
        left: "40%",
        translateX: "-40%",
        duration: 15,
      })
      .to(
        ".section5__layer.one",
        {
          opacity: 0,
          duration: 15,
        },
        "<"
      )
      .to(
        "#section__flag2",
        {
          opacity: 1,
          duration: 5,
        },
        ">"
      )
      .to(".section5__layer.three", {
        left: "40%",
        translateX: "-40%",
        duration: 15,
      })
      .to(
        "#section__flag2",
        {
          opacity: 0,
          duration: 5,
        },
        "<"
      )
      .to(
        ".section5__layer.two",
        {
          opacity: 0,
          duration: 15,
        },
        "<"
      )
      .to(
        "#section__flag3",
        {
          opacity: 0,
          duration: 5,
        },
        "<"
      )
      .to(
        "#section__flag4",
        {
          opacity: 1,
          duration: 5,
        },
        "<"
      )
      .to(".section5__layer.four", {
        left: "40%",
        translateX: "-40%",
        duration: 15,
      })
      .to(
        ".section5__layer.three",
        {
          opacity: 0,
          duration: 15,
        },
        "<"
      );
  }, [isLoading]);
  return (
    <>
      <div className="section5-wrapper">
        <div className="section5__flag">
          <img src={flag4} id="section__flag4" alt="" />
          <img src={flag3} id="section__flag3" alt="" />
          <img src={flag2} id="section__flag2" alt="" />
          <img src={flag1} id="section__flag1" alt="" />
        </div>
        <div className="section5__btn">點我註冊報名!</div>
        <div className="section5__layer one">
          <div>SIGN UP!</div>
          <div>開放報名：</div>
          <div>
            10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59 截止前可修改報名組別。
          </div>
        </div>
        <div className="section5__layer two">
          <div>START!</div>
          <div>各組別開賽：</div>
          <div> UI組、團體組開賽 10/31、前端組開賽 11/7</div>
        </div>
        <div className="section5__layer three">
          <div>UPLOAD!</div>
          <div>各組別開賽：</div>
          <div> UI組、團體組開賽 10/31、前端組開賽 11/7</div>
        </div>
        <div className="section5__layer four">
          <div>STREAM!</div>
          <div>各組別開賽：</div>
          <div> UI組、團體組開賽 10/31、前端組開賽 11/7</div>
        </div>
      </div>
    </>
  );
}
export default Section5;
