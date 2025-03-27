import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";


export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAcc({email, password, name}){
        try {
            const useraccount = await this.account.create(ID.unique(), email, password, name);
            
            if(useraccount){
                //also login by default;
                return this.login({email, password});
            }
            else{
                return useraccount;

            }
            
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            throw error;
        }
    }

    async deleteSession(){
        try {
            return await this.account.deleteSessions();
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

}

const auth = new Authservice();
export default auth;