(async()=>{
  const loadParts=async(prefix,count)=>{const parts=[];for(let i=1;i<=count;i++){const r=await fetch(`${prefix}.${i}.txt`);if(!r.ok)throw new Error(`No se pudo cargar ${prefix}.${i}.txt`);parts.push(await r.text());}return parts.join('');};
  try{
    const css=await loadParts('css',4);const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
    const html=await loadParts('body',3);document.body.innerHTML=html;
    await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});
    const js=await loadParts('js',4);new Function(js)();
  }catch(err){console.error(err);document.body.innerHTML='<div style="font-family:system-ui;padding:32px;color:#fff;background:#111318;min-height:100vh"><h1>Mis Finanzas</h1><p>No se pudo cargar la aplicación.</p></div>';}
})();
