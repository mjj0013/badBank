
export function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
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




  /*
  //part of bank svg icon: use to make cool animation for bank icon
M 9.23 -12.134 A 1 1 0 0 0 8.122 -12.092 L -5.638 -6.043 A 1 1 0 0 0 -4.914 -3.231 L 22.649 -3.274 A 1 1 0 0 0 23.032 -5.702 L 17.409 -8.386 M -5.425 15.597 A 1 1 0 0 0 -5.425 18.368 L 22.564 18.41 A 1 1 0 0 0 22.479 15.597 M -3.21 -0.419 L -3.167 11.977 L -0.398 11.977 L -0.398 -0.462 L -3.21 -0.419 M 3.862 -0.462 L 3.777 11.977 L 6.461 12.02 L 6.546 -0.419 L 3.947 -0.462


  */