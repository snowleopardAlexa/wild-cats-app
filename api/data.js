module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json ([
           {name: "Lion", habitant: "Africa", left: 3000, level: "Endangered"},
           {name: "Tiger", habitant: "Asia", left: 2000, level: "Endangered"},
           {name: "Snow Leopard", habitant: "Asia", left: 8000, level: "Endangered"},
        ])
    } else {
        const {name, habitant, left, level} = req.body;

        res.send({status: "Cat Added", name, habitant, left, level });
    }
}