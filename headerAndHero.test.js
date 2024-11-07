// headerAndHero.test.js
const { JSDOM } = require('jsdom');
const fs = require('fs');

// Load the HTML file into JSDOM (make sure the path is correct for your project)
const html = fs.readFileSync('./index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

describe('Header Section', () => {
  test('should display correct text for "Home" link', () => {
    const homeLink = document.querySelector('a.nav-link[href="{{ url_for(\'first\') }}"]');
    expect(homeLink).not.toBeNull();
    expect(homeLink.textContent).toBe('Home');
  });

  test('should display correct text for "Predict" link', () => {
    const predictLink = document.querySelector('a.nav-link[href="{{ url_for(\'index\') }}"]');
    expect(predictLink).not.toBeNull();
    expect(predictLink.textContent).toBe('Predict');
  });

  test('should display correct text for "Analysis" link', () => {
    const analysisLink = document.querySelector('a.nav-link[href="{{ url_for(\'chart\') }}"]');
    expect(analysisLink).not.toBeNull();
    expect(analysisLink.textContent).toBe('Analysis');
  });

  test('should display correct text for "Model" link', () => {
    const modelLink = document.querySelector('a.nav-link[href="{{ url_for(\'model\') }}"]');
    expect(modelLink).not.toBeNull();
    expect(modelLink.textContent).toBe('Model');
  });

  test('should display correct text for "Precautions" link', () => {
    const precautionsLink = document.querySelector('a.nav-link[href="{{ url_for(\'precautions\') }}"]');
    expect(precautionsLink).not.toBeNull();
    expect(precautionsLink.textContent).toBe('Precautions');
  });
});

describe('Hero Section', () => {
  test('should display the correct text in the hero section title', () => {
    const heroTitle = document.querySelector('#hero h1');
    expect(heroTitle).not.toBeNull();
    expect(heroTitle.textContent).toBe('Impilo: An AI Device to Detect Early Lung Cancer Using Cough Analysis');
  });
});
