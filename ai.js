export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const key = context.env.GEMINI_API_KEY;
    if (!key) return new Response(JSON.stringify({error:'GEMINI_API_KEY is not configured'}), {status:500, headers:{'content-type':'application/json'}});
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(key)}`;
    const r = await fetch(url, {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(body)});
    const data = await r.json();
    if (!r.ok) return new Response(JSON.stringify(data), {status:r.status, headers:{'content-type':'application/json'}});
    const text = data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('') || '';
    return new Response(JSON.stringify({text}), {headers:{'content-type':'application/json'}});
  } catch (e) {
    return new Response(JSON.stringify({error:String(e)}), {status:500, headers:{'content-type':'application/json'}});
  }
}
