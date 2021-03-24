// Require Model
const { Schema, model } = require('../services');

// Declare Role Valid
const ROLES = [ 'ADMIN_ROLE', 'COLLABORATOR_ROLE'];

const createSchema = ((Schema, model) => ({ ROLES }) => {

    // Declare Schema
    const UserSchema = Schema({
        id: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: [true, 'The name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'The email is required'],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'The password is required'],
            trim: true
        },
        role: {
            type: String,
            enum: ROLES,
            default: 'ADMIN_ROLE',
        },
        registrationDate: {
            type: Date,
            default: Date.now()
        },
    });

    // DO NOT RETURN PASSWORD
    UserSchema.methods.toJSON = function() {
        let user = this;
        let userObject = user.toObject();
        delete userObject.password;

        return userObject;
    };

    // Create Model to export
    const User = model('User', UserSchema);

    return User;

})(Schema, model) 

const User = createSchema({ ROLES });

module.exports = User;