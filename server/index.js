import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

app.use(express.static(dist));

app.use((req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

const port = Number(process.env.PORT || 8787);

app.listen(port, '0.0.0.0', () => {
  console.log(`Physics app running on http://localhost:${port}`);
});
