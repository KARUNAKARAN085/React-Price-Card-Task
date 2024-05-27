import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="text-center">{props.data.top}</p>
      <h1 className="header">${props.data.price}/months</h1>
      <hr />
      {props.data.features.map((feature, index) => {
        if (
          (props.data.top === "FREE" && index < 4) ||
          (props.data.top === "PLUS" && index < 7) ||
          props.data.top === "PRO"
        ) {
          return (
            <p key={index}>
              <p>✔ {`${feature}`}</p>
            </p>
          );
        } else {
          return (
            <p key={index}>
              <p className="text-secondary">✘ {`${feature}`}</p>
            </p>
          );
        }
      })}
      <button className="btn btn-primary text-white">BUTTON</button>
    </div>
  );
};

export default Card;
