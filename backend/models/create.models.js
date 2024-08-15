import userModel from './user.model.js';

async function createUserModel(username, password) {
    const data = new userModel({
        username: username,
        password: password,
      });
    
      try {
        const dataToSave = await data.save();
        console.log(dataToSave);
      } catch (error) {
        console.log({ message: error.message });
      }
}