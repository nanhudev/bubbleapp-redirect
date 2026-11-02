import * as T from 'three';
const ease=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
const texture=c=>{const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t};
const label=(s,size=100)=>{let c=document.createElement('canvas');c.width=1024;c.height=256;let x=c.getContext('2d');x.font=`${size}px JinseBrush`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#274c3c';x.fillText(s,512,132);return texture(c)};
export function createPoeticSpace(scene,camera,atlas){
 const scroll=new T.Group();scroll.name='Continuous_Biography_Handscroll';scroll.position.set(17.7,3.1,-4);scroll.scale.setScalar(1.2);scroll.rotation.y=-.055;scene.add(scroll);
 // A single continuous handscroll. All four scenes share one surface and one pair of rollers.
 const cv=document.createElement('canvas');cv.width=8192;cv.height=1536;let x=cv.getContext('2d');x.fillStyle='#e7ddbd';x.fillRect(0,0,cv.width,cv.height);
 const names=['文才与受知','科举与仕途','入幕与婚姻','辗转幕府'];
 const dates=['文才初展','开成二年 · 837','幕府与婚姻','行旅与漂泊'];
 const facts=[['令狐楚赏识其文，授以章奏。','受知经验，构成对华年的一层回望。'],['登进士第，仕进之路由此开启。','一次登第，并不等于此后际遇顺遂。'],['王茂元聘入幕府，并以女妻之。','婚姻提供背景，题旨仍须由诗句检验。'],['在不同幕府与官职之间辗转。','生命中的期待与失落，交织而非单线。']];
 for(let i=0;i<4;i++){
  let left=i*2048;x.drawImage(atlas.image,(i%2)*atlas.image.width/2,i<2?0:atlas.image.height/2,atlas.image.width/2,atlas.image.height/2,left,170,2048,1100);
  let g=x.createLinearGradient(0,870,0,1536);g.addColorStop(0,'#ece2c300');g.addColorStop(.45,'#ece2c3e8');g.addColorStop(1,'#ece2c3');x.fillStyle=g;x.fillRect(left,850,2048,686);
  x.fillStyle='#38573f';x.font='120px JinseBrush';x.fillText(names[i],left+125,128);x.fillStyle='#976849';x.font='58px JinseText';x.fillText(dates[i],left+1390,118);
  x.font='82px JinseText';x.fillStyle='#304b3b';facts[i].forEach((s,j)=>x.fillText(s,left+115,1255+j*108));
  x.font='36px JinseText';x.fillStyle='#81724f';x.fillText('《新唐书》 · 文献所载 / 图像为意象演绎',left+115,1475);
 }
 x.strokeStyle='#96824b';x.lineWidth=7;x.strokeRect(15,18,8162,1500);x.lineWidth=2;x.strokeRect(35,38,8122,1460);
 const paperGeo=new T.PlaneGeometry(26,5.3,160,32);const uv=paperGeo.attributes.uv;const scrollMat=new T.MeshStandardMaterial({map:texture(cv),side:T.DoubleSide,roughness:1,metalness:0});
 const paper=new T.Mesh(paperGeo,scrollMat);paper.name='Unrolling_Silk_Surface';scroll.add(paper);
 const rollers=[];for(let i=0;i<2;i++){let g=new T.Group();scroll.add(g);const wood=new T.Mesh(new T.CylinderGeometry(.21,.21,5.9,32),new T.MeshStandardMaterial({color:0x526b48,roughness:.65,metalness:.08}));g.add(wood);for(let sign of [-1,1]){let cap=new T.Mesh(new T.CylinderGeometry(.32,.32,.25,24),new T.MeshStandardMaterial({color:0xa18c56,roughness:.5,metalness:.55}));cap.position.y=sign*2.87;g.add(cap)}rollers.push(g)}
 // Layered water is a true deformed mesh, with a pearl and a distant moon sharing its light.
 const sea=new T.Group();scene.add(sea);sea.position.set(6,.7,1);const waterGeo=new T.PlaneGeometry(17,12,72,48);waterGeo.rotateX(-Math.PI/2);let waterBase=waterGeo.attributes.position.array.slice();
 const water=new T.Mesh(waterGeo,new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,uniforms:{time:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform float time;varying vec2 vUv;void main(){float edge=smoothstep(0.,.23,vUv.x)*smoothstep(0.,.16,1.-vUv.x)*smoothstep(0.,.22,vUv.y)*smoothstep(0.,.22,1.-vUv.y);float line=pow(.5+.5*sin(vUv.y*110.+sin(vUv.x*14.+time*.4)*2.),14.);vec3 color=mix(vec3(.43,.62,.57),vec3(.69,.74,.60),line*.3);gl_FragColor=vec4(color,edge*(.19+line*.13));}'}));sea.add(water);
 const pearl=new T.Mesh(new T.SphereGeometry(.56,40,28),new T.MeshPhysicalMaterial({color:0xf8eac8,roughness:.23,metalness:.12,clearcoat:.7}));pearl.position.set(.7,2.6,1.4);sea.add(pearl);
 const tear=new T.Mesh(new T.SphereGeometry(.13,20,16),new T.MeshPhysicalMaterial({color:0xc4e0d7,roughness:.05,metalness:.12,transparent:true,opacity:.82}));tear.scale.y=1.65;sea.add(tear);
 const moon=new T.Mesh(new T.SphereGeometry(1.5,32,24),new T.MeshBasicMaterial({color:0xf5e9c6}));moon.position.set(1.8,7,-10);sea.add(moon);
 const rings=[];for(let i=0;i<7;i++){let ring=new T.Mesh(new T.TorusGeometry(1.1+i*.63,.012,5,80),new T.MeshBasicMaterial({color:0xd5cb9a,transparent:true,opacity:.24}));ring.rotation.x=-Math.PI/2;ring.position.set(.7,.05,1.4);sea.add(ring);rings.push(ring)}
 const jade=new T.Group();scene.add(jade);jade.position.set(6,1.6,1);const rockMat=new T.MeshStandardMaterial({color:0x6e9c7d,roughness:.29,metalness:.22});
 let m=document.createElement('canvas');m.width=m.height=256;let mx=m.getContext('2d'),grad=mx.createRadialGradient(128,128,0,128,128,120);grad.addColorStop(0,'#e5dfbb77');grad.addColorStop(1,'#e5dfbb00');mx.fillStyle=grad;mx.fillRect(0,0,256,256);let smoke=[];
 for(let i=0;i<7;i++){let s=new T.Mesh(new T.PlaneGeometry(2.6,4.5),new T.MeshBasicMaterial({map:texture(m),transparent:true,depthWrite:false,opacity:.35}));jade.add(s);smoke.push(s)}
 const birds=new T.Group();scene.add(birds);birds.position.set(7,4,0);let wings=[];
 for(let i=0;i<5;i++){const bird=new T.Group();birds.add(bird);bird.position.set(Math.sin(i*2)*2,(i-2)*.8,-i*1.2);let shape=new T.Shape();shape.moveTo(0,0);shape.quadraticCurveTo(.35,.3,.95,.07);shape.quadraticCurveTo(.48,-.08,0,0);for(let sign of [-1,1]){let w=new T.Mesh(new T.ShapeGeometry(shape,16),new T.MeshBasicMaterial({color:0x365447,side:T.DoubleSide}));w.scale.x=sign;bird.add(w);wings.push({w,i,sign})}bird.scale.setScalar(.5+i*.035)}
 const wordGroup=new T.Group();scene.add(wordGroup);let wordKey='',records=[];let history={glyphs:0,behind:0};
 const dispose=g=>{for(let m of [...g.children]){m.geometry?.dispose();m.material?.map?.dispose();m.material?.dispose();g.remove(m)}};
 function configure(poem,term,key){if(key===wordKey)return;wordKey=key;dispose(wordGroup);wordGroup.visible=true;camera.updateMatrixWorld();let font=Math.min(80,Math.max(38,innerWidth*.043));let chars=[...poem];
  chars.forEach((ch,i)=>{const c=document.createElement('canvas');c.width=c.height=256;let cx=c.getContext('2d');cx.font='202px JinseBrush';cx.fillStyle='#244c3a';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(ch,128,138);const depth=12+(i%3)*.25;let unit=2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*depth/innerHeight,size=font*unit*256/202;
   let mesh=new T.Mesh(new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map:texture(c),transparent:true,depthWrite:false,side:T.DoubleSide,toneMapped:false}));let screenX=innerWidth*.08+i*font*1.06,screenY=innerHeight*.235;
   let ray=new T.Vector3(screenX/innerWidth*2-1,-screenY/innerHeight*2+1,.5).unproject(camera).sub(camera.position).normalize(),forward=new T.Vector3();camera.getWorldDirection(forward);mesh.position.copy(camera.position).addScaledVector(ray,depth/ray.dot(forward));mesh.quaternion.copy(camera.quaternion);wordGroup.add(mesh);
  });
  if(term){const mesh=new T.Mesh(new T.PlaneGeometry(5.6,1.4),new T.MeshBasicMaterial({map:label(term,120),transparent:true,depthWrite:false,side:T.DoubleSide,toneMapped:false,opacity:.85}));mesh.position.set(camera.position.x+6,4.8,4);mesh.quaternion.copy(camera.quaternion);mesh.rotateY(-.12);wordGroup.add(mesh)}
 }
 function capture(){let forward=new T.Vector3();camera.getWorldDirection(forward);const clones=[];for(let source of wordGroup.children){let m=new T.Mesh(source.geometry.clone(),source.material.clone());m.material.map=source.material.map.clone();m.position.copy(source.position);m.quaternion.copy(source.quaternion);scene.add(m);clones.push({mesh:m,start:m.position.clone(),rotation:m.quaternion.clone(),back:forward.clone().negate(),side:m.position.x<camera.position.x?-1:1})}wordGroup.visible=false;records=clones;history={glyphs:clones.length,behind:0};}
 function travel(progress){let behind=0,forward=new T.Vector3();camera.getWorldDirection(forward);for(let [i,r] of records.entries()){let t=Math.pow(Math.max(0,(progress-i*.006)/1),1.6);r.mesh.position.copy(r.start).addScaledVector(r.back,t*35);r.mesh.position.x+=r.side*t*2.2;r.mesh.quaternion.copy(r.rotation);r.mesh.rotateY(r.side*t*.22);r.mesh.material.opacity=1-ease((progress-.87)/.13);if(r.mesh.position.clone().sub(camera.position).dot(forward)<0)behind++;}history={glyphs:records.length,behind};}
 function clearFlight(){for(let r of records){scene.remove(r.mesh);r.mesh.geometry.dispose();r.mesh.material.map.dispose();r.mesh.material.dispose()}records=[];wordGroup.visible=true;}
 let opening=0;
 function apply(pose,time,annotation,key,flight){
  scroll.visible=pose.scrollAlpha>.01;opening=pose.scrollOpen||0;let width=26*Math.max(.015,opening),left=-13+Math.max(0,width-10.4),visibleWidth=Math.min(width,10.4),pos=paperGeo.attributes.position;
  for(let i=0;i<pos.count;i++){let u=(i%161)/160,xx=left+u*visibleWidth,v=uv.getY(i);pos.setXYZ(i,xx,(v-.5)*5.3,Math.sin(xx*.25)*.12+Math.sin(xx*.8+time*.5)*.018+Math.exp(-(1-u)*width*1.4)*.16);uv.setX(i,(xx+13)/26)}
  pos.needsUpdate=true;uv.needsUpdate=true;paperGeo.computeVertexNormals();rollers[0].position.set(left,0,.05);rollers[0].rotation.y=-Math.max(0,width-10.4)*2;rollers[1].position.set(-13+width,0,.07);rollers[1].rotation.y=-opening*48;scrollMat.opacity=pose.scrollAlpha;scrollMat.transparent=pose.scrollAlpha<.99;
  sea.visible=pose.sea>.01;jade.visible=pose.jade>.01;birds.visible=pose.birds>.01;
  if(sea.visible){water.material.uniforms.time.value=time;const p=waterGeo.attributes.position;for(let i=0;i<p.count;i++){let xx=waterBase[i*3],zz=waterBase[i*3+2];p.setY(i,Math.sin(xx*.85+time*.65)*.08+Math.cos(zz*.7+time*.5)*.08)}p.needsUpdate=true;waterGeo.computeVertexNormals();pearl.position.y=2.6+Math.sin(time*.4)*.08;tear.position.set(.7,2.0-((time*.27)%1)*1.45,1.98);tear.material.opacity=(1-((time*.27)%1))*.75;rings.forEach((r,i)=>r.scale.setScalar(1+Math.sin(time*.4+i*.5)*.025));}
  if(jade.visible)smoke.forEach((s,i)=>{let t=(time*.08+i/7)%1;s.position.set(Math.sin(i*2+time*.1)*.8,1+t*5,-.7+i*.14);s.quaternion.copy(camera.quaternion);s.material.opacity=Math.sin(t*Math.PI)*.3});
  wings.forEach(({w,i,sign})=>w.rotation.y=sign*(.3+Math.sin(time*3+i)*.7));
  if(!flight&&annotation)configure(annotation.poem,annotation.term,key);
 }
 return {apply,capture,travel,clearFlight,resetText:()=>{wordKey=''},inspect:()=>({scroll:{visible:scroll.visible,opening,rollers:rollers.length,continuousSurface:true,width:26*Math.max(.015,opening),visibleWidth:Math.min(26*Math.max(.015,opening),10.4)},spatialGlyphs:wordGroup.children.length,textFlight:history,sea:sea.visible,jade:jade.visible,birds:birds.visible})};
}
