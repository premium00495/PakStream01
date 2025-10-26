import fs from 'fs';
import path from 'path';

export default function handler(req,res){
  const cookies = req.headers.cookie || '';
  if(!cookies.split(';').map(c=>c.trim()).includes('access=1')){
    res.writeHead(302,{Location:'/'});
    return res.end();
  }
  const filePath = path.join(process.cwd(),'watch.html');
  const html = fs.readFileSync(filePath,'utf8');
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.end(html);
}
