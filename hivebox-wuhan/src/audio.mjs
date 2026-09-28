// 默认静音；只有用户明确开启后才创建音频上下文。
export function createAudio() {
 let context=null,enabled=false,nextCrackle=0;
 function tone(frequency,duration,volume=.045) {
  if(!context||!enabled) {return;}
  const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;
  gain.gain.setValueAtTime(volume,context.currentTime);gain.gain.exponentialRampToValueAtTime(.0001,context.currentTime+duration);
  oscillator.connect(gain).connect(context.destination);oscillator.start();oscillator.stop(context.currentTime+duration);
 }
 function noise(duration=.35,volume=.07) {
  if(!context||!enabled) {return;}
  const buffer=context.createBuffer(1,context.sampleRate*duration,context.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++) {data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,3);}
  const source=context.createBufferSource(),gain=context.createGain(),filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1500;gain.gain.value=volume;source.buffer=buffer;source.connect(filter).connect(gain).connect(context.destination);source.start();
 }
 async function toggle() {
  enabled=!enabled;if(enabled) {try {context??=new AudioContext();await context.resume();tone(660,.18);} catch {enabled=false;}}
  return enabled;
 }
 function update(time,phase) {
  if(!enabled||time<nextCrackle) {return;}
  if(phase==='fuse') {noise(.05,.018);nextCrackle=time+.1;}
  if(phase==='celebrating') {noise(.6,.075);tone(440+Math.random()*600,.3,.009);nextCrackle=time+.55;}
 }
 return {toggle,update,chime(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone(f,.45,.03),i*120));}};
}
