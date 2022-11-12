import { useEffect } from "react";
import { gsap } from "gsap";


function Section7({ isLoading }) {
  return (
    <>
      <div className="section7-wrapper">
        <div className="section7__box">
          <div className="section7__title">評審機制</div>
          <ul>
            <li>
              初選：
              <br />
              將由六角學院前端、UI 評審進行第一波篩選， 並於
              12/5（五）公布初選佳作名單
            </li>
            <li>
              決選：
              <br />
              由三大企業針對該企業主題進行入圍獎最後篩選， 並於
              12/23（五）公布企業得獎名單
            </li>
          </ul>
        </div>
        <div className="section7__box dot">
          <div className="section7__title">獎項</div>
          <ul>
            <li>
              <div>
                初選佳作 共六十位
                <span className="section7__red"> 數位獎狀</span>
              </div>
              <div>每週主題個人組十位、團體組十組</div>
            </li>
            <li>
              <div>
                個人企業獎 共六位
                <span className="section7__red"> NTD 3,000/位</span>
              </div>
              <div>每週主題各 2 名，設計 1 位、前端 1 位</div>
            </li>
            <li>
              <div>
                團體企業獎 共三組
                <span className="section7__red"> NTD 10,000/組</span>
              </div>
              <div>每週主題各 1 組</div>
            </li>
            <li>
              <div>以上皆提供完賽數位獎狀</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Section7;
