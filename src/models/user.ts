import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
export const User = mongoose.model('User', UserSchema);

export class UserModel {


    public insert(user, callback) {
        let newUser = new User(user);
        newUser.save((err, user) => {
            if (err) {
                throw err;
            }
            callback(user);
        });
    }

    public getAllUsers(filter, callback) {
        User.find({}, (err, users) => {
            if (err) {
                throw err;
            }
            callback(users)
        });
    }
}