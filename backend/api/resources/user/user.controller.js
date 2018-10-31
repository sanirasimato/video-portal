import User  from './user.model';

export default {

    // Create users
    async createUser(req, res) {

        try {

            const users = await User.create(req.body);
            return res.json({ status: 'SUCCESS', data: users });
            
        } catch (error) {
            
            console.error('Error occrred at UserController.create : error => ' + error);
            return res.status(500).send(error);
        }
    },

    // Get all users
    async getUsers(req, res) {
        
        try {

            const users = await User.find();
            return res.json({ status: 'SUCCESS', data: users });
            
        } catch (error) {
            
            console.error('Error occrred at UserController.getUsers : error => ' + error);
            return res.status(500).send(error);
        }
    }
}