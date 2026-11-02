const POEMS=['','锦瑟无端五十弦','五十弦','五十弦','悲声不可止','无端','一弦一柱思华年','一弦一柱思华年','一弦一柱思华年','一弦一柱思华年','一弦一柱思华年','思华年','无端','庄生晓梦迷蝴蝶','庄生晓梦迷蝴蝶','晓梦迷蝴蝶','迷与托','锦瑟','望帝春心托杜鹃','庄生与望帝','沧海月明珠有泪','蓝田日暖玉生烟','只是当时已惘然','思华年与此情','独恨无人作郑笺','此情可待成追忆','一弦一柱','此情','迷托有生','当时已惘然','笺注','一弦一柱思华年'];
const TERMS=['','兴','弦','实与虚','悲','无端','思','受知','登第','入幕','行旅','华年','问','迷','物化','晓梦','托','全篇','春心','变与不变','泪','烟','已','此情','郑笺','可待','声律','悼亡','对仗','惘然','原典','重读'];
const THEMES=['instrument','instrument','instrument','instrument','instrument','instrument','scroll','scroll','scroll','scroll','scroll','scroll','void','dream','dream','dream','dream','instrument','birds','dream','sea','jade','void','instrument','scroll','instrument','instrument','scroll','instrument','dream','scroll','dream'];
export function dramaturgy(cues){return cues.map((c,i)=>{const el=document.createElement('div');el.innerHTML=c.body||'';const sections=[...el.querySelectorAll('section')];const lead=el.querySelector('.argument')?.outerHTML||'';let parts=sections.length?sections.map(s=>({heading:s.querySelector('h2')?.textContent||c.title,html:lead+s.outerHTML})):[{heading:c.title,html:c.body||''}];
 if(i>=7&&i<=10)parts=[{heading:c.title,html:'<p class="scroll-fact">'+['令狐楚赏识其文，并授以章奏。','开成二年（837），登进士第。','王茂元聘入幕府，并以女妻之。','在不同幕府与官职之间辗转。'][i-7]+'</p>'+(sections.at(-1)?.outerHTML||'')}];
 if(i===1)parts=[{heading:'声起，字生',html:'<p class="argument">声声入耳，弦弦牵动华年。</p><section><p>“五十弦”先铺开繁声，“一弦一柱”再将它逐一收拢。“思”落在句末，器物的秩序由此化为追忆的节奏。</p><p>从声音抵达记忆，是首联的兴发力量。每一次触弦，都让曾经的年华重新获得形状。</p></section>'},{heading:'弦、柱与共鸣',source:'原诗 S7',html:'<p class="argument">弦列展开，声音的结构显现。</p><section><p>弦振动，柱支承，瑟体与声音相应。“一弦一柱”既有器物的具体感，也有节奏的反复感。</p><p>当“思华年”接在它们之后，外物的每一次微动，便成为内心的一次触发。</p></section>'},...parts];
 if(i===17)parts=[{heading:'八句，同一场追忆',html:el.querySelector('.poem-full').outerHTML}];
 return {poem:i===0?'':POEMS[i]||c.title,term:i===0||(i>=7&&i<=10)?'':TERMS[i]||'思',theme:THEMES[i]||'dream',parts,lead,scroll:i>=6&&i<=11};});}
export const REPORT_CHAPTERS=[{name:'器物与问题',start:0,go:1},{name:'身世与华年',start:6,go:6},{name:'典故与意象',start:13,go:13},{name:'章法与阐释',start:23,go:23},{name:'结论与讨论',start:29,go:29}];
export const GLOSSES={
 '兴':'由物触情，由声入忆。锦瑟的声响引出“思华年”，使眼前器物成为深切追忆的入口。',
 '无端':'“无端”字面是无来由，句中却带着“偏偏如此”的埋怨。它将难以排遣的感受移向器物，与下句处处能触发追思形成张力。',
 '思':'“思”承接弦与柱，把眼前的器物转为回望的动作；中间四句由它统摄，尾联再以“此情”总承。',
 '华年':'“华年”已带有珍美的价值判断。追忆既保存美好，也重新组织了当时未能明白的经验。',
 '迷':'“迷”兼有沉浸与难辨的意味。典源的梦觉之问被移入“思华年”，使曾经真切的经验在回望中动摇。',
 '晓梦':'“晓梦”是清晨之梦，处在夜与昼相接的时间。将醒、易散的临界感，使梦境更显轻盈。',
 '托':'“托”建立寄寓关系：主体难以径直表达或完成的心意，借杜鹃鸣声延续。它与“迷”的不确定形成对读。',
 '春心':'“春心”容纳春日萌动的愿望与情思；在确定对象之前，先分析这份心意为何需要寄托。',
 '泪':'《博物志》记泪生成珠，本诗却写“珠有泪”：珍物重新显出泪的性质，使珍美与悲感相互渗透。',
 '烟':'“玉”具有实体的珍贵，“烟”却使这种美显得难以握持。与“珠有泪”相对，凝聚与弥散构成不同的感受形式。',
 '已':'“已”把惘然放回华年发生之时。过去与今日共享深长的感受：美好的经验，同时含有未明与未尽。',
 '此情':'“此情”总承梦之迷、心之托、珠之泪与玉之烟；它的指代将分散的意象收拢到尾联。',
 '可待':'“可待”取“岂待”的反问语气，将惘然由今日追忆折回当时。许顗《彦周诗话》引作“何待”，问意更为鲜明。'
};
