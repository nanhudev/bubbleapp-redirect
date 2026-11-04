import * as T from 'three';
// A plucked string traces the route from a concrete object to a word in the poem.
export function createFirstMovement(scene,camera,rig,poetic){
 const group=new T.Group();group.name='String_To_Memory';scene.add(group);
 const threads=[];for(let i=0;i<7;i++){const line=new T.Line(new T.BufferGeometry().setFromPoints(Array.from({length:49},()=>new T.Vector3())),new T.LineBasicMaterial({color:0xb99a58,transparent:true,opacity:0,depthWrite:false}));line.frustumCulled=false;group.add(line);threads.push({line,start:-100,id:0,order:i});}
 let current=-1,entered=0,mode='',last=-100,sweep=-1,visibleThreads=0;
 function pluck(id,time,order){last=time;const thread=threads[order%7];Object.assign(thread,{start:time,id,order});}
 function apply(pose,time,cue,{flight=0,from=cue,phase=0}={}){
  if(!flight&&current!==cue){current=cue;entered=time;}
  const age=time-entered;mode=['invocation','birth','many-to-one','string-and-bridge','sorrow-resonance','question','memory'][cue]||'';
  sweep=-1;
  if(!flight&&cue===2&&age<3.4)sweep=Math.min(49,Math.floor(age/3.4*50));
  if(!flight&&cue===3&&age<2.5)sweep=Math.min(24,Math.floor(age/2.5*25));
  if(!flight&&cue===4&&age<3)sweep=Math.min(49,Math.floor(age/3*50));
  if(cue===2&&phase>0&&age>=3.4)sweep=24;
  group.visible=cue<=6;visibleThreads=0;const targets=poetic.targets();
  for(const t of threads){const elapsed=time-t.start,target=targets.find(v=>v.order===t.order);t.line.visible=elapsed>=0&&elapsed<1.6&&!!target&&cue<=5&&!flight;
   if(!t.line.visible)continue;
   const a=rig.origin(t.id),b=new T.Vector3(target.x/innerWidth*2-1,1-target.y/innerHeight*2,.5).unproject(camera),direction=b.sub(camera.position).normalize(),forward=new T.Vector3();camera.getWorldDirection(forward);b.copy(camera.position).addScaledVector(direction,12/direction.dot(forward));
   const control=a.clone().lerp(b,.52);control.y+=2.1;const curve=new T.QuadraticBezierCurve3(a,control,b),position=t.line.geometry.attributes.position;
   const head=Math.min(1,elapsed/.75);for(let j=0;j<49;j++){const p=curve.getPoint(head*j/48);position.setXYZ(j,p.x,p.y,p.z);}position.needsUpdate=true;t.line.material.opacity=.46*Math.sin(Math.min(1,elapsed/1.6)*Math.PI);visibleThreads++;
  }
 }
 function energy(id,time){if(sweep<0)return 0;const distance=Math.abs(id-sweep);return Math.max(0,1-distance/5)*.72;}
 return {apply,pluck,energy,inspect:()=>({firstMovement:mode,stringSweep:sweep,wordThreads:visibleThreads,lastMeaningfulPluck:last})};
}
