import { evaluate } from 'mathjs';


const home = (req, res) =>{ 
    res.send("Bienvenidos Estudiantes SENA - Controlador Contactos");
};


const operacion =   (req, res) =>{ 
    const { input } = req.params;
    
    let resultado = evaluate(input); 
    console.log(resultado);
    res.json({
        "resultado" : resultado
    });

};

export {
    home,
    operacion
}