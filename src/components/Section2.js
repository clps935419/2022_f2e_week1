import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import tankBoxBg1 from "../assets/img/section2_tank_box_bg_1.png";
import tankBoxBg2 from "../assets/img/section2_tank_box_bg_2.png";
import tankBoxBg3 from "../assets/img/section2_tank_box_bg_3.png";
import tankBoxBg4 from "../assets/img/section2_tank_box_bg_4.png";

gsap.registerPlugin(TextPlugin);
function Section2(props) {
  const { isLoading } = props;
  useEffect(() => {
    if (isLoading) {
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-tank_top-msg", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 100%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-tank_box", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 100%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
      },
      repeat: -1,
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-tank_left-msg", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 100%", // 決定動畫開始點的位置
        end: "top 50%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-soldier", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 80%", // 決定動畫開始點的位置
        end: "top 20%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-tree",
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 80%", // 決定動畫開始點的位置
        end: "top 20%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });

    // 撰寫動畫屬性的感覺其實類似於在寫一般CSS

    tl.to(".card-tank_top-msg", {
      text: "I’m cool !",
      duration: 5,
    });
    tl3.to(".card-tank_left-msg", {
      duration: 10,
      top: "50%",
      translateY: "50%",
    });
    tl2
      .to("#card-tank_box-bg1", {
        opacity: 0,
        duration: 1,
      })
      .to("#card-tank_box-bg2", {
        opacity: 0,
        duration: 1,
      })
      .to("#card-tank_box-bg3", {
        opacity: 0,
        duration: 1,
      })
      .to("#card-tank_box-bg3", {
        opacity: 1,
        duration: 1,
      })
      .to("#card-tank_box-bg2", {
        opacity: 1,
        duration: 1,
      })
      .to("#card-tank_box-bg1", {
        opacity: 1,
        duration: 1,
      });

    tl4
      .to(".card-soldier_soldier", {
        // translateY: "-50%",
        // translateX:"-60%",
        top: "0",
        duration: 10,
      })
      .to(".card-soldier_top-msg", {
        opacity: 1,
        duration: 10,
      })
      .to(".card-soldier_top-msg", {
        width: "40%",
        height: "40%",
        left: "-10%",
        top: "-5%",
        duration: 5,
      })
      .to(
        ".card-soldier",
        {
          overflow: "visible",
        },
        "<"
      )
      .to(".card-soldier_top-msg", {
        text: "!@#$%...",
        duration: 5,
      })
      .to(".card-soldier_left-msg", {
        duration: 15,
        top: "50%",
        translateY: "50%",
      });

      tl5
        .to(".card-tree_tree", {
          duration: 10,
          top: "-10%",
        })
        .to(
          ".card-tree",
          {
            duration: 1,
            overflow: "visible",
          },
          "<"
        )
        .to(".card-tree_soldier", {
          duration: 20,
          top: "70%",
        })
        .to(".card-tree_right-msg", {
          duration: 10,
          top: "55%",
          translateY: "55%",
        });
  }, [isLoading]);

  return (
    <>
      <div className="section2-wrapper">
        <div className="card-wrapper card-tank">
          <div className="card-tank_box">
            <img src={tankBoxBg4} id="card-tank_box-bg4" alt="tank_bg4" />
            <img src={tankBoxBg3} id="card-tank_box-bg3" alt="tank_bg3" />
            <img src={tankBoxBg2} id="card-tank_box-bg2" alt="tank_bg2" />
            <img src={tankBoxBg1} id="card-tank_box-bg1" alt="tank_bg1" />
            <div className="card-tank_box-tank"></div>
          </div>
          <div className="card-tank_top-msg"></div>
          <div className="card-tank_left-msg">羨慕別人的酷酷網頁動畫...</div>
        </div>
        <div className="card-wrapper card-soldier">
          <div className="card-soldier_soldier"></div>
          <div className="card-soldier_top-msg"></div>
          <div className="card-soldier_left-msg">滿足不了同事的許願...</div>
        </div>
        <div className="card-wrapper card-tree">
          <div className="card-tree_tree"></div>
          <div className="card-tree_soldier"></div>
          <div className="card-tree_right-msg">動畫技能樹太雜無從下手...</div>
        </div>
      </div>
    </>
  );
}
export default Section2;
