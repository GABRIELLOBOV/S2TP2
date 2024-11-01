const mongoose = require('mongoose'); 

// Conexión a MongoDB con las opciones correctamente configuradas
mongoose.connect('mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursodanodejs', { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Conexión exitosa a MongoDB local'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

mongoose.connect('mongodb://localhost:27017/cursodanodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB local'))
.catch(error => console.error('Error al conectar a MongoDB:', error));


// Esquema del superhéroe
const superheroSchema = new mongoose.Schema({ 
    nombreSuperHeroe: { type: String, required: true }, 
    nombreReal: { type: String, required: true }, 
    edad: { type: Number, min: 0 }, 
    planetaOrigen: { type: String, default: 'Desconocido' }, 
    debilidad: String, 
    poderes: [String], 
    aliados: [String], 
    enemigos: [String], 
    createdAt: { type: Date, default: Date.now } 
});*/
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-12' }); // Aquí defines la colección de cada grupo


// Modelo para el superhéroe
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// Función para insertar un superhéroe
async function insertSuperHero() { 
    const hero = new SuperHero({ 
        nombreSuperHeroe: 'Full Stack', 
        nombreReal: 'Gabriel Lobo Varela', 
        edad: 45, 
        planetaOrigen: 'Tierral de SFVC', 
        debilidad: 'Modulo 3',
        poderes: ['Node', 'Trello', 'Git Hub', 'Discord'], 
        aliados: ['Equipo 12'], 
        enemigos: ['Tiempo']
    });
    
    await hero.save(); 
    console.log('Superhéroe insertado:', hero); 
}

// Llamada a la función insertSuperHero
insertSuperHero(); 

// Función para actualizar un superhéroe
async function updateSuperHero(nombreSuperHeroe) { 
    const result = await SuperHero.updateOne( 
        { nombreSuperHeroe: nombreSuperHeroe }, 
        { $set: { edad: 46 } }
    );
    console.log('Resultado de la actualización:', result); 
}

// Llamada a la función updateSuperHero
updateSuperHero('Full Stack');
