import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
import path from 'path';
import {fileURLToPath} from 'url';

const app=express();
app.use(express.json({limit:'1mb'}));
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const root=path.join(__dirname,'..');
const client=process.env.OPENAI_API_KEY?new OpenAI({apiKey:process.env.OPENAI_API_KEY}):null;

app.get('/api/health',(req,res)=>res.json({ok:true, ai:Boolean(client), model:process.env.OPENAI_MODEL||'gpt-5.5'}));
app.post('/api/tutor',async(req,res)=>{
  const {question,chapter,focus}=req.body||{};
  if(!question)return res.status(400).json({error:'প্রশ্ন লিখো।'});
  if(!client)return res.status(503).json({error:'AI key configured হয়নি। .env ফাইলে OPENAI_API_KEY সেট করো।'});
  try{
    const response=await client.responses.create({
      model:process.env.OPENAI_MODEL||'gpt-5.5',
      instructions:`তুমি বাংলাদেশের নবম-দশম শ্রেণির পদার্থবিজ্ঞানের একজন বন্ধুসুলভ শিক্ষক। উত্তর বাংলা ভাষায় দাও, কিন্তু প্রয়োজন হলে standard physics notation রাখো। Student যেন মুখস্থ না করে concept বুঝতে পারে। Chapter: ${chapter}. Focus: ${focus}. প্রশ্নের উত্তর পরীক্ষার উপযোগী, ধাপে ধাপে এবং ভুল হলে তা ধরিয়ে দাও। Numerical হলে: Given → Formula → Calculation → Answer format ব্যবহার করো।`,
      input:question
    });
    res.json({answer:response.output_text});
  }catch(error){console.error(error);res.status(500).json({error:'AI response পাওয়া যায়নি। API key/model/connection যাচাই করো।'});}
});
app.use(express.static(path.join(root,'dist')));
app.use((req,res)=>res.sendFile(path.join(root,'dist','index.html')));
const port=Number(process.env.PORT||8787);app.listen(port,()=>console.log(`Physics AI app running on http://localhost:${port}`));
