const express = require("express");
const app = express();
const { hash, compare } = require("bcrypt");

app.post("/", async (request, response) => {
    const email = "carlos@gmail.com";
    const senha = "12345678";

    const senhaCriptografada = await hash(senha, 8);

    usuario = {
        email,
        senha: senhaCriptografada
    };
    
    return response.status(201).send();
});

app.get("/", (request, response) => {
    return response.status(200).json(usuario);
});

app.post("/login", async (request, response) => {
    const senhaCriptografada = "$ddo99sd9aiw82assf389822";
    const senhaVerdadeira = "12345678";

    const senhaVerdadeiraOUFalse = await compare(senhaCriptografada, senhaCriptografada);

    return response.status(201).json({ trueOUfalse: senhaVerdadeiraOUFalse });
});

app.listen(3000, () => {
    console.log("Rodando!🤘🏻✅");
});
