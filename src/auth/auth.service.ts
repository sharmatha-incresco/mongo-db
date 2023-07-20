import { Injectable } from '@nestjs/common';
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
} from 'amazon-cognito-identity-js'
import { register } from './auth.registerdto';
import { User } from './auth.userdto';

@Injectable()
export class AuthService {

    private userPool: CognitoUserPool;
    getauth(): string {
        return 'this is auth service'
    }



    constructor() {
        this.userPool = new CognitoUserPool({
            UserPoolId: "eu-north-1_IZkCTImRI",
            ClientId: "38ncc8oubhbdf1re7pketealba",
        });
    }

    async registerUser(authRegisterUserDto: register) {
        const { name, email, password, } = authRegisterUserDto;
        return new Promise((resolve, reject) => {
            this.userPool.signUp(
                email,
                password,
                [
                    new CognitoUserAttribute({
                        Name: 'email',
                        Value: email,
                    }),
                ],
                null,
                (err, result) => {
                    if (!result) {
                        reject(err);
                    } else {
                        resolve(result.user);
                    }
                },
            );
        });
    }

    async authenticateUser(authLoginUserDto: User) {
        const { email, password } = authLoginUserDto;
        const userData = {
            Username: email,
            Pool: this.userPool,
        };

        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });


        const userCognito = new CognitoUser(userData);
        


        return new Promise((resolve, reject) => {
console.log();


            userCognito.authenticateUser(authenticationDetails, {
               
                onSuccess: (result) => {
                    console.log("hello")
                    resolve({
                        accessToken: result.getAccessToken().getJwtToken(),
                        refreshToken: result.getRefreshToken().getToken(),
                    });
                    return result.getAccessToken().getJwtToken()
                },
                onFailure: (err) => {
                    console.log(authenticationDetails);
                    reject(err);
                },
            });
        });
    }

}