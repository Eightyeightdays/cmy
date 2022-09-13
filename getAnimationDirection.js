// determine screen orientation for optimal animation direction
var direction;
if(screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary"){
    direction = "left";
  }else{
    direction = "right";
}

export {direction};