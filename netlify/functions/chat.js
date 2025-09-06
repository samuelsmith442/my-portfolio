/* eslint-disable no-undef */
// netlify/functions/chat.js
// Using CommonJS syntax for Netlify Functions compatibility
const fetch = require('node-fetch'); // Netlify Functions use CommonJS modules

/**
 * Netlify serverless function to proxy requests to OpenAI API
 * @param {Object} event - Netlify function event object
 */
exports.handler = async function(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Make request to OpenAI API
    // Netlify automatically makes environment variables available via process.env
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.json();
    
    // Return the response from OpenAI
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.log('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process request' })
    };
  }
};
