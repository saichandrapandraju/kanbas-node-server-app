export default function PathParameters(app) {
    // Add two numbers passed in as path parameters
    app.get("/lab5/calculator/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
  
    // Subtract two numbers passed as path parameters
    app.get("/lab5/calculator/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const difference = parseInt(a) - parseInt(b);
      res.send(difference.toString());
    });
  
    // Multiply two numbers passed as path parameters
    app.get("/lab5/calculator/multiply/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const product = parseInt(a) * parseInt(b);
      res.send(product.toString());
    });
  
    // Divide two numbers passed as path parameters
    app.get("/lab5/calculator/divide/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const quotient = parseInt(a) / parseInt(b);
      res.send(quotient.toString());
    });
  }