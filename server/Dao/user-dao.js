const Logger = require('../logger/logger');
const log = new Logger('User-Dao');
const mongoose = require('mongoose');
const userSchema = require('./user-schema-model').mongoUserSchema;
const UserModel = mongoose.model('User', userSchema);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dbUrl = "mongodb+srv://ayush:ayush@cluster0.qrfvug8.mongodb.net/test";

const secretKey = getJWT();

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(log.info('connected to mongo database....'))
    .catch(err => log.error('unable to connect, please check your connection....' + err));

async function validateLoginUser(loginInfo, response) {
    await UserModel.findOne({ username: loginInfo.username }, (err, result) => {
        if (err || !result) {
            log.error(`Error in finding user with username ${loginInfo.username}: ` + err);
            return response.status(400).send({
                username: loginInfo.username,
                messageCode: 'USRFE',
                message: 'No user found with username ' + loginInfo.username
            });
        }

        if (result && bcrypt.compare(loginInfo.password, result.password)) {
            log.info(loginInfo.username + ' has been validated');
            const jwtToken = jwt.sign({
                username: result.username,
            }, secretKey);

            return response.header('x-auth-token', jwtToken).send({
                username: loginInfo.username,
                messageCode: 'USRV',
                message: 'Valid credential.'
            });
        }
        else {
            log.warn('Unable to validate ' + loginInfo.username);
            return response.status(404).send({
                username: loginInfo.username,
                messageCode: 'USRNPI',
                message: 'Username or Password incorrect.'
            });
        }
    });
}

async function resgisterNewUser(userObj, response) {
    let newUser = new UserModel({
        firstname: userObj.firstname,
        lastname: userObj.lastname,
        emailId: userObj.emailId,
        username: userObj.username,
        password: userObj.password,
        phoneNo: userObj.phoneNo,
        city: userObj.city,
        state: userObj.state,
        country: userObj.country,
        pin: userObj.pin,
        aadharId: userObj.aadharId,
        panNo: userObj.panNo,
        gender: userObj.gender,
        annialIncome: userObj.annialIncome,
        marital: userObj.marital,
    });

    newUser.password = newUser.encryptPassword();

    await newUser.save((err, result) => {
        if (err) {
            log.error(`Error in registering new user with username ${userObj.username}: ` + err);
            return response.status(400).send({
                messageCode: new String(err.errmsg).split(" ")[0],
                message: 'Username ' + userObj.username + ' already exists.'
            });
        };
        log.info(result.username + ' has been registered');
        return response.send({
            messageCode: 'USRR',
            message: 'You have been registered successfully.',
            username: result.username
        });
    });
}

async function getUserByUsername(username, response) {
    await UserModel.find({ username: username }, (err, result) => {
        if (err) {
            log.error(`Error in retrieving user by username ${username} : ` + err);
            return response.status(404).send({
                messageCode: 'USRFE',
                message: 'No user found by username ' + username
            });
        }
        log.info('Retrieving user details by username ' + username);
        return response.send(result);
    });
}

async function getUserByPhoneNo(phoneNo, response) {
    await UserModel.find({ phoneNo: phoneNo }, (err, result) => {
        if (err) {
            log.error(`Error in retrieving user by phone no. ${phoneNo}: ` + err);
            return response.status(404).send({
                messageCode: 'USRFE',
                message: 'No user found by phone no. ' + phoneNo
            });
        }
        log.info('Retrieving user details by phone no. ' + phoneNo);
        return response.send(result);
    });
}
function getJWT() {
    // console.log("function working");
    try {
        var custom_env_variable = {
            "jwt": {
                "secretkey": "bankingapp-secretkey"
            }
        }
        const temp = custom_env_variable.jwt.secretkey;
        console.log({ temp });
        return temp;
        // console.log({ config });
        // return config.get('jwt.secretkey');
    }
    catch (err) {
        console.error(`jwt secret key setting up failed ${err} check logger`);
        process.exit(0);
    }
}

module.exports = {
    validateLoginUser,
    resgisterNewUser,
    // updatePassword,
    // updateEmail,
    // updatePhonoNo,
    getUserByUsername,
    getUserByPhoneNo
}