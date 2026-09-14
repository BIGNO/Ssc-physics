import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {subjects, questionBank} from './data/content';
import './styles.css';

const LS='physics-ai-learning-state-v1';
function loadState(){try{return JSON.parse(localStorage.getItem(LS))||{progress:{},notes:{},diagram:{mass:'2 kg',force:'6 N',label:'বস্তু'}}}catch{return {progress:{},notes:{},diagram:{mass:'2 kg',force:'6 N',label:'বস্তু'}}}}
function saveState(s){localStorage.setItem(LS,JSON.stringify(s))}

function App(){
 const subject=subjects[0];
 const [state,setState]=useState(loadState);
 const [activeChapter,setActiveChapter]=useState(subject.chapters[0].id);
 const [view,setView]=useState('learn');
 const [search,setSearch]=useState('');
 const chapter=subject.chapters.find(c=>c.id===activeChapter)||subject.chapters[0];
 const filtered=subject.chapters.filter(c=>(c.title+c.focus).toLowerCase().includes(search.toLowerCase()));
 const markDone=(id)=>{const next={...state,progress:{...state.progress,[id]:!state.progress[id]}};setState(next);saveState(next)};
 const setDiagram=(key,val)=>{const next={...state,diagram:{...state.diagram,[key]:val}};setState(next);saveState(next)};
 const setNote=(val)=>{const next={...state,notes:{...state.notes,[chapter.id]:val}};setState(next);saveState(next)};
 return <div className="app">
   <header className="topbar">
    <div className="brand"><div className="logo">∿</div><div><b>Physics 9–10</b><span>AI Learning Hub</span></div></div>
    <div className="header-actions"><div className="search"><span>⌕</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Chapter খুঁজুন..."/></div><button className="pill" onClick={()=>setView('practice')}>Practice Zone</button></div>
   </header>
   <div className="layout">
    <aside className="sidebar">
      <div className="side-label">SUBJECTS</div>
      <div className="subject-card active"><span>⚛️</span><div><b>পদার্থবিজ্ঞান</b><small>নবম–দশম</small></div><span className="count">{subject.chapters.length}</span></div>
      <div className="side-label">CHAPTERS</div>
      <div className="chapter-list">{filtered.map(c=><button key={c.id} className={c.id===chapter.id?'chapter active':'chapter'} onClick={()=>{setActiveChapter(c.id);setView('learn')}}><span className="num">{String(c.no).padStart(2,'0')}</span><span><b>{c.title}</b><small>{c.focus}</small></span>{state.progress[c.id]&&<span className="check">✓</span>}</button>)}</div>
      <div className="sidebar-footer"><span className="live-dot"></span><span>AI Tutor ready</span></div>
    </aside>
    <main className="main">
      <div className="hero">
        <div><div className="eyebrow">CHAPTER {chapter.no} • {chapter.id.toUpperCase()}</div><h1>{chapter.title}</h1><p>{chapter.focus}</p></div>
        <button className={state.progress[chapter.id]?'done-btn':'primary'} onClick={()=>markDone(chapter.id)}>{state.progress[chapter.id]?'✓ Learned':'Mark as learned'}</button>
      </div>
      <nav className="tabs"><button className={view==='learn'?'tab active':''} onClick={()=>setView('learn')}>Learn</button><button className={view==='practice'?'tab active':''} onClick={()=>setView('practice')}>Practice Zone</button><button className={view==='ai'?'tab active':''} onClick={()=>setView('ai')}>AI Tutor</button></nav>
      {view==='learn'&&<Learn chapter={chapter} diagram={state.diagram} setDiagram={setDiagram} note={state.notes[chapter.id]||''} setNote={setNote}/>} 
      {view==='practice'&&<Practice chapterId={chapter.id}/>} 
      {view==='ai'&&<AITutor chapter={chapter}/>} 
    </main>
   </div>
 </div>
}

function Learn({chapter,diagram,setDiagram,note,setNote}){
 return <div className="content-grid">
  <section className="panel roadmap"><div className="panel-head"><div><span className="kicker">TEACHER’S MANUAL</span><h2>এই chapter শেষে কী কী জানতে হবে?</h2></div><span className="badge">{chapter.learn.length} goals</span></div><div className="goal-list">{chapter.learn.map((x,i)=><div className="goal" key={i}><span>{i+1}</span><p>{x}</p></div>)}</div></section>
  <section className="panel"><div className="panel-head"><div><span className="kicker">CORE CONCEPTS</span><h2>Concepts সহজ ভাষায়</h2></div></div><div className="concepts">{chapter.concepts.map(([t,d],i)=><article className="concept" key={i}><div className="concept-num">0{i+1}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
  <section className="panel diagram-panel"><div className="panel-head"><div><span className="kicker">EDITABLE DIAGRAM</span><h2>Diagram নিজের মতো বদলাও</h2></div><span className="badge">Live SVG</span></div><div className="diagram-wrap"><svg viewBox="0 0 720 260" role="img"><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L10,3 L0,6 Z" fill="currentColor"/></marker></defs><line x1="80" y1="190" x2="650" y2="190" stroke="currentColor" strokeWidth="3" opacity=".22"/><rect x="300" y="135" width="130" height="55" rx="14" fill="none" stroke="currentColor" strokeWidth="3"/><text x="365" y="168" textAnchor="middle" className="svgtext">{diagram.label}</text><line x1="365" y1="135" x2="365" y2="70" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)"/><text x="382" y="84" className="svgtext">{diagram.force}</text><line x1="430" y1="162" x2="590" y2="162" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)"/><text x="500" y="150" className="svgtext">motion</text><text x="365" y="222" textAnchor="middle" className="svgsub">Mass = {diagram.mass}</text></svg></div><div className="diagram-controls"><label>Label<input value={diagram.label} onChange={e=>setDiagram('label',e.target.value)}/></label><label>Mass<input value={diagram.mass} onChange={e=>setDiagram('mass',e.target.value)}/></label><label>Force<input value={diagram.force} onChange={e=>setDiagram('force',e.target.value)}/></label></div></section>
  <section className="panel note-panel"><div className="panel-head"><div><span className="kicker">MY NOTES</span><h2>নিজের note/save</h2></div><span className="badge">Auto saved</span></div><textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="এই chapter-এর গুরুত্বপূর্ণ সূত্র, ভুল বা shortcut লিখে রাখো..."/></section>
  <section className="panel"><div className="panel-head"><div><span className="kicker">LAST 6 YEARS + SCHOOL</span><h2>এই concept-এর প্রশ্ন</h2></div></div><QuestionList chapterId={chapter.id}/></section>
 </div>
}

function QuestionList({chapterId}){const qs=questionBank.filter(q=>q.chapter===chapterId).sort((a,b)=>b.importance-a.importance||b.year-a.year);return qs.length?<div className="questions">{qs.map(q=><div className="qcard" key={q.id}><div className="qmeta"><span>{q.year}</span><span>{q.source}</span><span>{q.type}</span><span>{'★'.repeat(q.importance)}</span></div><h3>{q.q}</h3>{q.options&&<div className="options">{q.options.map(o=><div key={o}>{o}</div>)}</div>}<details><summary>সমাধান দেখুন</summary><p>{q.solution}</p></details></div>)}</div>:<div className="empty">এই chapter-এর জন্য question data এখনো যোগ করা হয়নি। <b>data/content.js</b>-এ board/school প্রশ্ন import করা যাবে।</div>}

function Practice({chapterId}){const [mode,setMode]=useState('all');const qs=questionBank.filter(q=>mode==='all'||q.type===mode||q.difficulty===mode).sort((a,b)=>b.importance-a.importance||b.year-a.year);return <section className="practice-page"><div className="practice-hero"><span className="eyebrow">PRACTICE ZONE</span><h1>Important প্রশ্ন আগে, তারপর solve</h1><p>৬ বছরের প্রশ্ন + school question. Importance দিয়ে সাজানো হয়েছে।</p><div className="filter-row"><button className={mode==='all'?'filter active':'filter'} onClick={()=>setMode('all')}>সব</button><button className={mode==='MCQ'?'filter active':'filter'} onClick={()=>setMode('MCQ')}>MCQ</button><button className={mode==='CQ'?'filter active':'filter'} onClick={()=>setMode('CQ')}>CQ</button><button className={mode==='কঠিন'?'filter active':'filter'} onClick={()=>setMode('কঠিন')}>Hard</button></div></div><QuestionList chapterId={chapterId}/><div className="full-bank">{qs.map(q=><div className="qcard" key={'p'+q.id}><div className="qmeta"><span>{q.year}</span><span>{q.source}</span><span>{q.type}</span><span>{q.difficulty}</span><span>{'★'.repeat(q.importance)}</span></div><h3>{q.q}</h3>{q.options&&<div className="options">{q.options.map(o=><button key={o}>{o}</button>)}</div>}<details><summary>Show solution</summary><p><b>Answer:</b> {q.answer}</p><p>{q.solution}</p></details></div>)}</div></section>}

function AITutor({chapter}){const [messages,setMessages]=useState([{role:'assistant',text:`আমি তোমার AI Physics Tutor। এখন আমরা “${chapter.title}” chapter নিয়ে কাজ করছি। যেকোনো প্রশ্ন করো—আমি concept, formula, numerical বা exam-style answer ধাপে ধাপে বুঝিয়ে দেব।`}]);const [input,setInput]=useState('');const [loading,setLoading]=useState(false);const send=async()=>{if(!input.trim()||loading)return;const text=input.trim();setInput('');setMessages(m=>[...m,{role:'user',text}]);setLoading(true);try{const r=await fetch('/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:text,chapter:chapter.title,focus:chapter.focus})});const data=await r.json();setMessages(m=>[...m,{role:'assistant',text:data.answer||data.error||'উত্তর পাওয়া যায়নি।'}])}catch{setMessages(m=>[...m,{role:'assistant',text:'Server-এর সঙ্গে সংযোগ হয়নি। .env-এ OPENAI_API_KEY সেট করে server চালু করো।'}])}finally{setLoading(false)}};return <div className="ai-page"><div className="ai-head"><div><span className="eyebrow">LIVE AI TUTOR</span><h1>প্রশ্ন করো, বুঝে নাও</h1><p>Chapter context: <b>{chapter.title}</b></p></div><span className="online">● ONLINE</span></div><div className="chat">{messages.map((m,i)=><div key={i} className={m.role==='user'?'msg user':'msg'}><div className="avatar">{m.role==='user'?'YOU':'AI'}</div><div className="bubble">{m.text}</div></div>)}{loading&&<div className="msg"><div className="avatar">AI</div><div className="bubble typing">ভাবছি…</div></div>}</div><div className="chat-input"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="যেমন: Newton-এর 2nd law সহজ করে বুঝাও"/><button onClick={send}>Send ↗</button></div></div>}

createRoot(document.getElementById('root')).render(<App/>);
