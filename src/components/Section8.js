import { useEffect } from "react";
import { gsap } from "gsap";

function Section8({ isLoading }) {
  return (
    <>
      <div className="section8-wrapper">
        <div className="section8__header">常見問答</div>
        <div className="section8__tab-wrapper">
          <ul className="section8__tab-nav">
            <li className="section8__tab-nav-item active">一般常見問答</li>
            <li className="section8__tab-nav-item">UI 設計師</li>
            <li className="section8__tab-nav-item">常見問題</li>
            <li className="section8__tab-nav-item">團體組</li>
          </ul>
          <ul className="section8__tab-content">
            <li>
              <div>Q：如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？</div>
              <div>
                A：可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
              </div>
            </li>
            <li>
              <div>
                Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品
              </div>
              <div>
                A：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
              </div>
            </li>
            <li>
              <div>
                Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？
              </div>
              <div>
                A：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
              </div>
            </li>
            <li>
              <div>Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？</div>
              <div>A：可以，有投稿表示你還會持續努力在這次活動上。</div>
            </li>
          </ul>
        </div>
        <div className="section8__btn">立即註冊報名!</div>
      </div>
    </>
  );
}
export default Section8;
