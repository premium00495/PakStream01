async function loadKeys(){
  const res = await fetch('/api/keys');
  const data = await res.json();
  const ul = document.getElementById('keysList');
  ul.innerHTML='';
  data.keys.forEach(key=>{
    const li=document.createElement('li');
    li.textContent=key+' ';
    const del=document.createElement('button');
    del.textContent='Delete';
    del.onclick=async ()=>{
      await fetch('/api/keys',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({key})});
      loadKeys();
    };
    li.appendChild(del);
    ul.appendChild(li);
  });
}
loadKeys();

document.getElementById('addKeyBtn').onclick=async ()=>{
  const key=document.getElementById('newKey').value.trim();
  if(!key) return alert('Enter key');
  await fetch('/api/keys',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key})});
  document.getElementById('newKey').value='';
  loadKeys();
};

async function loadContent(){
  const res = await fetch('/watch.html');
  const html = await res.text();
  document.getElementById('watchContent').value = html;
}
loadContent();

document.getElementById('updateBtn').onclick=async ()=>{
  const content = document.getElementById('watchContent').value;
  await fetch('/api/updateContent',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content})});
  alert('Updated!');
};

document.getElementById('logoutBtn').onclick=()=>{
  window.location.href='/api/logout';
};
