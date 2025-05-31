import conf from '../conf/conf.js';
 import { Client,Databases ,Storage, Query, ID } from "appwrite";

export class Service{
    client = new Client();
    bucket;
    databases;


    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);


        bucket = new Storage(this.client);
        databases = new Databases(this.client);

    }

    async createpost({title, slug, content, featuredImage,status, userId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async updatepost({title, slug, content, featuredImage,status, userId }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async delete({ slug}){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )

            return true;
            
        } catch (error) {
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async getDoc(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async listDoc(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                    
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            throw error; 
            return false;
        }
    }

    //file upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            return  false;
            
        }  
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Error creating post:", error);
            return  false;
            
        }  
    }

    getfilepreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("Error creating post:", error);
            return  false;
            
        }  
    }

}


const service = new Service();
export default service;

