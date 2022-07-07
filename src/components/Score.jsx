const Score = (props) => {
  return ( 
    <>
    <h3>
      Date: {props.date}
    </h3>
    <h3>
      Score: {props.score}
    </h3>
    </>
  );
}

export default Score;