const entries=[
['ふわふわ','浮く・流れる','軽く、やわらかく浮かぶ様子。','雲がふわふわ浮かんでいる。','float','mint'],
['ゆらゆら','揺れる','ゆっくり、左右に揺れ続ける様子。','風に揺られて、葉がゆらゆら。','sway','lilac'],
['ぷるぷる','揺れる','やわらかいものが細かく震える様子。','ゼリーがぷるぷる震える。','jelly','peach'],
['ぴょんぴょん','弾む','軽やかに、繰り返し跳びはねる様子。','うさぎがぴょんぴょん跳ねる。','hop','yellow'],
['ぐるぐる','回る','同じところを繰り返し回る様子。','風車がぐるぐる回る。','spin','lilac'],
['ころころ','回る','小さく丸いものが転がる様子。','ビー玉がころころ転がる。','roll','mint'],
['きらきら','光る','小さな光が、明るく輝く様子。','水面がきらきら輝く。','twinkle','yellow'],
['じわじわ','変わる','少しずつ、時間をかけて広がる様子。','インクがじわじわ染み込む。','spread','peach'],
['どんどん','弾む','強い音や勢いが繰り返される様子。','扉をどんどん叩く。','thump','peach'],
['すいすい','浮く・流れる','抵抗なく、なめらかに進む様子。','魚がすいすい泳ぐ。','glide','mint'],
['ぶるぶる','揺れる','体や物が、繰り返し震える様子。','寒くて体がぶるぶる震える。','shake','lilac'],
['ぽよんぽよん','弾む','やわらかく弾み、形が戻る様子。','ボールがぽよんぽよん弾む。','bounce','yellow'],
['くるくる','回る','軽快に、小さく回り続ける様子。','リボンがくるくる回る。','whirl','peach'],
['ちかちか','光る','光が短い間隔で点滅する様子。','小さなランプがちかちか光る。','blink','lilac'],
['もこもこ','変わる','丸いふくらみが重なり、盛り上がる様子。','泡がもこもこふくらむ。','puff','mint'],
['しゅん','変わる','勢いがなくなり、気持ちが沈む様子。','注意されて、しゅんとする。','droop','yellow'],
['ぱたぱた','揺れる','薄いものが繰り返し、軽くはためく様子。','旗がぱたぱたはためく。','flap','peach'],
['ぽたぽた','浮く・流れる','しずくが、一滴ずつ落ちる様子。','蛇口から水がぽたぽた落ちる。','drip','mint']];
let category='すべて';const grid=document.querySelector('#grid'),search=document.querySelector('#search');
const categories=['すべて',...new Set(entries.map(x=>x[1]))];
document.querySelector('#filters').innerHTML=categories.map(x=>`<button class="filter" aria-pressed="${x===category}" data-category="${x}">${x}</button>`).join('');
function render(){const q=search.value.trim();const selected=entries.filter(x=>(category==='すべて'||x[1]===category)&&x.slice(0,4).some(v=>v.includes(q)));grid.innerHTML=selected.map(x=>`<article class="card"><div class="stage ${x[5]}" aria-label="${x[0]}の動きのイメージ"><span class="index">${String(entries.indexOf(x)+1).padStart(2,'0')}</span><div class="shape ${x[4]}"><i></i><i></i><i></i></div><span class="stage-category">${x[1]}</span></div><div class="card-copy"><h3>${x[0]}</h3><p>${x[2]}</p><p class="example">${x[3]}</p></div></article>`).join('');document.querySelector('#count').textContent=`${selected.length} / ${entries.length} のことば`;document.querySelector('#empty').hidden=selected.length!==0;}
document.querySelector('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;category=b.dataset.category;document.querySelectorAll('.filter').forEach(x=>x.setAttribute('aria-pressed',x===b));render();});search.addEventListener('input',render);
const pause=document.querySelector('#pause');let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;function setPaused(){document.body.classList.toggle('paused',paused);pause.setAttribute('aria-pressed',paused);pause.textContent=paused?'▶ 動きを再生する':'Ⅱ 動きをとめる';}pause.addEventListener('click',()=>{paused=!paused;setPaused();});setPaused();render();