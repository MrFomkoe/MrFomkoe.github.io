const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(cors());

const url =
  'mongodb+srv://group3:jsgroupproject@cluster0.ivs3a.mongodb.net/fita-js-project?retryWrites=true&w=majority';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  userName: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);
  /*
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log(' Mongoose is connected'));
  */

  const user1 = new User({
    email: 'vip@vip.lv',
    userName: 'ViAiPi',
    firstName: 'Vitalijs',
    lastName: 'Piskunovs',
  });

  const user2 = new User({
    email: '2vip@vip.lv',
    userName: '2ViAiPi',
    firstName: '2Vitalijs',
    lastName: '2Piskunovs',
  });

  const user3 = new User({
    email: '3vip@vip.lv',
    userName: '3ViAiPi',
    firstName: '3Vitalijs',
    lastName: '3Piskunovs',
  });

  const user4 = new User({
    email: '4vip@vip.lv',
    userName: '4ViAiPi',
    firstName: '4Vitalijs',
    lastName: '4Piskunovs',
  });

  const user5 = new User({
    email: '5vip@vip.lv',
    userName: '5ViAiPi',
    firstName: '5Vitalijs',
    lastName: '5Piskunovs',
  });

  const user6 = new User({
    email: '6vip@vip.lv',
    userName: '6ViAiPi',
    firstName: '6Vitalijs',
    lastName: '6Piskunovs',
  });

  await user1.save();

  // Find all users in the database
  
  app.get('/users', function (res, req) {
    const users = User.find();
    console.log("users: ", users)
    // res.send(users);
  });
  // Filter users by userName
  //   await User.find({ userName: /^2ViAiPi/ });

  // Find one from database
  //   const userFromDb = await User.findOne({ userName: '6ViAiPi' });
  //   console.log('userFromDb', userFromDb);
}

app.listen(3000, function () {
  console.log(`listening on http://localhost:${port}`);
});
