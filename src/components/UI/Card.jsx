const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded-xl ${props.addClass}`}>
      {props.children}
    </div>
  );
};

export default Card;
