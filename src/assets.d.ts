// Allow importing individual assets
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.glb";

// This specifically fixes the ts(7016) error for your index files
declare module "../assets/images/index.js" {
    const content: any;
    export default content;
}

declare module "../assets/icons/index.js" {
    const content: any;
    export default content;
}