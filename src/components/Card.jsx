import Avatar from "./Avatar";
import Detail from "./Detail";

function Card({ name, img, tel, email }) {
  return (
    <>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <Avatar img={img} />
        </div>
        <div className="bottom">
          <Detail detailInfo={tel} />
          <Detail detailInfo={email} />
        </div>
      </div>
    </>
  );
}

export default Card;
