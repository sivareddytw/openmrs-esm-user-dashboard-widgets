declare module "*.css";

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "@openmrs/esm-api";

declare module "JSX";
