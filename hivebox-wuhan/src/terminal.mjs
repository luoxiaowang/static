export function createTerminal(onClose,onSurprise) {
 const dialog=document.querySelector('#terminal'),home=document.querySelector('#terminal-home'),surprise=document.querySelector('#terminal-surprise');
 const canvas=document.querySelector('#confetti'),context=canvas.getContext('2d');let confetti=[],clock=0,nextBurst=0,isCelebrating=false;
 function resize() {const rect=canvas.getBoundingClientRect();canvas.width=Math.max(1,Math.round(rect.width*2));canvas.height=Math.max(1,Math.round(rect.height*2));}
 function open() {home.hidden=false;surprise.hidden=true;isCelebrating=false;dialog.showModal();document.querySelector('#exit-terminal').focus();}
 function close() {if(!dialog.open) {return;}dialog.close();isCelebrating=false;confetti=[];onClose();}
 function celebrate() {
  home.hidden=true;surprise.hidden=false;isCelebrating=true;clock=0;nextBurst=0;confetti=[];resize();
  document.querySelector('.terminal__display').scrollTop=0;onSurprise();document.querySelector('#back-services').focus();
 }
 document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',celebrate));
 document.querySelector('#exit-terminal').addEventListener('click',close);
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 document.querySelector('#back-services').addEventListener('click',()=>{home.hidden=false;surprise.hidden=true;isCelebrating=false;document.querySelector('[data-service]').focus();});
 window.addEventListener('resize',()=>{if(isCelebrating) {resize();}});
 function burst() {
  const x=canvas.width*(.15+Math.random()*.7),y=canvas.height*(.12+Math.random()*.68),color=['#e2ef92','#facda0','#a4ddc1','#ddaed2','#fff1b8'][Math.floor(Math.random()*5)];
  for(let i=0;i<65;i++) {const angle=Math.random()*Math.PI*2,speed=60+Math.random()*160;confetti.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,age:0,life:1+Math.random(),color,size:2+Math.random()*3});}
 }
 function update(dt) {
  if(!isCelebrating||!dialog.open) {return;}
  clock+=dt;if(clock>nextBurst) {burst();nextBurst=clock+.48;}
  context.clearRect(0,0,canvas.width,canvas.height);
  confetti=confetti.filter(p=>p.age<p.life);
  confetti.forEach(p=>{p.age+=dt;p.vy+=45*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;context.globalAlpha=Math.max(0,1-p.age/p.life);context.fillStyle=p.color;context.shadowColor=p.color;context.shadowBlur=9;context.beginPath();context.arc(p.x,p.y,p.size,0,Math.PI*2);context.fill();});
  context.globalAlpha=1;
 }
 return {open,close,update,get isOpen(){return dialog.open;}};
}
