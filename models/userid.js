import mongoose from 'mongoose';

const postSchema = new mongoose.schema({
    id: String,
    name: String,
});

var UserID = mongoose.model('userid', postSchema);

export default UserID;