import Button from "@/components/Button.js";

function header(){
  return (
    <>
      <div className="header">
        <div className="header_left">
          <a className="header_logo"></a>
          <a>關卡資訊</a>
          <a>攻略資源</a>
          <a>求職專區</a>
        </div>
        <div className="header_right">
          <Button>註冊報名</Button>
          <Button>登入</Button>
        </div>
      </div>
    </>
  );
}
export default header;