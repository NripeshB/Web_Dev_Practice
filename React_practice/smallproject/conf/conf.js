const conf = {
    appwriteUrl: String(import.meta.env.VITE_REACT_APP_URL),
    appwriteProjectId: String(import.meta.env.VITE_REACT_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_REACT_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_REACT_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_REACT_BUCKET_ID),
}

export default conf 