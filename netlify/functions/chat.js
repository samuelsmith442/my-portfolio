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
    // Log the incoming request (without sensitive data)
    console.log('Received request:', { 
      method: event.httpMethod,
      path: event.path,
      headers: Object.keys(event.headers),
      hasBody: !!event.body
    });
    
    const body = JSON.parse(event.body);
    
    // Make request to OpenAI API
    // Netlify automatically makes environment variables available via process.env
    // Try multiple possible environment variable names
    const apiKey = process.env.VITE_OPEN_API_KEY || process.env.OPEN_API_KEY || process.env.OPENAI_API_KEY;
    
    // Log available environment variables (without values for security)
    console.log('Available env vars:', Object.keys(process.env).filter(key => key.includes('API') || key.includes('OPEN')));
    
    if (!apiKey) {
      console.error('API key not configured');
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'API key not configured', 
          message: 'Please add OPENAI_API_KEY (without VITE_ prefix) to your Netlify environment variables',
          availableEnvVars: Object.keys(process.env).filter(key => !key.includes('SECRET') && !key.includes('TOKEN'))
        })
      };
    }
    
    console.log('Making request to OpenAI API');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
    
    // Check if the response is successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Error from OpenAI API', 
          status: response.status,
          details: errorText
        })
      };
    }
    
    const data = await response.json();
    console.log('Received successful response from OpenAI');
    
    // Return the response from OpenAI
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Function error:', error.message);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to process request',
        message: error.message
      })
    };
  }
};
