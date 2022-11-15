function StoriesTitle (props) {
   return (
      <div className="stories-title">
         <h2>{props.title}</h2>
         <p>{props.info}</p>
      </div>
   )
}

export default StoriesTitle