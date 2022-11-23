function LearnItem (props) {
   return (
      <div className="learn-item">
         <div className="item-icon">
            <img src={props.src} alt={props.title} />
         </div>
         <div className="item-title">
            <h3>{props.title}</h3>
         </div>
         <div className="item-description">
            <p>{props.description}</p>
         </div>
         <a href="#" aria-label="Learn more">Learn more</a>
      </div>
   )
}

export default LearnItem