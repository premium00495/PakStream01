let KEYS = ['12345','pak2025']; // Initial user keys

export default function handler(req,res){
  if(req.method==='GET') return res.status(200).json({keys:KEYS});
  const {key} = req.body || {};
  if(req.method==='POST'){ if(key && !KEYS.includes(key)) KEYS.push(key); return res.status(200).json({keys:KEYS}); }
  if(req.method==='DELETE'){ if(key) KEYS = KEYS.filter(k=>k!==key); return res.status(200).json({keys:KEYS}); }
  return res.status(405).json({message:'Method Not Allowed'});
}
