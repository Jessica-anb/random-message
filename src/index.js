const messages = [
    "Oscar",
    "Jessica",
    "Alexandra",
    "Veronica",
    "Elizabeth",
    "Diego",
    "Laura",
    "Marco"
];

const randomMsg = () => {
    //Math.floor: regresa el primer valor redondeado
    //Math.random: regresa un valor random del numero de elementos del arreglo
    //por ello lo multiplica por el length del arreglo
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };