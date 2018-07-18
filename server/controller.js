

module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then( (products) => {
            res.status(200).send(products)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
    }, 
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body

        dbInstance.create_product(name, price, image_url)
        .then( (products) => {
            res.status(200).send(products)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;
        dbInstance.delete_product(id)
        .then( (products) => {
            res.status(200).send(products)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
        
    }
}