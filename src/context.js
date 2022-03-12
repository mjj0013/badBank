import "./index.css"

export const Card = (props) =>{
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{zIndex:5, maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        {/* <div className="card-img">
          <svg  xmlns="http://www.w3.org/2000/svg" >
              <linearGradient id="bg" gradientTransform="rotate(90)">
                <stop offset="5%"  stopColor="gold" />
                <stop offset="95%" stopColor="black" />
              </linearGradient>

            <rect width="100%" height="100%" fill="url(#bg)"/>
          </svg>
        </div> */}
        
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
