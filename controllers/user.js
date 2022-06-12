import User from '../models/user';
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec(); // tìm user dựa trên ID
        req.profile = user;
        next()
    } catch (error) {
        res.status(400).json({
            msg: 'User không tồn tại'
        })
    }

}
export const read = (req, res) => {
    const user = req.profile;

    user.hashed_password = undefined;
    user.salt = undefined;

    res.json(user);
}

export const creat = async (req, res) => {
    try {
        // Dữ liệu từ form client gửi lên
        const user = await new User(req.body).save();
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const user = await User.findOneAndDelete(condition);
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
}

export const list = async (req, res) => {
    try {
        const users = await User.find().exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Khong tim duoc san pham"
        })
    }
}
