import express from 'express'; // Importa o framework Express para criar o servidor
import cors from 'cors'; // Importa o middleware CORS para permitir requisições externas

const app = express(); //Cria a aplicação servidor

app.use(cors()); // Habilita o CORS para todas as rotas

app.get('/', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-br'),
        status: 'API no Render funcionando',
        SO: os.platform(),
        ram: os.totalmem(),
        time: os.uptime(),
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})