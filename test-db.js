const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = 'mongodb://mongodb-production-6aca.up.railway.app:27017/loan_origination_db';
  
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    const db = client.db('loan_origination_db');
    const collections = await db.listCollections().toArray();
    console.log('📚 Collections:', collections.map(c => c.name));
    
    await client.close();
    console.log('🔌 Connection closed');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection(); 