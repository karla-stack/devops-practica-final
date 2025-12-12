const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps CI/CD - Practica Final</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            
            .container {
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                padding: 50px;
                max-width: 600px;
                width: 100%;
                text-align: center;
                animation: fadeIn 0.8s ease-in;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .icon {
                font-size: 80px;
                margin-bottom: 20px;
                animation: bounce 2s infinite;
            }
            
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
            
            h1 {
                color: #333;
                font-size: 2.5em;
                margin-bottom: 10px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .subtitle {
                color: #666;
                font-size: 1.2em;
                margin-bottom: 30px;
            }
            
            .info-card {
                background: #f8f9fa;
                border-radius: 10px;
                padding: 20px;
                margin: 20px 0;
                text-align: left;
            }
            
            .info-item {
                display: flex;
                align-items: center;
                margin: 10px 0;
                color: #555;
            }
            
            .info-item span {
                margin-right: 10px;
                font-size: 20px;
            }
            
            .badge {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 8px 20px;
                border-radius: 20px;
                margin: 5px;
                font-size: 0.9em;
                font-weight: 600;
            }
            
            .footer {
                margin-top: 30px;
                color: #999;
                font-size: 0.9em;
            }
            
            .status {
                display: inline-block;
                width: 12px;
                height: 12px;
                background: #00ff88;
                border-radius: 50%;
                margin-right: 8px;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
            }
            
            @media (max-width: 600px) {
                .container {
                    padding: 30px 20px;
                }
                
                h1 {
                    font-size: 1.8em;
                }
                
                .icon {
                    font-size: 60px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="icon">🚀</div>
            <h1>Hola Mundo</h1>
            <p class="subtitle">DevOps CI/CD - Practica Final</p>
            
            <div class="info-card">
                <div class="info-item">
                    <span>✅</span>
                    <div><strong>Estado:</strong> <span class="status"></span>Funcionando correctamente</div>
                </div>
                <div class="info-item">
                    <span>🔧</span>
                    <div><strong>Tecnologia:</strong> Node.js + Express</div>
                </div>
                <div class="info-item">
                    <span>🐳</span>
                    <div><strong>Contenedor:</strong> Docker</div>
                </div>
                <div class="info-item">
                    <span>⚡</span>
                    <div><strong>Despliegue:</strong> Render</div>
                </div>
            </div>
            
            <div style="margin-top: 30px;">
                <span class="badge">GitHub Actions</span>
                <span class="badge">Docker Hub</span>
                <span class="badge">CI/CD Pipeline</span>
            </div>
            
            <div class="footer">
                <p>Desarrollado por Karla</p>
                <p style="margin-top: 5px;">© 2025 - Practica DevOps</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Aplicacion funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;