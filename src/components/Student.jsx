import Score from "./Score"

const Student = (props) => { 
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <h3>{props.bio}</h3>
      {props.scores.map((score, idx) => 
        <Score 
          key={idx}
          date={score.date}
          score={score.score}
        />  
      )}
    </div>
  )
}

export default Student;