const config = {
  apiUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000' 
    : 'http://server-service:5000'
};

export default config;