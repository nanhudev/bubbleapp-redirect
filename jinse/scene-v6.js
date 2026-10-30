import * as T from 'three';
import {GLTFLoader} from './vendor/loaders/GLTFLoader.js';
const clamp=T.MathUtils.clamp;
export const smooth=t=>{t=clamp(t,0,1);return t*t*(3-2*t)};
const V=a=>new T.Vector3(...a);
const texLoader=new T.TextureLoader();
const texture=async url=>{let t=await texLoader.loadAsync(url);t.colorSpace=T.SRGBColorSpace;return t};
function mesh(parent,geometry,material,position=[0,0,0]){let m=new T.Mesh(geometry,material);m.position.fromArray(position);parent.add(m);return m}
function stroke(parent,pts,material){let m=new T.Line(new T.BufferGeometry().setFromPoints(pts.map(V)),material);parent.add(m);return m}
function softTexture(){let c=document.createElement('canvas');c.width=c.height=256;let x=c.getContext('2d'),g=x.createRadialGradient(128,128,0,128,128,125);g.addColorStop(0,'rgba(250,248,235,.35)');g.addColorStop(.45,'rgba(250,248,235,.18)');g.addColorStop(1,'rgba(250,248,235,0)');x.fillStyle=g;x.fillRect(0,0,256,256);return new T.CanvasTexture(c)}
function environment(renderer){let c=document.createElement('canvas');c.width=512;c.height=256;let x=c.getContext('2d'),g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#fff7df');g.addColorStop(.35,'#dce6d2');g.addColorStop(.6,'#8faaa0');g.addColorStop(1,'#243e34');x.fillStyle=g;x.fillRect(0,0,512,256);let t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.mapping=T.EquirectangularReflectionMapping;let pm=new T.PMREMGenerator(renderer),out=pm.fromEquirectangular(t);t.dispose();pm.dispose();return out}
function createActor(map){
 const group=new T.Group(),height=8,width=height*map.image.width/map.image.height;
 const g=new T.PlaneGeometry(width,height,32,56);g.translate(0,height/2,0);
 const root=new T.Bone();root.name='root';let bones=[root];
 function bone(name,parent,pos){let b=new T.Bone();b.name=name;b.position.fromArray(pos);parent.add(b);bones.push(b);return b}
 const hips=bone('pelvis',root,[0,3.3,0]),torso=bone('breathing_torso',hips,[0,1.6,0]),head=bone('head',torso,[0,1.7,0]);
 const left=bone('left_sleeve',torso,[-.7,.05,0]),right=bone('right_sleeve',torso,[.7,.05,0]);
 const hemL=bone('left_hem',hips,[-.5,-.6,0]),hemR=bone('right_hem',hips,[.5,-.6,0]);
 const kneeL=bone('left_lower_robe',hemL,[0,-1.5,0]),kneeR=bone('right_lower_robe',hemR,[0,-1.5,0]);
 const indices=[],weights=[],p=g.attributes.position;
 for(let i=0;i<p.count;i++){
  let x=p.getX(i),y=p.getY(i),side=x<0;
  if(y>6.4){let a=smooth((y-6.4)/.6);indices.push(2,3,0,0);weights.push(1-a,a,0,0)}
  else if(y>3.5){let sleeve=smooth((Math.abs(x)-.65)/.9)*smooth((6.3-y)/1.4);indices.push(2,side?4:5,1,0);weights.push((1-sleeve)*.9,sleeve,(1-sleeve)*.1,0)}
  else{let skirt=smooth((3.7-y)/1.3),lower=smooth((1.8-y)/1.3)*.48;indices.push(1,side?6:7,side?8:9,0);weights.push(1-skirt,skirt*(1-lower),skirt*lower,0)}
 }
 g.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
 const ink={value:0},m=new T.MeshStandardMaterial({map,transparent:true,alphaTest:.018,side:T.DoubleSide,depthWrite:true,roughness:1,metalness:0,color:0xffffff});
 m.onBeforeCompile=s=>{s.uniforms.inkMode=ink;s.fragmentShader='uniform float inkMode;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb=mix(diffuseColor.rgb,vec3(.031,.075,.055),inkMode);diffuseColor.a*=mix(smoothstep(.015,.10,vMapUv.y),1.,inkMode);')};
 const skin=new T.SkinnedMesh(g,m);skin.add(root);skin.bind(new T.Skeleton(bones));group.add(skin);
 return {group,skin,bones,ink,animate(time,walking,reach){hips.position.y=3.3+Math.sin(time*1.2)*.018+(walking?Math.abs(Math.sin(time*5))*.03:0);torso.rotation.z=Math.sin(time*.7)*.005;head.rotation.z=Math.sin(time*.43)*.015;left.rotation.z=Math.sin(time*.9)*.012+(reach?.10:0);right.rotation.z=-Math.sin(time*.8)*.015;hemL.rotation.z=Math.sin(time*1.1)*.018+(walking?Math.sin(time*5)*.07:0);hemR.rotation.z=Math.sin(time*1.1+1)*.018+(walking?-Math.sin(time*5)*.07:0);kneeL.rotation.z=walking?Math.sin(time*5+.6)*.045:0;kneeR.rotation.z=walking?-Math.sin(time*5+.6)*.045:0;}};
}
function createButterfly(map){
 let group=new T.Group(),wings=[],mat=new T.MeshStandardMaterial({map,transparent:true,alphaTest:.02,side:T.DoubleSide,roughness:.8,metalness:.02,depthWrite:false,emissive:0x15170d});
 for(let sign of [-1,1]){let hinge=new T.Group();hinge.scale.x=sign;group.add(hinge);let geo=new T.PlaneGeometry(1.55,1.82,16,20),p=geo.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,Math.sin((p.getX(i)+.775)/1.55*Math.PI)*.13);geo.computeVertexNormals();mesh(hinge,geo,mat,[.74,0,0]);wings.push(hinge)}
 let body=mesh(group,new T.SphereGeometry(.065,12,12),new T.MeshStandardMaterial({color:0x385238,roughness:.8}));body.scale.set(.8,3.8,.8);
 let lineMat=new T.LineBasicMaterial({color:0x9f8a4b,transparent:true,opacity:.8});for(let sign of [-1,1]){let curve=new T.QuadraticBezierCurve3(V([sign*.025,.2,.02]),V([sign*.12,.43,.02]),V([sign*.2,.46,.02]));stroke(group,curve.getPoints(20).map(v=>v.toArray()),lineMat)}
 return {group,wings,animate(t,perched=false){let angle=perched?.48+Math.sin(t*.8)*.08:.5+Math.sin(t*4.8)*.55;wings[0].rotation.y=angle;wings[1].rotation.y=-angle}};
}
export async function createWorld(canvas,{low=false}={}){
 const renderer=new T.WebGLRenderer({canvas,antialias:!low,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,low?1:1.5));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;renderer.shadowMap.enabled=!low;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.setClearColor(0xeeeadd);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(38,innerWidth/innerHeight,.1,150);camera.position.set(0,5.5,24);camera.lookAt(0,1,0);
 const contextControl=renderer.getContext().getExtension('WEBGL_lose_context');let envTarget=environment(renderer);scene.environment=envTarget.texture;scene.environmentIntensity=.38;
 scene.add(new T.HemisphereLight(0xfffae8,0x486854,1.3));let key=new T.DirectionalLight(0xffefd1,2.1);key.position.set(-4,13,9);key.castShadow=!low;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-17,right:17,top:15,bottom:-15,near:.5,far:50});key.shadow.bias=-.0005;key.shadow.normalBias=.012;scene.add(key);let rim=new T.DirectionalLight(0xc7e2d6,1.0);rim.position.set(8,6,-8);scene.add(rim);
 const failures=[];const optional=async(url,fallback)=>{try{return await texture(url)}catch(e){failures.push(url);return texture(fallback)}};
 const [gltf,landscape,dream,portrait,wing,atlas]=await Promise.all([
  new GLTFLoader().loadAsync('./assets/jinse-v6.glb'),texture('./assets/landscape-v6.png'),optional('./assets/dream-v6.png','./assets/landscape-v6.png'),texture('./assets/poet-v6.png'),texture('./assets/wing-v4.png'),optional('./assets/memories-v4.png','./assets/landscape-v6.png')]);
 // All three-dimensional object geometry is authored in the editable Blender source.
 const instrument=new T.Group();instrument.name='Jinse_Instrument';scene.add(instrument);instrument.add(gltf.scene);let strings=[],bridges=[];
 gltf.scene.traverse(o=>{if(o.isMesh){o.castShadow=!/Gold|Inlay|String/.test(o.name);o.receiveShadow=true;if(o.material){o.material.envMapIntensity=.65;if(o.name.startsWith('String_'))o.visible=false;if(o.name.startsWith('Bridge_'))bridges.push(o)}}});
 for(let i=0;i<50;i++){let bY=-1.72+i*3.44/49,bX=-1.85+(i%25)*.066+(i>=25?2.35:0),base=.44+.22*(1-(bY/2.15)**2)+.045*Math.cos(bX*.22),peak=Math.max(.93,base+.29)+.012;let geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(new Float32Array(65*3),3));let material=new T.LineBasicMaterial({color:0xd0b47a,transparent:true,opacity:.57});let line=new T.Line(geometry,material);line.name='live_string_'+i;line.userData={id:i,x:bX,z:-bY,peak};instrument.add(line);strings.push(line)}
 const actor=createActor(portrait);scene.add(actor.group);
 const skyUniforms={jade:{value:landscape},dream:{value:dream},dreamMix:{value:0},wash:{value:0},fogColor:{value:new T.Color(0xeeeadd)}};
 const skyMat=new T.ShaderMaterial({uniforms:skyUniforms,side:T.DoubleSide,depthWrite:false,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D jade;uniform sampler2D dream;uniform float dreamMix;uniform float wash;uniform vec3 fogColor;varying vec2 vUv;void main(){vec3 col=mix(texture2D(jade,vUv).rgb,texture2D(dream,vUv).rgb,dreamMix);gl_FragColor=vec4(mix(col,fogColor,wash),1.);\n#include <colorspace_fragment>\n}'});
 const sky=mesh(scene,new T.PlaneGeometry(180,104),skyMat,[0,5,-35]);sky.renderOrder=-10;
 const floor=mesh(scene,new T.PlaneGeometry(65,55),new T.ShadowMaterial({color:0x345847,opacity:.10}),[2,-1.15,0]);floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;floor.visible=false;
 const mist=new T.Group();scene.add(mist);let fogMap=softTexture();for(let i=0;i<5;i++){let m=mesh(mist,new T.PlaneGeometry(38,5),new T.MeshBasicMaterial({map:fogMap,transparent:true,depthWrite:false,toneMapped:false,opacity:.28}),[i%2?8:-5,-1.4+i*.18,8-i*5]);m.userData.baseX=m.position.x;}
 // No rectangular screen outline: the memory is a slightly bowed silk surface with rolled edges.
 const memories=new T.Group();scene.add(memories);let paperGeo=new T.PlaneGeometry(9.6,6.5,40,28),paperBase=paperGeo.attributes.position.array.slice();let paperMaterials=[];
 for(let i=0;i<4;i++){let map=atlas.clone();map.repeat.set(.5,.5);map.offset.set(i%2*.5,i<2?.5:0);map.needsUpdate=true;paperMaterials.push(new T.MeshBasicMaterial({map,side:T.DoubleSide,toneMapped:false,transparent:true,opacity:1}))}
 const memoryPicture=mesh(memories,paperGeo,paperMaterials[0]);let rollMat=new T.MeshStandardMaterial({color:0x47735b,roughness:.7});for(let sign of [-1,1]){let roll=mesh(memories,new T.CylinderGeometry(.06,.06,9.9,16),rollMat,[0,sign*3.28,.08]);roll.rotation.z=Math.PI/2;for(let x of [-5.0,5.0])mesh(memories,new T.SphereGeometry(.09,10,8),new T.MeshStandardMaterial({color:0xa28a51,metalness:.4,roughness:.6}),[x,sign*3.28,.08]);}
 const flame=mesh(memories,new T.SphereGeometry(.045,10,10),new T.MeshBasicMaterial({color:0xffdfa3,toneMapped:false}),[-.59,-.01,.14]);flame.scale.y=2;
 const stringHall=new T.Group();scene.add(stringHall);let hall=[];for(let i=0;i<7;i++){let x=1.5+i*2.15,z=5-i*3.1;let pillar=mesh(stringHall,new T.CylinderGeometry(.012,.012,22,6),new T.MeshStandardMaterial({color:0x9d8853,roughness:.55,metalness:.3,transparent:true,opacity:.55}),[x,4,z]);hall.push(pillar);}
 const butterflies=[];for(let i=0;i<(low?4:7);i++){let b=createButterfly(wing);scene.add(b.group);butterflies.push(b)}const passButterfly=createButterfly(wing);scene.add(passButterfly.group);
 const paperWorld=new T.Group();scene.add(paperWorld);let tinyPaper=mesh(paperWorld,new T.PlaneGeometry(5.1,3.2,16,10),new T.MeshBasicMaterial({color:0xe2ddc7,side:T.DoubleSide,transparent:true,opacity:.75,toneMapped:false}),[0,1.3,0]);paperWorld.rotation.y=-.28;
 const arcCurve=new T.CatmullRomCurve3([V([10,-.4,1]),V([8,2.0,2.5]),V([5.5,2.2,3.8]),V([2.7,1.7,2])]);let arc=mesh(scene,new T.TubeGeometry(arcCurve,100,.009,6,false),new T.MeshStandardMaterial({color:0xb69a5b,roughness:.45,metalness:.6}));
 const textGroup=new T.Group();scene.add(textGroup);let textRecords=[];
 function clearText(){for(let m of [...textGroup.children]){m.geometry.dispose();m.material.map?.dispose();m.material.dispose();textGroup.remove(m)}textRecords=[];}
 function captureText(element){clearText();camera.updateMatrixWorld();let walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);let n;const forward=new T.Vector3();camera.getWorldDirection(forward);let unit=2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*8/innerHeight;
  while(n=walker.nextNode()){let off=0;for(let ch of [...n.textContent]){let end=off+ch.length,range=document.createRange();range.setStart(n,off);range.setEnd(n,end);off=end;if(!ch.trim())continue;let rect=range.getBoundingClientRect();if(!rect.width||!rect.height)continue;let style=getComputedStyle(n.parentElement),cv=document.createElement('canvas');cv.width=cv.height=512;let ctx=cv.getContext('2d');ctx.font=`360px ${style.fontFamily}`;ctx.fillStyle=style.color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(ch,256,268);let map=new T.CanvasTexture(cv);map.colorSpace=T.SRGBColorSpace;let size=parseFloat(style.fontSize)*unit*512/360;let m=mesh(textGroup,new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map,transparent:true,side:T.DoubleSide,depthWrite:false,toneMapped:false}));let ndc=new T.Vector3((rect.x+rect.width/2)/innerWidth*2-1,-(rect.y+rect.height/2)/innerHeight*2+1,.5);let ray=ndc.unproject(camera).sub(camera.position).normalize();m.position.copy(camera.position).addScaledVector(ray,8/ray.dot(forward));m.quaternion.copy(camera.quaternion);textRecords.push({mesh:m,start:m.position.clone(),back:forward.clone().multiplyScalar(-1),side:(rect.x+rect.width/2<innerWidth/2?-1:1)});}}
 }
 function updateText(progress){for(let {mesh:m,start,back,side} of textRecords){m.position.copy(start).addScaledVector(back,smooth(progress)*16);m.position.x+=side*smooth(progress)*3.5;m.rotateY(0);m.material.opacity=progress<.9?1:(1-progress)*10;}}
 function animateStrings(time,cue){for(let line of strings){let {id,x,z,peak}=line.userData,a=line.geometry.attributes.position,active=(cue>=7&&cue<=10&&id===(cue-7)*11+5)||(cue===0&&id===17);for(let j=0;j<65;j++){let xx=-5.86+j*11.72/64,t=xx<x?(xx+5.86)/(x+5.86):(5.86-xx)/(5.86-x);let vibrate=active?Math.sin(j*Math.PI/64)*Math.sin(time*24)*Math.exp(-time*.95)*.055:0;a.setXYZ(j,xx,.825+t*(peak-.825)+vibrate,z);}a.needsUpdate=true;line.material.opacity=cue===3&&id>=25?.08:active?.92:.52;line.material.color.setHex(active?0xffdfa0:0xc7aa70);}}
 let previousMemory=-1;
 function apply(pose,time,cue,{walk=0,flight=0,from=cue}={}){
  camera.position.fromArray(pose.camera);camera.fov=pose.fov;camera.lookAt(V(pose.target));camera.updateProjectionMatrix();camera.updateMatrixWorld();
  instrument.visible=pose.instrumentAlpha>.01;instrument.position.fromArray(pose.instrument);instrument.rotation.set(pose.instrumentRot[0],pose.instrumentRot[1],pose.instrumentRot[2]);instrument.scale.setScalar(pose.instrumentScale);
  // Geometry retains depth; transparency is only used while a string occludes the camera during a transition.
  instrument.traverse(o=>{if(o.isMesh&&!o.name.startsWith('String_')&&o.material){o.material.transparent=pose.instrumentAlpha<.99;o.material.opacity=pose.instrumentAlpha;}});
  actor.group.visible=pose.actorAlpha>.01;actor.group.position.fromArray(pose.actor);actor.group.scale.setScalar(pose.actorScale);actor.group.quaternion.copy(camera.quaternion);actor.skin.material.opacity=pose.actorAlpha;actor.ink.value=pose.silhouette;actor.animate(time,walk>.05,cue>=7&&cue<=10);actor.skin.castShadow=false;
  skyUniforms.dreamMix.value=pose.dream;skyUniforms.wash.value=pose.wash;
  memories.visible=pose.memoryAlpha>.01;memories.position.fromArray(pose.memory);memories.rotation.set(.02,pose.memoryTurn,0);memories.scale.setScalar(pose.memoryScale);let memoryIndex=clamp(cue-7,0,3);if(flight>0&&flight<.5&&from>=7&&from<=10)memoryIndex=from-7;if(memoryIndex!==previousMemory){memoryPicture.material=paperMaterials[memoryIndex];previousMemory=memoryIndex;}memoryPicture.material.opacity=pose.memoryAlpha;
  let pp=paperGeo.attributes.position;for(let i=0;i<pp.count;i++){let x=paperBase[i*3],y=paperBase[i*3+1];pp.setZ(i,Math.pow(x/4.8,2)*.12+Math.sin(x*1.2+time*.55)*.025+(cue===9?Math.sin(x*2.4+time*.7)*.035:0))}pp.needsUpdate=true;flame.visible=cue===7;flame.scale.y=1.4+Math.sin(time*9)*.18;
  stringHall.visible=pose.hall>.01;hall.forEach((h,i)=>{h.material.opacity=pose.hall*(i===cue-7?.9:.43);h.position.x=1.5+i*2.15+Math.sin(time*.7+i)*.007;});
  mist.children.forEach((m,i)=>{m.position.x=m.userData.baseX+Math.sin(time*.06+i)*2;m.material.opacity=.22+pose.wash*.1;});
  butterflies.forEach((b,i)=>{b.group.visible=i===0?pose.butterflyScale>.01:(pose.dream>.2||cue===0)&&i<(pose.dream>.2?butterflies.length:3);if(i===0){b.group.position.fromArray(pose.butterfly);b.group.scale.setScalar(pose.butterflyScale);b.group.rotation.set(0,-.12,Math.sin(time*.3)*.06-.12);b.animate(time,cue===16)}else{let t=time*.15+i*1.8;b.group.position.set(8.5+Math.sin(t)*2.8,4+Math.cos(t*.7+i)*2,-1+i*1.2);b.group.scale.setScalar(.13+i*.009);b.group.quaternion.copy(camera.quaternion);b.animate(time+i)}});
  passButterfly.group.visible=pose.pass>.01;passButterfly.group.position.copy(camera.position).add(V([6-pose.pass*12,0,-5]));passButterfly.group.scale.setScalar(Math.sin(pose.pass*Math.PI)*4.5+.2);passButterfly.group.quaternion.copy(camera.quaternion);passButterfly.animate(time);
  paperWorld.visible=pose.paper>.01;paperWorld.position.set(6,-.7,-5);tinyPaper.material.opacity=pose.paper*.8;
  arc.visible=pose.arc>.01;arc.material.transparent=true;arc.material.opacity=pose.arc;
  animateStrings(time,cue);renderer.render(scene,camera);
 }
 function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
 function inspect(){let bounds=new T.Box3().setFromObject(instrument);return {camera:camera.position.toArray(),fov:camera.fov,model:instrument.position.toArray(),strings:strings.length,bridges:bridges.length,bones:actor.bones.map(b=>b.name),triangles:renderer.info.render.triangles,calls:renderer.info.render.calls,textures:renderer.info.memory.textures,failures,modelBounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}}}
 async function exportActor(){
  const {GLTFExporter}=await import('./vendor/loaders/GLTFExporter.js');
  const position=actor.group.position.clone(),quaternion=actor.group.quaternion.clone(),scale=actor.group.scale.clone(),opacity=actor.skin.material.opacity;
  const transforms=actor.bones.map(b=>({p:b.position.clone(),q:b.quaternion.clone()}));
  actor.group.position.set(0,0,0);actor.group.quaternion.identity();actor.group.scale.setScalar(1);actor.skin.skeleton.pose();actor.skin.material.opacity=1;actor.group.name='LiShangyin_ArtisticInterpretation_2_5D';actor.skin.name='SilkSkinnedMesh';actor.group.updateMatrixWorld(true);
  const times=[0,1,2,3,4],qtrack=(name,angles)=>new T.QuaternionKeyframeTrack(name+'.quaternion',times,angles.flatMap(a=>new T.Quaternion().setFromEuler(new T.Euler(0,0,a)).toArray()));
  const idle=new T.AnimationClip('Idle_Silk',4,[qtrack('head',[0,.012,0,-.012,0]),qtrack('left_sleeve',[0,.02,0,-.02,0]),qtrack('right_sleeve',[0,-.015,0,.015,0]),qtrack('left_hem',[0,.018,0,-.018,0]),qtrack('right_hem',[0,-.018,0,.018,0])]);
  const walk=new T.AnimationClip('Walk_Ink',4,[qtrack('left_hem',[0,.07,0,-.07,0]),qtrack('right_hem',[0,-.07,0,.07,0]),qtrack('left_lower_robe',[.02,-.045,-.02,.045,.02]),qtrack('right_lower_robe',[-.02,.045,.02,-.045,-.02])]);
  try{return await new GLTFExporter().parseAsync(actor.group,{binary:true,animations:[idle,walk],onlyVisible:false,trs:true});}
  finally{actor.group.position.copy(position);actor.group.quaternion.copy(quaternion);actor.group.scale.copy(scale);actor.skin.material.opacity=opacity;actor.bones.forEach((b,i)=>{b.position.copy(transforms[i].p);b.quaternion.copy(transforms[i].q)})}
 }
 return {renderer,scene,camera,instrument,actor,apply,resize,inspect,captureText,updateText,clearText,failures,exportActor,loseContext:()=>contextControl?.loseContext(),restoreContext:()=>contextControl?.restoreContext(),restoreEnvironment(){envTarget.dispose();envTarget=environment(renderer);scene.environment=envTarget.texture}};
}
