// Radial dead zone preserves direction and gives gradual walking speed.
export function joystickAxes(dx,dy,radius,deadZone=.12){
 const length=Math.hypot(dx,dy),amount=Math.min(1,length/Math.max(1,radius));
 const strength=Math.max(0,(amount-deadZone)/(1-deadZone));
 return {right:length?dx/length*strength:0,forward:length?-dy/length*strength:0,
  x:length?dx/length*amount*radius:0,y:length?dy/length*amount*radius:0};
}
export function createJoystick(pad,thumb){
 let pointer=null,center=null;const state={right:0,forward:0};
 function reset(){const previous=pointer;pointer=null;state.right=state.forward=0;thumb.style.transform='translate(0px, 0px)';pad.dataset.active='false';if(previous!==null&&pad.hasPointerCapture(previous))pad.releasePointerCapture(previous);}
 function move(e){if(e.pointerId!==pointer)return;e.preventDefault();const axes=joystickAxes(e.clientX-center.x,e.clientY-center.y,center.radius);state.right=axes.right;state.forward=axes.forward;thumb.style.transform=`translate(${axes.x}px, ${axes.y}px)`;}
 pad.addEventListener('pointerdown',e=>{if(pointer!==null||e.button>0)return;e.preventDefault();const box=pad.getBoundingClientRect();center={x:box.left+box.width/2,y:box.top+box.height/2,radius:box.width*.32};pointer=e.pointerId;pad.setPointerCapture(pointer);pad.dataset.active='true';move(e);});
 pad.addEventListener('pointermove',move);
 for(const type of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(type,e=>{if(e.pointerId===pointer)reset();});
 return {state,reset};
}
