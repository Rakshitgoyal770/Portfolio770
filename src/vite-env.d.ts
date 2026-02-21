declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.glb";

// This specifically fixes your index.js / index.d.js error
declare module "../assets/icons" {
    const content: any;
    export default content;
}

declare module "../assets/images" {
    const content: any;
    export default content;
}