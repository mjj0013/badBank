import "./index.css"

export const Card = (props) =>{
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      const border = " border-dark"
      return 'card mb-3 ' + bg + txt+border;
    }
  
    return (
      <div className={classes()} style={{zIndex:5, maxWidth: props.maxWidth? props.maxWidth:"20rem"}}>
        <div className="card-header">{props.header}</div>
     
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
