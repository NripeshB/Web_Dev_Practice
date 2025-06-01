import env_Import from "../environment_import/environment_import.js"
import { Client, Account, ID } from "appwrite";

//in theory we can just do 

/*
const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
*/ 

// but we have to input the userinfo manually and it causes a vendor 
// lock in .... better approach is below:

export class AuthService{
 
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(env_Import.appwriteURL)
            .setProject(env_Import.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password,name )
            if (userAccount) {
                //if created login it
                return this.login({email, password});

            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite service error :: getcurrentuser :: error", error );
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            console.log("Appwrite service error :: logout :: error", error );
        }
        return null;
    }

}

const authservice = new AuthService();

export default authservice