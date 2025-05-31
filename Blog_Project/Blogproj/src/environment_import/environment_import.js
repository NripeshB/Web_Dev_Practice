
// this is done so while importing the environment variables in the 
// config and authentication , we are using readable variables 
// and also to make sure that the parsing of the env vars is done
// strictly as string values

const env_Import= {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
}

export default env_Import