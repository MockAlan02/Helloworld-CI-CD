const fs = require('fs');
test('HTML file should have <h1>Hola Mundo</h1>', () => {
    const htmlContent = fs.readFileSync('index.html', 'utf-8');
    expect(htmlContent).toMatch(/<h1>Hola Mundo<\/h1>/);
});
