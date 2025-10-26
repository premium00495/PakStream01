const ADMIN_KEY = 'admin123'; // Change this

export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({message:'Method Not Allowed'});
  const {key} = req.body || {};
  if(key === ADMIN_KEY){
    res.setHeader('Set-Cookie','admin=1; Path=/; HttpOnly; Secure; Max-Age=86400; SameSite=Lax');
    return res.status(200).json({valid:true});
  }
  return res.status(200).json({valid:false});
}
