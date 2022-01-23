module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json ([
           {name: "Lion", habitant: "Africa", left: 3000, level: "Endangered"},
           {name: "Lion", habitant: "Africa", left: 3000, level: "Endangered"},
           {name: "Lion", habitant: "Africa", left: 3000, level: "Endangered"},
        ])
    } else {
        const {name, habitant, left, level} = req.body;

        res.send({status: "Cat Added", name, habitant, left, level });
    }
}