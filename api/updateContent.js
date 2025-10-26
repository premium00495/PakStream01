import fs from 'fs';
import path from 'path';

export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({message:'Method Not Allowed'});
  const {content} = req.body || {};
  if(!content) return res.status(400).json({message:'No content provided'});
  const filePath = path.join(process.cwd(),'watch.html');
  fs.writeFileSync(filePath,content,'utf8');
  res.status(200).json({message:'Updated'});
}
