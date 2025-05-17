import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('🚀 DB connected');
    app.listen(PORT, () => console.log(`🌐 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Error de conexión', err));